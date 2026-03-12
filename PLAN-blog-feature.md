# Blog Feature Plan

## Overview

Add a full-featured blog section to the portfolio site, using MDX for content authoring (dependencies already installed: `@next/mdx`, `next-mdx-remote`, `gray-matter`, `date-fns`). The blog will follow the same patterns established by the projects section — static data, dynamic `[slug]` routing, SSG with `generateStaticParams`, and consistent Tailwind + Framer Motion styling.

---

## Architecture

### Content Strategy: MDX files with frontmatter

Blog posts will be stored as `.mdx` files in `src/content/blog/`. Each file uses YAML frontmatter parsed by `gray-matter`:

```yaml
---
title: "Building AI-Powered Web Apps"
slug: "building-ai-powered-web-apps"
date: "2026-03-10"
excerpt: "A guide to integrating machine learning models into modern web applications."
category: "AI/ML"
tags: ["AI", "React", "Python"]
coverImage: "/images/blog/ai-web-apps.jpg"
readingTime: 8
featured: true
---
```

### Data Layer: `src/lib/blog.ts`

Mirrors `src/lib/projects.ts`. Provides utility functions:

- `getAllPosts()` — reads all `.mdx` files, parses frontmatter, returns sorted by date (newest first)
- `getPostBySlug(slug)` — returns a single post's frontmatter + raw MDX content
- `getPostsByCategory(category)` — filter by category
- `getFeaturedPosts()` — returns posts with `featured: true`
- `getAllCategories()` — returns unique category list
- `getAllTags()` — returns unique tag list

### TypeScript Types: `src/lib/types/blog.ts`

```ts
interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  tags: string[]
  coverImage: string
  readingTime: number
  featured: boolean
  content: string  // raw MDX string
}
```

---

## File Structure (New Files)

```
src/
├── app/
│   └── blog/
│       ├── page.tsx                 # Blog listing page
│       └── [slug]/
│           └── page.tsx             # Individual blog post page
├── components/
│   ├── BlogCard.tsx                 # Card for listing page
│   ├── BlogPost.tsx                 # Full post renderer (MDX)
│   ├── BlogSearch.tsx               # Search + category filter bar
│   └── BlogSection.tsx              # Featured posts section for homepage
├── content/
│   └── blog/
│       ├── building-ai-powered-web-apps.mdx
│       ├── devops-best-practices.mdx
│       └── modern-frontend-architecture.mdx
└── lib/
    ├── blog.ts                      # Blog data utilities
    └── types/
        └── blog.ts                  # Blog TypeScript interfaces
```

---

## Implementation Steps

### Step 1: Types & Data Layer

1. Create `src/lib/types/blog.ts` with the `BlogPost` interface
2. Create `src/lib/blog.ts` with all utility functions (read MDX files from `src/content/blog/`, parse with `gray-matter`, sort by date)

### Step 2: Seed Content

1. Create `src/content/blog/` directory
2. Write 3 starter MDX posts with realistic content covering the portfolio owner's interests (Frontend, DevOps, AI/ML) — each ~200-300 words

### Step 3: Blog Listing Page (`/blog`)

1. Create `src/app/blog/page.tsx`
   - Server component with `generateMetadata()`
   - Renders a header, category filter, and grid of `BlogCard` components
2. Create `src/components/BlogCard.tsx` (client component)
   - Displays cover image, title, excerpt, date, category badge, reading time, tags
   - Links to `/blog/[slug]`
   - Framer Motion entrance animation (consistent with Projects grid)
3. Create `src/components/BlogSearch.tsx` (client component)
   - Category filter pills (like Projects filter)
   - Optional text search input filtering by title/excerpt

### Step 4: Blog Post Page (`/blog/[slug]`)

1. Create `src/app/blog/[slug]/page.tsx`
   - Uses `generateStaticParams()` and `generateMetadata()` (same pattern as projects)
   - Renders `BlogPost` component with MDX content
2. Create `src/components/BlogPost.tsx` (client component)
   - Renders post header (title, date, category, reading time, cover image)
   - Uses `next-mdx-remote` to render MDX content with custom component mappings (headings, code blocks, links, images)
   - Back-to-blog navigation link
   - Framer Motion page transition

### Step 5: Homepage Integration

1. Create `src/components/BlogSection.tsx`
   - Displays 3 most recent or featured posts in a card grid
   - "View All Posts" CTA linking to `/blog`
   - Same animation style as other homepage sections
2. Add `<BlogSection />` to `src/app/page.tsx` between Experience and Contact sections

### Step 6: Navigation Update

1. Update `src/components/Header.tsx` — ensure the existing "Blog" nav link (`/blog`) works correctly (it's already in the nav items but currently points to a non-existent route)

### Step 7: Styling

1. Add blog-specific utility classes to `globals.css` if needed (e.g., `.prose` overrides for MDX content)
2. Ensure dark mode works across all blog components
3. Ensure responsive design (mobile-first grid layout)

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Content format | MDX files on disk | Dependencies already installed; no external CMS needed; version-controlled content |
| Routing | `/blog` and `/blog/[slug]` | Matches existing `/projects/[slug]` pattern |
| Data fetching | Static generation (SSG) | Consistent with projects; best performance for static content |
| Filtering | Category pills + text search | Matches the projects section filter UX |
| MDX rendering | `next-mdx-remote` | Already in dependencies; supports custom components |

---

## Out of Scope (Future Enhancements)

- RSS feed generation
- Comments system
- CMS integration (Contentlayer, Sanity, etc.)
- Pagination (not needed with < 20 posts)
- Related posts recommendations
- Social sharing buttons
- Table of contents sidebar
