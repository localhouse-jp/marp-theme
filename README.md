# Slidev Theme: Localhouse Blue

A professional blue-themed presentation template for Slidev with Mermaid diagram support and Japanese font optimization.

## Features

- 🎨 **Professional Design**: Clean corporate blue color scheme
- 🇯🇵 **Japanese Support**: Optimized for Japanese text with LINE Seed JP font
- 📊 **Mermaid Diagrams**: Full support for Mermaid diagrams with corporate theme styling
- 💼 **Corporate Ready**: Perfect for business presentations
- 🎯 **Multiple Layouts**: Support for various slide layouts (cover, section, center, etc.)
- 🌟 **Syntax Highlighting**: Beautiful code highlighting with GitHub Light theme

## Installation

```bash
npm install slidev-theme-localhouse-blue
```

## Usage

Add the following frontmatter to your `slides.md`:

```yaml
---
theme: slidev-theme-localhouse-blue
---
```

## Local Development

If you want to develop or customize this theme:

```bash
# Clone or download this theme
cd slidev-theme-localhouse-blue

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Export as PDF
npm run export
```

## Project Structure

```
slidev-theme-localhouse-blue/
├── styles/
│   └── index.css          # Main theme stylesheet
├── example.md             # Example presentation
├── package.json           # Theme configuration
└── README.md              # This file
```

## Color Scheme

- **Primary**: `#003366` (Deep blue)
- **Accent**: `#0055A4` (Bright blue)
- **Secondary**: `#004488` (Medium blue)

## Supported Layouts

- `default` - Standard slide layout
- `cover` - Title slide with gradient background
- `section` - Section divider with blue background
- `center` - Centered content layout
- `two-cols` - Two column layout
- `quote` - Quote layout
- `end` - Closing slide

## Example

See `example.md` for a complete demonstration of all features and layouts.

## Customization

The theme uses CSS custom properties for easy customization:

```css
:root {
  --corporate-primary: #003366;    /* Deep blue */
  --corporate-accent: #0055A4;     /* Bright blue */
  --corporate-secondary: #004488;  /* Medium blue */
  --corporate-light: #f8f9fa;      /* Light background */
  --corporate-text: #333;          /* Main text color */
}
```

## License

MIT License

## Author

LOCALHOUSE

## Troubleshooting

### Node.js Version
If you encounter Mermaid-related errors, try updating Node.js to v20.19.0 or higher for optimal compatibility.

## Version

1.0.0 - Initial Slidev theme release