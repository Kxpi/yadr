# YADR - Yet Another Developer Resume

A modern, obviously vibe-coded, dark-mode portfolio/resume website template built with SvelteKit. Perfect for software engineers, full-stack developers, DevOps engineers and other technical professionals who want a clean, professional online presence.

## ✨ Features

- 🎨 **Modern Dark Theme** - Beautiful zinc-based color scheme with glassmorphism effects
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Static Site Generation (SSG)** - Fast loading, SEO-friendly, and hostable anywhere
- 🎭 **Smooth Animations** - Scroll-reveal transitions using Svelte's built-in transitions
- 📧 **Contact Form** - Integrated with Formspree (free tier available)
- 🎯 **Easy to Customize** - All content managed through simple TypeScript files
- 🚀 **Free Hosting** - Deploy to Cloudflare Pages (or Vercel/Netlify) for free
- ♿ **Accessible** - Built with shadcn-svelte components following WCAG guidelines

## 📋 Sections

- **Hero** - Profile photo, name, title, and social links
- **About** - Professional summary, location, education, and certifications
- **Skills** - Tech stack organized by category (customizable)
- **Experience** - Work history timeline with highlights
- **Key Highlights** - Top 4 achievements or expertise areas
- **Contact** - Form + direct email CTA

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

1. **Clone this template**
   ```bash
   git clone git@github.com:Kxpi/yadr.git my-portfolio
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your data**
   - Edit `src/lib/config.ts` - Site-wide settings
   - Edit `src/lib/data/profile.ts` - Your experience, skills, etc.
   - Replace `static/profile.jpg` with your photo

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to see your site.

5. **Build for production**
   ```bash
   npm run build
   ```
   Static files will be generated in the `build/` directory.

## ⚙️ Configuration

### Site Configuration (`src/lib/config.ts`)

```typescript
export const siteConfig = {
  title: "Your Name | Software Engineer",
  description: "Your professional summary",
  url: "https://yourname.dev",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "your.email@example.com",
  formspreeId: "YOUR_FORM_ID", // Get from https://formspree.io
};
```

### Profile Data (`src/lib/data/profile.ts`)

Update these sections:
- `profile` - Name, title, tagline, summary
- `skills` - Your tech stack (organized by category)
- `experience` - Work history
- `highlights` - Top 4 achievements
- `education` - Degree info
- `certifications` - Optional certifications list

### Profile Photo

Replace `static/profile.jpg` with your own photo. Recommended:
- Size: 400-800px square
- Format: JPEG or WebP (for better compression)
- Use [Squoosh.app](https://squoosh.app) to optimize

### Skill Categories

Edit the categories in `src/lib/components/sections/Skills.svelte`:

```typescript
const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'databases', label: 'Databases' },
  { key: 'tools', label: 'Tools & DevOps' }
];
```

## 📧 Setting Up Contact Form

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (looks like: `xabcd123`)
4. Update `formspreeId` in `src/lib/config.ts`

Free tier includes 50 submissions/month.

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:Kxpi/yadr.git
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Click **Workers & Pages** → **Create application** → **Pages**
   - Connect to Git and select your repository
   - Configure build:
     - **Framework preset**: SvelteKit
     - **Build command**: `npm run build`
     - **Build output directory**: `build`
   - Click **Save and Deploy**

3. **Add Custom Domain** (Optional)
   - In your project, go to **Custom domains**
   - Click **Set up a custom domain**
   - Enter your domain (e.g., `yourname.dev`)
   - Cloudflare will auto-configure DNS if your domain is on Cloudflare

### Alternative: Vercel or Netlify

Both work great with SvelteKit. The build settings are the same:
- Build command: `npm run build`
- Output directory: `build`

## 🎨 Customization

### Colors

The template uses Tailwind CSS v4 with shadcn-svelte's zinc theme. To change colors:

Edit `src/app.css` and modify the CSS variables:
```css
.dark {
  --background: oklch(...);
  --primary: oklch(...);
  /* etc */
}
```

### Adding/Removing Sections

All sections are in `src/lib/components/sections/`. To remove a section:

1. Delete the section file (e.g., `Highlights.svelte`)
2. Remove the import and component from `src/routes/+page.svelte`
3. Update navigation in `Navigation.svelte`

### Favicon

Replace `static/favicon.svg` with your own icon.

## 📦 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with static adapter
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn-svelte](https://www.shadcn-svelte.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Forms**: [Formspree](https://formspree.io/)

## 📝 License

MIT License - feel free to use this template for your portfolio!

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a PR.

## 💡 Tips

- **Keep it concise** - Recruiters spend ~6 seconds on first pass
- **Focus on impact** - Use numbers and results in your highlights
- **Update regularly** - Keep your experience current
- **Test on mobile** - Most traffic is mobile these days
- **Optimize images** - Use WebP format and compress before uploading

## 🆘 Troubleshooting

### Build fails on Cloudflare Pages

- Make sure **Framework preset** is set to **SvelteKit**
- Check that `build` directory is specified (not `dist`)
- Try adding `NODE_VERSION=18` environment variable

### Contact form not working

- Verify your Formspree form ID is correct in `src/lib/config.ts`
- Check that your form is active in Formspree dashboard
- Note: Form submissions won't work in development mode (localhost)

### Images not loading

- Make sure images are in the `static/` folder
- Reference them with `/filename.jpg` (leading slash)
- Check file extensions match exactly (case-sensitive)

---
