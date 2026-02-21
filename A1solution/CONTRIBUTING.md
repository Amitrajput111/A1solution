# Contributing to A1Solution

Thank you for considering contributing to A1Solution! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node version)

### Suggesting Features

1. Check if the feature has been suggested
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   npm run build
   npm run lint
   ```

5. **Commit your changes**
   - Use conventional commit format
   - Write clear commit messages
   ```bash
   git commit -m "feat: add new feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide clear description
   - Reference related issues
   - Include screenshots for UI changes

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/A1solution.git

# Navigate to directory
cd A1solution

# Install dependencies
npm install

# Start development server
npm run dev
```

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Use meaningful variable and function names
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use PropTypes or TypeScript for type checking

### CSS

- Use Bootstrap classes when possible
- Keep custom CSS minimal and organized
- Use CSS variables for theme colors
- Follow mobile-first approach

### File Naming

- Components: PascalCase (e.g., `Header.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Styles: kebab-case (e.g., `custom-styles.css`)

## Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
feat(hero): add animated background
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(header): improve responsive layout
refactor(services): extract service card component
```

## Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited

## Questions?

Feel free to open an issue for any questions or clarifications.

Thank you for contributing! 🚀
