export interface NavChild {
  label: string;
  href: string;
  blurb?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  feature?: {
    title: string;
    copy: string;
    href: string;
    cta: string;
  };
}

export const utilityLinks = [
  { label: 'Resources', href: '/resources', icon: 'ti-gift' },
  { label: 'Contact Us', href: '/assessment', icon: 'ti-send' },
  { label: 'Free Assessment', href: '/assessment', icon: 'ti-clipboard-check' },
];

export const navItems: NavItem[] = [
  {
    label: 'Start Here',
    href: '/start-here',
    children: [
      {
        label: 'Insurance clarity',
        href: '/blog/what-life-insurance-actually-is',
        blurb: 'Understand what your policy actually does.',
      },
      {
        label: 'Money pattern',
        href: '/blog/money-didnt-change-me',
        blurb: 'Why higher income can still feel tight.',
      },
      {
        label: 'Family and marriage',
        href: '/blog/talk-to-spouse-about-money',
        blurb: 'Better money conversations at home.',
      },
      {
        label: 'Leadership and career',
        href: '/join-the-team',
        blurb: 'A career built on service and clarity.',
      },
    ],
    feature: {
      title: 'Not sure where to begin?',
      copy: 'Pick the question that sounds most like your life right now.',
      href: '/start-here',
      cta: 'Open the pathways',
    },
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Financial Readiness Checklist', href: '/resources/financial-readiness-checklist' },
      { label: 'Life Insurance Review Guide', href: '/resources/life-insurance-review-guide' },
      { label: 'VUL Clarity Sheet', href: '/resources/vul-clarity-sheet' },
      { label: 'Couple Money Conversation Guide', href: '/resources/couple-money-conversation-guide' },
      { label: 'Advisor Career Discovery Guide', href: '/resources/advisor-career-discovery-guide' },
    ],
    feature: {
      title: 'Free guides',
      copy: 'Practical worksheets you can use before any financial decision.',
      href: '/resources',
      cta: 'Browse all resources',
    },
  },
  {
    label: 'Articles',
    href: '/blog',
    children: [
      { label: 'Money Mindset', href: '/blog' },
      { label: 'Wealth in Practice', href: '/blog' },
      { label: 'Intentional Living', href: '/blog' },
      { label: 'The Journey', href: '/blog' },
    ],
    feature: {
      title: 'Read by pathway',
      copy: 'Start with the issue, then move into a resource when you are ready.',
      href: '/start-here',
      cta: 'See the pathways',
    },
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'About Venus', href: '/about', blurb: 'Unit manager, mom, and founder.' },
      { label: 'Media and features', href: '/media', blurb: 'Podcasts, shows, and interviews.' },
      { label: 'Disclosures', href: '/disclosures' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
  {
    label: 'Join the Team',
    href: '/join-the-team',
  },
  {
    label: 'Assessment',
    href: '/assessment',
  },
];
