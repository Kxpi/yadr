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

## 📦 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with static adapter
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn-svelte](https://www.shadcn-svelte.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Forms**: [Formspree](https://formspree.io/)

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
	formspreeId: "YOUR_FORM_ID" // Get from https://formspree.io
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

Replace `static/profile.jpg` with your own photo.

**Recommended specifications:**

- **Size**: 400x400px to 800x800px square
- **Format**: WebP (best) or optimized JPEG
- **File size**: Under 50KB for best performance

**Quick optimization guide:**

1. Go to [Squoosh.app](https://squoosh.app)
2. Upload your photo
3. Select **WebP** format (right panel)
4. Reduce quality until file size is ~30-50KB
5. Resize to 600x600px (covers all display sizes)
6. Download and replace `static/profile.jpg`

### Skill Categories

Edit the categories in `src/lib/components/sections/Skills.svelte`:

```typescript
const categories = [
	{ key: "frontend", label: "Frontend" },
	{ key: "backend", label: "Backend" },
	{ key: "databases", label: "Databases" },
	{ key: "tools", label: "Tools & DevOps" }
];
```

## 🧪 Development & Code Quality

### Running the Linter

The project uses ESLint and Prettier for code quality and formatting:

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix

# Check code formatting
npm run format:check

# Auto-format all files
npm run format

# Type check with svelte-check
npm run check
```

### Pre-commit Hooks

The project uses **Husky** and **lint-staged** to automatically run checks on staged files before each commit:

- ✅ Runs ESLint with auto-fix on `.js`, `.ts`, `.svelte` files
- ✅ Formats code with Prettier
- ✅ Only processes staged files (fast!)

**Setup:**

```bash
npm install  # Installs Husky hooks automatically
```

**Manual checks:**

If you want to run all checks manually:

```bash
npm run lint && npm run format && npm run check
```

**Skip pre-commit (not recommended):**

```bash
git commit --no-verify -m "message"
```

All checks run automatically in GitHub Actions:

- **CI Workflow** (`.github/workflows/ci.yml`):
  - **Code Quality** job: Runs lint, format check, and type check in parallel
  - **Build** job: Verifies the production build succeeds
- **Deploy Workflow** (`.github/workflows/deploy-gh-pages.yml`):
  - Runs quality checks first, then builds and deploys to GitHub Pages
  - Only deploys if all quality checks pass

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

### Customizing Icons

The template uses [Lucide Icons](https://lucide.dev/icons) throughout. To change icons:

1. **Browse available icons** at [https://lucide.dev/icons](https://lucide.dev/icons)
2. **Find the icon** you want (e.g., "rocket")
3. **Import it** in your component:
   ```typescript
   import Rocket from "lucide-svelte/icons/rocket";
   ```
4. **Use it** in your template:
   ```svelte
   <Rocket class="h-6 w-6" />
   ```

**Example - Changing Highlights Icons:**

Edit `src/lib/components/sections/Highlights.svelte`:

```typescript
// Replace these imports with your preferred icons
import Code from "lucide-svelte/icons/code";
import Layers from "lucide-svelte/icons/layers";
import Zap from "lucide-svelte/icons/zap";
import Users from "lucide-svelte/icons/users";

const icons = [Code, Layers, Zap, Users];
```

The icons array matches the order of highlights in `profile.ts`, so the first icon corresponds to the first highlight, and so on.

### Favicon

Replace `static/favicon.svg` with your own icon.

## 📧 Setting Up Contact Form

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (looks like: `xabcd123`)
4. Update `formspreeId` in `src/lib/config.ts`

Free tier includes 50 submissions/month.

## 🌐 Deployment

### GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:Kxpi/yadr.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Build and deployment**, select:
     - **Source**: Deploy from a branch
     - **Branch**: `gh-pages` / `root`
   - Click **Save**

3. **Access your site**
   - The workflow will automatically build and deploy to the `gh-pages` branch
   - Your site will be available at: `https://kxpi.github.io/yadr/`
   - Initial deployment takes 1-2 minutes
   - Check the **Actions** tab to see deployment progress

### Cloudflare Pages (Alternative for Custom Domains)

**Note**: If deploying to Cloudflare Pages with a custom domain, you'll need to remove the base path from `svelte.config.js`:

```javascript
paths: {
	base: ""; // Remove or comment out the base path
}
```

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

## ⚡ Performance Optimization

The template is pre-configured for excellent Lighthouse scores. Additional optimizations:

### Image Optimization

**Critical**: Optimize your profile photo for best performance:

1. Use WebP format instead of JPEG/PNG
2. Resize to 600x600px (covers all display sizes)
3. Compress to under 50KB using [Squoosh.app](https://squoosh.app)
4. The image has `fetchpriority="high"` for faster LCP

### CSS & JavaScript

Already optimized:

- ✅ CSS precompression enabled (`precompress: true`)
- ✅ Inline small CSS chunks (`inlineStyleThreshold: 1024`)
- ✅ Static site generation (no runtime JS for content)
- ✅ Minimal JavaScript bundle (~60KB gzipped)

### Deployment Optimizations

**Cloudflare Pages** (recommended):

- Automatic Brotli compression
- Global CDN
- HTTP/3 support
- Free SSL

**GitHub Pages**:

- Enable gzip compression (automatic)
- Consider using Cloudflare in front for better performance

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
