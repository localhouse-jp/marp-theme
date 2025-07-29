# Localhouse Blue - Marp Theme

A professional blue-themed presentation template for Marp with Mermaid diagram support and modular CSS architecture.

## Features

- 🎨 Clean and professional corporate blue design
- 📊 Mermaid diagram integration with optimized styling
- 🔤 Japanese font support (LINE Seed JP)
- 📱 Responsive layout
- 🎨 Night Owl Light syntax highlighting
- ⚙️ Modular CSS architecture for easy maintenance
- 🛠️ Customizable color variables

## Project Structure

```
src/
├── localhouse-blue.css          # Main theme file (imports all modules)
├── mermaid-init.js              # Mermaid initialization script
└── styles/
    ├── variables.css            # Color variables and theme configuration
    ├── base.css                 # Typography and basic elements
    ├── layout.css               # Header, footer, pagination
    ├── mermaid.css              # Mermaid diagram styling
    └── syntax-highlighting.css  # Night Owl Light code theme
```

## Installation

1. Download the theme files or clone the repository
2. Copy `src/localhouse-blue.css` to your Marp themes directory
3. Reference it in your Markdown presentation

## Usage

Add the following front matter to your Markdown file:

```yaml
---
marp: true
theme: localhouse-blue
class: lead
paginate: true
html: true
---
```

### Using Mermaid Diagrams

Include the Mermaid initialization script in your presentation:

```html
<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: true,
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    nodeSpacing: 80,
    rankSpacing: 80,
    padding: 5,
    curve: 'basis'
  },
  fontFamily: 'LINE Seed JP, Helvetica Neue, Arial, sans-serif',
  fontSize: 12
});
</script>
```

Then use Mermaid diagrams like this:

```html
<div class="mermaid">
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
</div>
```

## Development

### Build Commands

```bash
# Build everything (CSS + HTML)
npm run build

# Build CSS only
npm run build:css

# Build HTML only  
npm run build:html

# Build PDF
npm run build:pdf

# Build PowerPoint
npm run build:pptx

# Development build
npm run dev

# Clean build artifacts
npm run clean
```

### Customization

The theme uses CSS custom properties for easy customization. Edit `src/styles/variables.css`:

```css
:root {
  /* Main theme colors */
  --corporate-primary: #003366;      /* Deep trustworthy blue */
  --corporate-accent: #0055A4;       /* Brighter blue for accents */
  --corporate-secondary: #004488;    /* Medium blue */
  --corporate-light: #f8f9fa;        /* Light background */
  --corporate-text: #333;            /* Main text color */
  --corporate-muted: #555;           /* Muted text */
  --corporate-border: #eee;          /* Light borders */
}
```

### Modular Architecture

The theme is split into focused modules:

- **variables.css**: All color variables and theme configuration
- **base.css**: Typography, headings, links, lists, tables
- **layout.css**: Header, footer, pagination layout
- **mermaid.css**: Complete Mermaid diagram styling
- **syntax-highlighting.css**: Night Owl Light code theme

This modular approach makes it easy to:
- Modify specific aspects without affecting others
- Maintain and debug styles
- Extend functionality
- Customize colors and themes

## Building Presentations

Use Marp CLI to convert your Markdown to various formats:

```bash
# Convert to HTML
marp example.md --html --theme src/localhouse-blue.css

# Convert to PDF
marp example.md --pdf --theme src/localhouse-blue.css

# Convert to PowerPoint
marp example.md --pptx --theme src/localhouse-blue.css
```

## License

MIT License

## Author

LOCALHOUSE

## Version

1.1.0 - Refactored with modular architecture