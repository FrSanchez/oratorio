# Repository Guidelines

This document serves as a contributor guide for the **Oratorio de la Virgen de Fátima** project. This is a responsive, static web application built with plain JavaScript and Bootstrap 5.

## Project Structure & Module Organization

The project is a static site with no build step. Logic and content are separated into the `js/` directory:

- `/css`: Global styles (`styles.css`).
- `/js`: Core application logic and content.
    - `app.js`: Main application controller and state management.
    - `content.js` & `content-en.js`: Spanish and English prayer/mystery text.
    - `locales.js`: UI strings and interface labels for multi-language support.
    - `navigation.js` & `pages.js`: Routing logic and supplementary page content.
- `/tests`: Integration tests for core flows.
- `/vendor`: Third-party libraries (Bootstrap 5).

## Build, Test, and Development Commands

As a static site, no compilation is required.

### Local Development
Serve the folder using a simple HTTP server:
\`\`\`sh
python3 -m http.server 8000
\`\`\`
Visit `http://localhost:8000` in your browser.

### Testing
Run the test suite using the native Node.js test runner:
\`\`\`sh
node --test tests/*.test.cjs
\`\`\`

## Coding Style & Naming Conventions

- **Language**: Vanilla JavaScript (ES6+).
- **Styling**: Bootstrap 5 classes for layout; custom overrides in `css/styles.css`.
- **Naming**: Use `camelCase` for variables and functions.
- **Content**: Prayer content is stored as plain text in JS objects; use `\n` for paragraph breaks. Avoid embedding HTML in content files.

## Testing Guidelines

Tests are written using Node.js `.cjs` modules and located in `/tests`.
- **Naming**: Tests should follow the pattern `[module].test.cjs`.
- **Coverage**: Focus on prayer flow transitions and language switching.

## Commit & Pull Request Guidelines

- **Commits**: Keep messages concise and descriptive (e.g., "Fix missing character in Hail Mary" or "Update mystery descriptions").
- **Pull Requests**:
    - Provide a clear description of the change.
    - Ensure both Spanish and English content are updated simultaneously when adding prayers.
    - Verify that all tests pass before submitting.
