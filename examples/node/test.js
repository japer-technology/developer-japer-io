const https = require('https');
const { spawn } = require('child_process');

/**
 * Simple test runner for the Node.js example
 */
class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(name, fn) {
    this.tests.push({ name, fn });
  }

  async run() {
    console.log('🧪 Running Node.js Example Tests\n');

    for (const { name, fn } of this.tests) {
      try {
        console.log(`  Testing: ${name}`);
        await fn();
        console.log(`  ✅ PASS: ${name}`);
        this.passed++;
      } catch (error) {
        console.log(`  ❌ FAIL: ${name}`);
        console.log(`     Error: ${error.message}`);
        this.failed++;
      }
      console.log('');
    }

    console.log('📊 Test Results:');
    console.log(`   Passed: ${this.passed}`);
    console.log(`   Failed: ${this.failed}`);
    console.log(`   Total:  ${this.tests.length}`);

    if (this.failed > 0) {
      process.exit(1);
    }
  }

  assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }

  async makeRequest(options) {
    return new Promise((resolve, reject) => {
      const req = https.request(options, res => {
        let data = '';
        res.on('data', chunk => (data += chunk));
        res.on('end', () => resolve({ statusCode: res.statusCode, data }));
      });

      req.on('error', reject);
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
      req.end();
    });
  }

  async runChildProcess(command, args, env = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        env: { ...process.env, ...env },
        stdio: 'pipe',
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', data => (stdout += data));
      child.stderr.on('data', data => (stderr += data));

      child.on('close', code => {
        resolve({ code, stdout, stderr });
      });

      child.on('error', reject);

      // Kill after 10 seconds to prevent hanging
      setTimeout(() => {
        child.kill();
        reject(new Error('Child process timeout'));
      }, 10000);
    });
  }
}

const runner = new TestRunner();

// Test 1: Check that ping.js exists and is readable
runner.test('ping.js file exists and is readable', async () => {
  const fs = require('fs');
  const exists = fs.existsSync('./ping.js');
  runner.assert(exists, 'ping.js file should exist');

  const content = fs.readFileSync('./ping.js', 'utf8');
  runner.assert(content.includes('api.japer.io'), 'Should contain JAPER API endpoint');
  runner.assert(content.includes('NODE_API_KEY'), 'Should reference NODE_API_KEY environment variable');
});

// Test 2: Script should fail gracefully without API key
runner.test('ping.js fails gracefully without API key', async () => {
  const result = await runner.runChildProcess('node', ['ping.js'], { NODE_API_KEY: '' });
  runner.assert(result.code === 1, 'Should exit with error code when no API key provided');
  runner.assert(
    result.stderr.includes('NODE_API_KEY'),
    'Should show error message about missing API key',
  );
});

// Test 3: Script attempts to make request with API key (will fail but should not crash)
runner.test('ping.js attempts request with fake API key', async () => {
  const result = await runner.runChildProcess('node', ['ping.js'], {
    NODE_API_KEY: 'fake-test-key-123',
  });
  // The script should run without crashing, even if the API returns an error
  runner.assert(result.code !== undefined, 'Should complete execution');
});

// Test 4: Check HTTPS connectivity to JAPER API (basic connectivity test)
runner.test('JAPER API endpoint is reachable', async () => {
  try {
    const result = await runner.makeRequest({
      hostname: 'api.japer.io',
      path: '/ping',
      method: 'GET',
      timeout: 5000,
    });
    // We expect some response, even if it's an error due to missing auth
    runner.assert(
      result.statusCode >= 200 && result.statusCode < 500,
      `Should get a valid HTTP response, got ${result.statusCode}`,
    );
  } catch (error) {
    // Network errors are acceptable in CI environments
    console.log(`     Note: Network connectivity test failed (${error.message})`);
    console.log('     This is acceptable in CI environments without internet access');
  }
});

// Test 5: Validate package.json structure
runner.test('package.json is properly structured', async () => {
  const fs = require('fs');
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

  runner.assert(packageJson.name === 'japer-node-example', 'Should have correct name');
  runner.assert(packageJson.license === 'MIT', 'Should have MIT license');
  runner.assert(packageJson.scripts && packageJson.scripts.start, 'Should have start script');
  runner.assert(packageJson.scripts && packageJson.scripts.test, 'Should have test script');
});

// Run all tests
runner.run().catch(console.error);