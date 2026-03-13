# SABP Technologies LLP - Official Website

A modern, professional single-page website built with React + Vite.

**Empowering Innovation. Transforming Industries.**

SABP Technologies LLP is a forward-thinking technology and training company established in 2022, delivering innovative solutions, advanced skill development programs, and industry-focused technologies.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Logo**
   - Place your `sabp-logo.png` file in the `public` folder
   - The logo should be a transparent PNG with good resolution

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
sabp-website/
├── public/
│   └── sabp-logo.png          # Your company logo (ADD THIS)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation with glassmorphism
│   │   ├── Hero.jsx           # Hero section with animated background
│   │   ├── About.jsx          # About section with stats counter
│   │   ├── VisionMission.jsx  # Vision & Mission section
│   │   ├── Services.jsx       # Services grid with hover effects
│   │   ├── WhyChooseUs.jsx    # Features section
│   │   ├── Leadership.jsx     # Leadership team section
│   │   ├── Contact.jsx        # Contact form and info cards
│   │   ├── Footer.jsx         # Footer with links and social
│   │   ├── SocialBar.jsx      # Floating social media bar
│   │   └── Preloader.jsx      # Loading animation
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles and design system
│   └── main.jsx               # Entry point
└── index.html                 # HTML template

```

## 🎨 Design System

### Colors
- **Primary**: #1A6FD4 (Royal Blue)
- **Secondary**: #0D2B6E (Deep Navy)
- **Accent**: #2196F3 (Bright Blue)
- **Background Light**: #F4F7FC
- **Background Dark**: #050A14

### Fonts
- **Headings**: Montserrat (700-800)
- **Subheadings**: Poppins (600)
- **Body**: Inter (400-500)

## ✨ Features

- ✅ Fully responsive (mobile-first design)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Glassmorphism navbar on scroll
- ✅ Animated stats counter
- ✅ Contact form with validation
- ✅ Floating social media bar
- ✅ SEO optimized
- ✅ Fast loading with Vite

## 📝 Customization

### Update Services
Edit `src/components/Services.jsx` - modify the `services` array

### Update Contact Information
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Update Social Media Links
Edit `src/components/SocialBar.jsx` and `src/components/Footer.jsx`

## 🌐 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 📞 Contact

**SABP Technologies LLP**
- 📱 9765056789 / 9704233233
- ✉️ sabptechnologiesllp@gmail.com
- 📍 Vizianagaram, Andhra Pradesh - 535003

---

Built with ❤️ by SABP Technologies LLP
