# Contributing to JAPER Developer Resources

Thank you for your interest in contributing to the JAPER Developer Resources repository! We welcome contributions from the community and are grateful for your help in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment (see [Development Setup](#development-setup))
4. Create a new branch for your changes
5. Make your changes
6. Test your changes thoroughly
7. Submit a pull request

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug fixes** - Help us fix issues in the code or documentation
- **Feature enhancements** - Add new functionality or improve existing features
- **Documentation improvements** - Help improve our documentation
- **Examples** - Add new examples in different programming languages
- **Tests** - Help us improve our test coverage
- **Security improvements** - Help us identify and fix security issues

### What We're Looking For

- **New language examples** - Python, Go, PHP, Ruby, Java, C#, etc.
- **Improved documentation** - Clearer explanations, better formatting
- **Test improvements** - Unit tests, integration tests, example tests
- **Security enhancements** - Better security practices, vulnerability fixes
- **Performance improvements** - Optimizations and efficiency improvements

## Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm (usually comes with Node.js)
- Git

### Local Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/developer-japer-io.git
   cd developer-japer-io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the linter:
   ```bash
   npm run lint
   ```

4. Run tests:
   ```bash
   npm test
   ```

### Testing Examples

To test the Node.js example:

```bash
cd examples/node
npm install
export NODE_API_KEY="your-api-key-here"  # Optional for testing
node ping.js
```

## Submitting Changes

### Pull Request Process

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our style guidelines

3. **Write or update tests** as needed

4. **Update documentation** if you're changing functionality

5. **Run the full test suite**:
   ```bash
   npm test
   npm run lint
   ```

6. **Commit your changes** with a clear commit message:
   ```bash
   git commit -m "feat: add Python example for device management"
   ```

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** on GitHub with:
   - Clear title and description
   - Reference to any related issues
   - Screenshots if applicable
   - List of changes made

### Commit Message Guidelines

We follow conventional commit format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `test:` for adding or updating tests
- `refactor:` for code refactoring
- `style:` for formatting changes
- `chore:` for maintenance tasks

Examples:
- `feat: add Python SDK example`
- `fix: handle API timeout errors properly`
- `docs: update README with new endpoints`

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected vs. actual behavior**
- **Environment details** (OS, Node.js version, etc.)
- **Code samples** or error messages
- **Screenshots** if applicable

### Feature Requests

When requesting features, please include:

- **Clear description** of the feature
- **Use case** or problem it solves
- **Proposed solution** (if you have one)
- **Alternative approaches** you've considered

## Style Guidelines

### Code Style

- Use **2 spaces** for indentation
- Follow **ESLint** configuration
- Use **clear, descriptive variable names**
- Add **comments** for complex logic
- Keep **functions small and focused**

### Documentation Style

- Use **Markdown** for all documentation
- Follow **existing formatting** patterns
- Include **code examples** where helpful
- Keep **line length** under 100 characters
- Use **clear headings** and structure

### Example Guidelines

When adding new examples:

- **Include a README.md** explaining the example
- **Add error handling** for common issues
- **Include package.json** with proper dependencies
- **Follow language conventions** for the target language
- **Add comments** explaining JAPER-specific parts

## Community

### Getting Help

- **GitHub Discussions** - Ask questions and share ideas
- **Issues** - Report bugs or request features
- **Website** - Visit [japer.technology](https://www.japer.technology) for general information
- **API Documentation** - Check [developer.japer.io](https://developer.japer.io) for API details

### Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Contributor list

## License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](LICENSE.md).

---

Thank you for contributing to JAPER Developer Resources! 🚀