#  [developer-japer-io](https://developer.japer.io)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/japer-technology/developer-japer-io/actions/workflows/ci.yml/badge.svg)](https://github.com/japer-technology/developer-japer-io/actions/workflows/ci.yml)
[![CodeQL](https://github.com/japer-technology/developer-japer-io/actions/workflows/codeql.yml/badge.svg)](https://github.com/japer-technology/developer-japer-io/actions/workflows/codeql.yml)
[![AI](https://img.shields.io/badge/Assisted-Development-2b2bff?logo=openai&logoColor=white)](https://www.japer.technology)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/Code%20of%20Conduct-Contributor%20Covenant-blue.svg)](CODE_OF_CONDUCT.md)

The official public repository of **resources** for use with the JAPER Technology API.

JAPER is a security-focused platform that helps developers manage devices, validate users, and protect data. The API supports secure device creation and lifecycle management, multi-channel validation via email, SMS, or domain checks, and robust encryption and decryption services. Typical use cases include controlling devices for IoT deployments, verifying customer identities, and safeguarding sensitive information.

## Getting Started

1. **Sign up** for an account at [www.japer.technology](https://www.japer.technology/shop) and purchase your API key.
2. **Read the documentation** at [developer.japer.io](https://developer.japer.io) and understand **our** interface.
3. **Explore examples** in this repository to quick start your implementation.
4. **Join our community** by contributing or asking questions in [Discussions](https://github.com/japer-technology/developer-japer-io/discussions).

### Prerequisites

- API key from [JAPER Technology](https://www.japer.technology/shop)
- Basic understanding of REST APIs
- Your preferred programming language (we provide examples for Node.js, with more coming soon)

## API Overview

`/ping` Check the status of JAPER AWS API Gateway.

`/v1/ping` Check the status of JAPER AWS Lambda.

`/v1/x/nexus/status` Check the status of JAPER Nexus.

`/v1/x/device/create` Create a new JAPER Device.

`/v1/x/device/status` Retrieve the status of a JAPER Device.

`/v1/x/device/purge` Remove all validations from a JAPER Device.

`/v1/x/device/kill` Permanently disable a JAPER Device.

`/v1/x/encrypt` Encrypt data to generate JAPER Data

`/v1/x/decrypt` Decrypt JAPER Data (aliases: lookup, execute).

`/v1/x/validation/attempt` Conduct PIN validation from email or sms.

`/v1/x/validate/domain` Conduct domain validation via DNS TXT record.

`/v1/x/validate/email` Send a validation email PIN.

`/v1/x/validate/sms` Dispatch a validation SMS PIN.

`/v1/x/validation/status` Check a JAPER Customer's opt-out status.

## Examples

The [examples/node](examples/node) folder contains a simple Node.js script.
Set the `NODE_API_KEY` environment variable and run `node ping.js` to
ping the API.

## Contributing and Feedback

We welcome contributions! 🎉

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/japer-technology/developer-japer-io/issues)
- **Pull Requests**: Submit improvements via [Pull Requests](https://github.com/japer-technology/developer-japer-io/pulls)
- **Discussions**: Ask questions or share ideas in [GitHub Discussions](https://github.com/japer-technology/developer-japer-io/discussions)
- **Security**: Report vulnerabilities via our [Security Policy](SECURITY.md)

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

For direct feedback, use the contact information on [developer.japer.io](https://developer.japer.io).

## Development

This repository uses modern development practices:

- **GitHub Actions** for CI/CD
- **ESLint** and **Prettier** for code quality
- **Dependabot** for dependency updates
- **CodeQL** for security scanning

To contribute:

```bash
# Clone the repository
git clone https://github.com/japer-technology/developer-japer-io.git
cd developer-japer-io

# Install dependencies
npm install

# Run linting
npm run lint

# Run tests
npm test
```

## License

This repository is released under the [MIT License](LICENSE.md). By contributing, you agree that your contributions will be licensed under the MIT License as well.

![JAPER](https://japertechnology.github.io/JAPER-Black.svg)
