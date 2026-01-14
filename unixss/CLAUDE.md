# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a static website repository for Unix Systems Services (unixss), an IT consulting firm website. The repository contains primarily HTML/CSS/JavaScript demonstrations and examples, with no build system or package manager. All files are static assets served directly by a web server.

## Project Structure

The repository is organized into several demonstration directories:

- **Root level**: Main welcome page (`welcome.html` symlinked as `index.html`), favicon, and general template
- **clouds/**: WebGL 3D cloud animation demo using Three.js
  - Uses GLSL shaders for rendering volumetric clouds
  - Includes fallback for non-WebGL browsers
  - Main entry: `clouds/index.html`
- **svg/**: SVG demonstration examples organized by technique
  - `gradient/`: Linear and radial gradient examples
  - `patterns/`: Pattern fill demonstrations
  - `clipmask/`: Clipping and masking examples
  - `filter/`: SVG filter effects
  - `transform/`: Transformation examples (translate, rotate, scale)
  - `grid/`: Grid layout demonstrations
  - `sine/`: Sine wave visualizations
  - `inside/`: Advanced SVG techniques
- **Kali/**: Kali Linux desktop interface mockups
  - CSS-based dropdown menus mimicking Kali application menu
  - Desktop taskbar mockup with icons
  - Static demonstrations of UI patterns
- **play/**: JavaScript and HTML5 experimental demos
  - Event handling examples
  - Drag and drop demos
  - Form manipulation
  - CSS animations and transitions
  - Array manipulation examples
- **jQuery/**: jQuery demonstrations
- **pdf/**: Collection of technical reference PDFs (JavaScript, Python, Perl, Unix, etc.)
- **tmp/**: Temporary files

## Development Workflow

### No Build System
This repository has no build process, package manager, or compilation step. All HTML, CSS, and JavaScript files are served directly as-is.

### Serving Files Locally
To view the website locally, use any static file server from the repository root:
```bash
python3 -m http.server 8000
# or
python -m SimpleHTTPServer 8000
```

Then navigate to `http://localhost:8000`

### File Editing
Files can be edited directly without any build or compilation step. Changes are immediately visible upon browser refresh.

### Common Vim Settings
Many files include vim modelines (e.g., `<!-- vim: ft=html ai -->`), indicating the original author's editor preferences. These can be preserved or removed as needed.

## Code Architecture

### HTML Structure
- Most HTML files are standalone demonstrations
- No shared component system or templating
- Inline styles are common, especially in demonstration files
- External stylesheets used for larger demos (clouds, Kali)

### JavaScript Usage
- **clouds/**: Uses Three.js library for WebGL rendering
  - Minified scripts in `js/min/`
  - Custom GLSL shaders embedded in HTML
  - Fallback detection for WebGL support
- **play/**: Vanilla JavaScript event handling and DOM manipulation examples
- No module bundler or ES6 module system
- Scripts typically included directly via `<script>` tags

### CSS Organization
- Generally one CSS file per demo or feature
- No CSS preprocessor (Sass, Less)
- No CSS framework (Bootstrap, Tailwind)
- Raw CSS with traditional class-based styling

## Special Considerations

### Symbolic Link
The root `index.html` is a symlink to `welcome.html`. Be aware of this when editing the landing page.

### External Dependencies
- **clouds/**: Depends on Three.js (included locally and from CDN)
- **clouds/**: Uses jQuery 1.11.0 from CDN
- Most other demos are dependency-free

### Browser Compatibility
- The clouds demo includes WebGL detection and fallback rendering
- Most demos target modern browsers with HTML5 support
- No polyfills or legacy browser support

## Git Workflow

This is a git repository with `main` as the primary branch. Standard git operations apply.
