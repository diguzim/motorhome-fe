# Motorhome Frontend

A modern, responsive website for a motorhome manufacturing company built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and React 19
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint system
- **Component Library**: shadcn/ui components with consistent design system
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom theme and typography plugin
- **Performance**: Optimized images, fonts, and built-in Next.js optimizations

## 📄 Pages

- **Home** (`/`): Hero section with company overview and key features
- **About** (`/sobre`): Company history, values, team, and process information
- **Work** (`/trabalhos`): Portfolio of completed motorhome projects
- **Contact** (`/contato`): Contact form, company information, and FAQ

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System & Styling

### Framework & Theme

This project uses a comprehensive design system built on:

- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **shadcn/ui**: Component library based on Radix UI primitives
- **Style**: "New York" variant of shadcn/ui components
- **Base Color**: Neutral color palette
- **CSS Variables**: Enabled for dynamic theming

### Color Palette

The application uses a custom color scheme centered around:

- **Primary**: Green (`green-500`, `green-600`) - Used for CTAs, accents, and branding
- **Neutral**: Gray scale (`gray-50` to `gray-900`) - Text, backgrounds, and borders
- **Surface**: White backgrounds with subtle shadows and borders

### Typography

- **Font Family**: Geist (Vercel's optimized font family)
- **Typography Plugin**: `@tailwindcss/typography` for rich text content
- **Responsive Text**: Scales appropriately across all breakpoints

### Responsive Breakpoints

The design follows Tailwind's default breakpoint system with mobile-first approach:

| Breakpoint | Min Width | Usage                          |
| ---------- | --------- | ------------------------------ |
| `sm`       | 640px     | Small tablets and large phones |
| `md`       | 768px     | Tablets and small laptops      |
| `lg`       | 1024px    | Desktops and large tablets     |
| `xl`       | 1280px    | Large desktops                 |
| `2xl`      | 1536px    | Extra large screens            |

### Responsive Design Patterns

1. **Navigation**:

   - Mobile: Collapsible hamburger menu
   - Desktop: Horizontal navigation bar

2. **Hero Sections**:

   - Mobile: Single column, smaller text sizes
   - Desktop: Full viewport height with larger typography

3. **Content Grids**:

   - Mobile: Single column (`grid-cols-1`)
   - Tablet: Two columns (`md:grid-cols-2`)
   - Desktop: Three columns (`lg:grid-cols-3`)

4. **Typography Scaling**:

   - Headings: `text-4xl md:text-6xl` (responsive sizing)
   - Body text: `text-lg md:text-xl` for important content
   - Small text: Consistent `text-sm` across breakpoints

5. **Spacing & Layout**:
   - Container: `container mx-auto px-6` with responsive max-widths
   - Sections: `py-16 md:py-20` for consistent vertical rhythm
   - Cards: Full width on mobile, grid layout on larger screens

### Component Architecture

- **UI Components**: Located in `/src/components/ui/` (shadcn/ui components)
- **Feature Components**: Located in `/src/components/` (custom components)
- **Page Components**: App Router pages in `/src/app/`

### Icons & Graphics

- **Icon Library**: Lucide React for consistent iconography
- **Images**: Next.js Image component for optimization
- **Graphics**: SVG icons and illustrations

## 🔧 Tech Stack

### Core Technologies

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React version with concurrent features
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Latest version with new architecture

### UI & Styling

- **shadcn/ui**: Modern component library
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Intelligent Tailwind class merging

### State Management & Data

- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling and validation

### Development Tools

- **ESLint**: Code linting with Next.js and TanStack Query rules
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing
- **Turbopack**: Fast bundler for development

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── contato/           # Contact page
│   ├── sobre/             # About page
│   ├── trabalhos/         # Work/Portfolio page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── navigation/        # Header and navigation
│   ├── trabalho-card/     # Work portfolio cards
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── providers/             # Context providers
└── services/              # API services
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Connect your GitHub repository
2. Configure build settings (defaults work well)
3. Deploy automatically on every push

### Other Platforms

This Next.js application can be deployed on any platform that supports Node.js:

- **Netlify**: Configure build command as `npm run build`
- **Railway**: Automatic deployment from GitHub
- **DigitalOcean App Platform**: Full-stack hosting
- **AWS Amplify**: Serverless deployment

For detailed deployment instructions, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) - Source code and contributions

### Design System Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.
