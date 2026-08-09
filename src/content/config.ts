import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  type: 'data',
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    heroSlides: z.array(z.object({
      quote: z.string(),
      tagline: z.string(),
      copy: z.string(),
      cta: z.string(),
      href: z.string(),
      image: z.string(),
      focal: z.string(),
      zoom: z.string(),
      tint: z.string(),
    })),
    quickLinks: z.array(z.object({
      label: z.string(),
      icon: z.string(),
      href: z.string(),
    })),
    quickAside: z.object({
      text: z.string(),
      cta: z.string(),
      href: z.string(),
    }),
    helpTitle: z.string(),
    helpTitleAccent: z.string(),
    helpTabs: z.array(z.object({
      id: z.string(),
      label: z.string(),
      cards: z.array(z.object({
        title: z.string(),
        copy: z.string(),
        href: z.string(),
      })),
    })),
    proofStats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    pathways: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      copy: z.string(),
      doors: z.array(z.object({
        label: z.string(),
        heading: z.string(),
        copy: z.string(),
        href: z.string(),
        linkLabel: z.string(),
      })),
    }),
    journey: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      copy: z.string(),
      steps: z.array(z.object({
        label: z.string(),
        heading: z.string(),
        copy: z.string(),
      })),
    }),
    decisionCards: z.array(z.object({
      theme: z.enum(['primary', 'dark']),
      eyebrow: z.string(),
      heading: z.string(),
      copy: z.string(),
      cta: z.string(),
      href: z.string(),
    })),
    guide: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      paragraphs: z.array(z.string()),
      cta: z.string(),
      href: z.string(),
    }),
    articleStrip: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      copy: z.string(),
      primaryCta: z.string(),
      primaryHref: z.string(),
      secondaryCta: z.string(),
      secondaryHref: z.string(),
    }),
    finalCta: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      cta: z.string(),
      href: z.string(),
    }),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    pillar: z.enum(['Money Mindset', 'Wealth in Practice', 'Intentional Living', 'The Journey']),
    readTime: z.string(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

const shows = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    type: z.enum(['podcast', 'youtube']),
    platform: z.string(),
    url: z.string(),
    embedUrl: z.string().optional(),
    description: z.string(),
    published: z.boolean().default(true),
  }),
});

const resources = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    fileUrl: z.string(),
    published: z.boolean().default(true),
  }),
});

export const collections = { homepage, articles, shows, resources };
