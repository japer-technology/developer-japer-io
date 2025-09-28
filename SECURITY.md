# Security Policy

## Supported Versions

We actively support the following versions of this project:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

At JAPER Technology, we take security seriously. If you discover a security vulnerability, please follow these guidelines:

### 🔒 Private Disclosure

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by:

1. **Email**: Send details to [security@japer.technology](mailto:security@japer.technology)
2. **GitHub Security Advisory**: Use our [private vulnerability reporting](https://github.com/japer-technology/developer-japer-io/security/advisories/new)

### 📋 What to Include

When reporting a vulnerability, please include:

- **Type of issue** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths** of source file(s) related to the manifestation of the issue
- **Location** of the affected source code (tag/branch/commit or direct URL)
- **Special configuration** required to reproduce the issue
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact** of the issue, including how an attacker might exploit it

### 🎯 Scope

This security policy applies to:

- **This repository** and its code
- **API examples** and sample implementations
- **Documentation** that could lead to security issues
- **Dependencies** used in examples

### ⚡ Response Timeline

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within **48 hours**
- **Initial Assessment**: We will provide an initial assessment within **5 business days**
- **Status Updates**: We will keep you informed of our progress
- **Resolution**: We aim to resolve critical vulnerabilities within **30 days**

### 🏆 Recognition

We believe in recognizing security researchers who help keep our project safe:

- **Security researchers** who report valid vulnerabilities will be credited (unless they prefer to remain anonymous)
- **Severity levels** will be assessed using industry-standard criteria
- **Public acknowledgment** will be made after the vulnerability is resolved

### 🛡️ Security Best Practices

When using JAPER API or this repository's examples:

#### API Key Security
- **Never commit API keys** to version control
- **Use environment variables** for API keys
- **Rotate keys regularly**
- **Use different keys** for different environments (dev, staging, prod)

#### Code Examples
- **Validate all inputs** before sending to the API
- **Use HTTPS** for all API communications
- **Implement proper error handling**
- **Don't log sensitive data**

#### Dependencies
- **Keep dependencies updated** to latest secure versions
- **Use npm audit** or similar tools to check for vulnerabilities
- **Remove unused dependencies**

### 🚫 Out of Scope

The following are typically **not** considered security vulnerabilities:

- **Rate limiting** issues (unless they lead to DoS)
- **Missing security headers** in example applications (unless they demonstrate unsafe patterns)
- **Self-XSS** requiring user interaction to exploit themselves
- **Issues** requiring physical access to a user's device
- **Social engineering** attacks
- **Issues** in third-party dependencies (please report to the respective maintainers)

### 📞 Emergency Contact

For critical security issues requiring immediate attention:

- **Email**: [security@japer.technology](mailto:security@japer.technology)
- **Subject Line**: `[URGENT SECURITY] Brief description`

### 🔐 Encryption

For sensitive communications, you may encrypt your message using our PGP key:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
[PGP Key would be provided here in a real implementation]
-----END PGP PUBLIC KEY BLOCK-----
```

### 📜 Legal

- We will not pursue legal action against security researchers who follow this policy
- We ask that you not publicly disclose the vulnerability until we have resolved it
- We ask that you not access or modify user data beyond what is necessary to demonstrate the vulnerability

### 🙏 Thank You

We appreciate the security community's efforts to responsibly disclose vulnerabilities and help us maintain the security of our project and our users' data.

---

**This security policy is subject to change without notice. Please check back regularly for updates.**

Last updated: 2025-01-01