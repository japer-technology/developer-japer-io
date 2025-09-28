# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions CI/CD workflows for automated testing and security scanning
- Issue and pull request templates for better community contribution
- Dependabot configuration for automated dependency updates
- Comprehensive contributing guidelines (CONTRIBUTING.md)
- Security policy and vulnerability reporting process (SECURITY.md)
- Root package.json with development dependencies and scripts
- ESLint and Prettier configuration for code quality
- EditorConfig for consistent code formatting
- Enhanced README with build status badges and improved documentation

### Changed
- Improved project structure for better maintainability
- Enhanced .gitignore with comprehensive exclusions

### Security
- Added CodeQL security scanning workflow
- Implemented security policy and private vulnerability reporting

## [1.0.0] - 2025-01-01

### Added
- Initial repository structure
- Basic README with API overview and getting started instructions
- MIT License
- Contributor Covenant Code of Conduct
- Node.js example for API ping functionality
- Asset images and documentation
- Basic .gitignore file

### API Endpoints Documented
- `/ping` - Check API Gateway status
- `/v1/ping` - Check Lambda status
- `/v1/x/nexus/status` - Check Nexus status
- `/v1/x/device/create` - Create new JAPER Device
- `/v1/x/device/status` - Retrieve device status
- `/v1/x/device/purge` - Remove device validations
- `/v1/x/device/kill` - Permanently disable device
- `/v1/x/encrypt` - Encrypt data to generate JAPER Data
- `/v1/x/decrypt` - Decrypt JAPER Data (aliases: lookup, execute)
- `/v1/x/validation/attempt` - Conduct PIN validation
- `/v1/x/validate/domain` - Domain validation via DNS TXT
- `/v1/x/validate/email` - Send validation email PIN
- `/v1/x/validate/sms` - Dispatch validation SMS PIN

---

## Types of Changes

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes