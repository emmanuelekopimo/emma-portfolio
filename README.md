# Emmanuel Akpan's Portfolio

A modern, high-performance portfolio website showcasing projects, experience, and technical expertise. Built with Next.js 16, React 19, and animated with GSAP for smooth scroll interactions.

## ✨ Features

- **Responsive Design** - Mobile-first approach with seamless scaling from phones to desktops
- **Smooth Animations** - GSAP scroll triggers for hero reveal effects and section animations
- **Blog System** - Full MDX support for writing technical articles with frontmatter metadata
- **Projects Showcase** - Grid-based project cards with problem/role/result narratives
- **Experience Timeline** - Detailed work history with company logos and summaries
- **Achievement Cards** - Highlighted wins with supporting images
- **Skills Matrix** - Organized technical skills by category
- **Contact Integration** - Direct links to email, LinkedIn, GitHub, and social profiles

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.7 (with Turbopack)
- **React**: 19.2.3 (Server Components enabled)
- **Styling**: Tailwind CSS 4 with CSS custom properties for theming
- **Animations**: GSAP 3.14.2 with ScrollTrigger plugin
- **Content**: MDX with @next/mdx and next-mdx-remote for RSC compilation
- **Parsing**: gray-matter for YAML frontmatter in blog posts
- **Fonts**: Space Grotesk (display) and IBM Plex Sans (body) via next/font
- **Language**: TypeScript 5

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd emma-portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit `http://localhost:3000` to see your portfolio live.

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## 📁 Project Structure

```
emma-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage with all sections
│   │   ├── layout.tsx            # Root layout wrapper
│   │   ├── globals.css           # Global styles and theme variables
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing page (grid view)
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual blog post pages
│   │   └── blog/
│   │       └── page.tsx          # Blog listing
│   │
│   ├── components/
│   │   ├── blog-posts-preview.tsx # Home page blog preview (async server component)
│   │   └── hero-animations.tsx    # GSAP animations wrapper (client component)
│   │
│   ├── lib/
│   │   └── blog.ts               # Server utilities for MDX parsing and compilation
│   │
│   ├── content/
│   │   └── blog/
│   │       ├── designing-for-constraints.mdx
│   │       ├── future-study-materials.mdx
│   │       └── information-overload.mdx
│   │
│   ├── types/                    # TypeScript type definitions
│   └── public/
│       └── images/               # Portfolio images and blog post headers
│
├── next.config.ts                # Next.js config with MDX support
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## ✏️ Customizing Content

### Homepage Sections

Edit `src/app/page.tsx` to customize:

**About Section**
- Update the bio and mission statement
- Located in the "About" section text content

**Projects**
- Modify the `projects` array with your work
- Each project needs: title, description, problem, role, tech, result

**Skills**
- Update the `skills` object organized by category
- Add/remove technologies and frameworks

**Achievements**
- Edit the `achievements` array
- Add images to `public/images/` and reference them
- Update titles, descriptions, and dates

**Experience**
- Modify the `experience` array with your work history
- Add company logos to `public/images/`

**Certifications**
- Update the `certifications` array with your credentials

**Contact Links**
- Edit the `contacts` array with your real profile URLs
- Supports email, LinkedIn, GitHub, Twitter, and custom links

### Blog Posts

Create new MDX files in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-12-15"
summary: "A brief summary of the post"
---

# Your content here

Write in Markdown with full support for code blocks, lists, and formatting.
```

**Important**: 
- Filename becomes the URL slug (e.g., `my-post.mdx` → `/blog/my-post`)
- Add corresponding blog post header images to `public/images/`
- Update the `postImages` mapping in blog pages to connect images to posts

### Theme Customization

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --ink: #0c1116;           /* Primary text color */
  --muted: #676B73;         /* Secondary text color */
  --surface: #F6F8FA;       /* Card backgrounds */
  --surface-alt: #EAEEF2;   /* Alternative surface */
  --line: #D0D7DE;          /* Borders */
  --accent: #1B6E5C;        /* Accent color (buttons, highlights) */
  --accent-strong: #164D44; /* Darker accent for hover */
  --bg: #FFFFFF;            /* Page background */
}
```

## 🎨 Component Architecture

**Server Components (Data Fetching)**:
- `src/app/page.tsx` - Home page with static data
- `src/app/blog/page.tsx` - Blog listing with dynamic posts
- `src/app/blog/[slug]/page.tsx` - Individual blog posts
- `src/components/blog-posts-preview.tsx` - Home page blog preview

**Client Components (Interactivity)**:
- `src/components/hero-animations.tsx` - GSAP scroll animations

**Server Utilities**:
- `src/lib/blog.ts` - MDX compilation and file system operations

## 📝 Notes

- Mobile-responsive design with proper breakpoints (`sm`, `md`, `lg`)
- Section numbering hidden on mobile, shown on desktop
- GSAP animations use `ScrollTrigger` for performance
- MDX posts use `compileMDX` with React Server Components for proper rendering
- All images use `bg-cover` and `bg-center` for responsive backgrounds

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Connect your Git repository to Vercel
# Vercel will auto-detect Next.js and deploy
```

### Other Platforms
- Ensure Node.js 18+ is available
- Set build command: `pnpm build`
- Set start command: `pnpm start`

## 📄 License

Portfolio template created with attention to design and user experience.

## 👤 Author

**Emmanuel Akpan** - Software Developer, Product Designer, AI Enthusiast
- Email: emmanuel@acadeva.xyz
- Website: https://emmanuelakpan.dev
- LinkedIn: linkedin.com/in/emmanuelekopimo
- GitHub: github.com/emmanuelekopimo
