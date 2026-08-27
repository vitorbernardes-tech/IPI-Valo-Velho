---
name: simple-frontend-layout
description: 'Use when working on this static HTML/CSS/JS frontend project, especially page structure, centering, styling, and basic browser-side behavior.'
---

# Simple Frontend Layout

Use this skill when editing the static website in this workspace.

## Project context

This project is a lightweight frontend with:

- `src/front.html` for page structure
- `index.css` for styling and layout
- `center.js` for any lightweight DOM or UI behavior

Keep the implementation simple and dependency-free. Prefer plain HTML, CSS, and JavaScript over frameworks or build tooling unless the user explicitly asks for them.

## Working rules

- Preserve the existing project structure unless there is a clear reason to change it.
- Use semantic HTML elements and keep markup readable.
- Keep styling in `index.css` and avoid inline CSS unless absolutely necessary.
- Use small, focused JavaScript in `center.js` for behavior that cannot be done with CSS alone.
- Prefer modern CSS layout techniques such as Flexbox or Grid for centering and alignment.
- Make the page usable in a plain browser without a compilation step.
- Keep code clear, compact, and easy to maintain.

## Typical tasks

- Centering a hero section, form, card, or content block
- Improving spacing, typography, and visual hierarchy
- Adding responsive behavior for smaller screens
- Making a simple layout accessible and readable
- Fixing small UI issues without introducing unnecessary complexity

## Suggested patterns

- For full-page centering: use `display: flex; align-items: center; justify-content: center; min-height: 100vh;`.
- For section layout: use `display: grid;` or `display: flex;` with consistent gaps.
- For interactive behavior: keep JS minimal and attach listeners only after the DOM is ready.

## Quality bar

Before finishing a frontend change, confirm that:

- HTML remains valid and accessible
- CSS is organized and consistent
- The layout still works at common desktop and mobile widths
- The page remains easy to open directly in a browser
