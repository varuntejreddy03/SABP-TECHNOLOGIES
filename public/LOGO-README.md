# Logo Instructions

## Current Logo
The website currently uses `sabp-logo.svg` as a placeholder.

## To Add Your Real Logo

1. **Prepare your logo:**
   - Format: PNG with transparent background (recommended)
   - Size: At least 200x200px (higher resolution is better)
   - File name: `sabp-logo.png`

2. **Replace the placeholder:**
   - Delete or rename `sabp-logo.svg`
   - Add your `sabp-logo.png` to this `public` folder

3. **Update references (if needed):**
   If you want to use a different filename or format, update these files:
   - `index.html` (line 5 - favicon)
   - `src/components/Navbar.jsx` (line 23)
   - `src/components/Hero.jsx` (line 19)
   - `src/components/Footer.jsx` (line 13)

The logo will automatically appear in:
- Browser tab (favicon)
- Navigation bar
- Hero section (floating card)
- Footer

## Logo Specifications
- **Navbar**: 50px height
- **Hero**: 100px width
- **Footer**: 50px height
- All logos maintain aspect ratio automatically
