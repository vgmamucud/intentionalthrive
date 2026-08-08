export const resourceGuides = [
  {
    slug: 'financial-readiness-checklist',
    title: 'Financial Readiness Checklist',
    eyebrow: 'Financial Planning',
    description: 'A practical review of income, responsibilities, protection, and the next financial decision that needs attention.',
    intro: 'Use this before a financial readiness assessment or any major money decision. The goal is not to judge your situation. The goal is to see it clearly enough to choose the right next move.',
    sections: [
      {
        title: '1. Current Money Picture',
        items: [
          'Monthly take-home income is clear.',
          'Fixed monthly obligations are listed.',
          'Variable spending patterns are visible.',
          'Debt payments and due dates are known.',
          'Family support commitments are written down.',
        ],
      },
      {
        title: '2. Emergency Readiness',
        items: [
          'You know how many months your emergency fund can cover.',
          'Emergency savings are separate from daily spending money.',
          'You know which expenses would pause first in a crisis.',
          'Your household knows where important documents are kept.',
        ],
      },
      {
        title: '3. Protection Gaps',
        items: [
          'You know who depends on your income.',
          'You know how much existing insurance coverage you have.',
          'You understand what your policy covers and what it does not cover.',
          'Health, accident, disability, and life risks have been reviewed.',
        ],
      },
      {
        title: '4. Growth And Intention',
        items: [
          'You have a written savings or investment goal.',
          'Your long-term goals have a timeline.',
          'Your money decisions match your family priorities.',
          'You know the next one decision that matters most.',
        ],
      },
    ],
    prompts: [
      'If my income stopped for 90 days, what would happen first?',
      'Which financial obligation am I carrying quietly?',
      'What do I own that I do not fully understand yet?',
      'What decision would make my next six months feel calmer?',
    ],
    nextStep: 'Bring this checklist into a readiness assessment so Venus can help you identify the most practical next step.',
  },
  {
    slug: 'life-insurance-review-guide',
    title: 'Life Insurance Review Guide',
    eyebrow: 'Insurance Guides',
    description: 'A plain-language guide for understanding what your policy protects, what it costs, and whether it still fits your life.',
    intro: 'Use this when you already have a policy, are thinking of buying one, or want to understand whether your protection still matches your responsibilities.',
    sections: [
      {
        title: '1. Policy Basics',
        items: [
          'Policy owner, insured person, and beneficiaries are correct.',
          'Coverage amount is known.',
          'Premium amount and payment schedule are clear.',
          'Policy type is understood: term, whole life, VUL, or another structure.',
        ],
      },
      {
        title: '2. Protection Fit',
        items: [
          'Coverage reflects current dependents and family obligations.',
          'Parents, spouse, children, loans, or business responsibilities are included in the review.',
          'Critical illness or health-related benefits are understood.',
          'You know what would happen if you missed payments.',
        ],
      },
      {
        title: '3. Cost And Commitment',
        items: [
          'You know how long premiums need to be paid.',
          'You understand charges, riders, and optional benefits.',
          'You know whether the policy builds cash value or investment value.',
          'You understand surrender or withdrawal consequences.',
        ],
      },
      {
        title: '4. Review Questions For Your Advisor',
        items: [
          'What problem was this policy designed to solve?',
          'What would make this policy no longer suitable?',
          'What assumptions should I not make about returns or guarantees?',
          'What should I review every year?',
        ],
      },
    ],
    prompts: [
      'Who would be financially affected if I were gone or unable to work?',
      'Does my current coverage protect that reality?',
      'What part of this policy still feels unclear?',
      'What changed in my life since I bought this?',
    ],
    nextStep: 'Use this guide before a policy review so the conversation starts with your actual responsibilities, not just product details.',
  },
  {
    slug: 'vul-clarity-sheet',
    title: 'VUL Clarity Sheet',
    eyebrow: 'Insurance Guides',
    description: 'A focused guide for understanding VUL as protection plus investment, including expectations, risks, and time horizon.',
    intro: 'VUL can be useful when it is understood correctly. This sheet helps you separate what it is, what it is not, and what you need to ask before signing or reviewing a policy.',
    sections: [
      {
        title: '1. What VUL Combines',
        items: [
          'A life insurance protection component.',
          'An investment component linked to selected funds.',
          'Policy charges that affect early fund value.',
          'Market movement, which means fund value can rise or fall.',
        ],
      },
      {
        title: '2. What VUL Is Not',
        items: [
          'It is not a short-term savings account.',
          'It is not a guaranteed investment return.',
          'It is not an emergency fund.',
          'It is not automatically right for every client.',
        ],
      },
      {
        title: '3. Questions Before Buying Or Continuing',
        items: [
          'Can I commit for the long term?',
          'Do I understand the charges in the early years?',
          'Am I comfortable with market-linked movement?',
          'Is my protection need the main reason for this policy?',
        ],
      },
      {
        title: '4. Review Signals',
        items: [
          'The policy was explained mainly as savings or returns.',
          'You do not know what fund you are invested in.',
          'You are unsure what happens if you stop paying.',
          'You expected early withdrawal value to equal premiums paid.',
        ],
      },
    ],
    prompts: [
      'Why did I buy or consider VUL in the first place?',
      'Was I looking for protection, investment growth, forced savings, or all three?',
      'What expectation do I need to correct?',
      'What question should I ask before making another payment decision?',
    ],
    nextStep: 'If your VUL expectations and actual policy mechanics do not match, schedule a calm review before making changes.',
  },
  {
    slug: 'couple-money-conversation-guide',
    title: 'Couple Money Conversation Guide',
    eyebrow: 'Templates And Tools',
    description: 'A calmer structure for talking about money, values, spending, saving, support, and protection with your spouse or partner.',
    intro: 'Money conversations go better when the goal is understanding before agreement. Use this guide to reduce defensiveness and surface the values underneath the numbers.',
    sections: [
      {
        title: '1. Prepare Before Talking',
        items: [
          'Choose a calm time, not after a conflict.',
          'Agree that the first conversation is for understanding.',
          'Bring real numbers only if both of you are ready.',
          'Start with values before solutions.',
        ],
      },
      {
        title: '2. Ask Values Questions',
        items: [
          'What does financial security feel like to you?',
          'What did you learn about money growing up?',
          'What kind of support do we want to give family?',
          'What future are we trying to protect together?',
        ],
      },
      {
        title: '3. Review Practical Decisions',
        items: [
          'Monthly budget and shared expenses.',
          'Emergency fund target.',
          'Insurance and protection needs.',
          'Family support boundaries.',
          'Personal spending money for each partner.',
        ],
      },
      {
        title: '4. End With One Agreement',
        items: [
          'Pick one next action.',
          'Assign who will do it.',
          'Set a date to review.',
          'Avoid trying to solve every money issue in one sitting.',
        ],
      },
    ],
    prompts: [
      'When do I feel safe with money?',
      'When do I feel controlled or judged around money?',
      'What do I wish my partner understood about my financial fear?',
      'What can we build together that neither of us could build alone?',
    ],
    nextStep: 'Use this before a couple financial review, especially if the same money argument keeps returning in different forms.',
  },
  {
    slug: 'advisor-career-discovery-guide',
    title: 'Advisor Career Discovery Guide',
    eyebrow: 'Career In Finance',
    description: 'A starting point for exploring whether a financial services career fits your strengths, values, goals, and season of life.',
    intro: 'A career in financial services is not only about selling. It asks for learning, discipline, empathy, resilience, and a real desire to help people make better decisions.',
    sections: [
      {
        title: '1. Strengths To Notice',
        items: [
          'You can listen without rushing people.',
          'You are willing to learn complex ideas and explain them simply.',
          'You can follow up consistently.',
          'You care about personal growth and service.',
          'You are comfortable building trust over time.',
        ],
      },
      {
        title: '2. Realities To Consider',
        items: [
          'Income growth requires consistency and patience.',
          'Rejection is part of the work.',
          'Client trust is earned through clarity and follow-through.',
          'Your own money habits will influence how you lead conversations.',
        ],
      },
      {
        title: '3. Questions To Ask A Mentor',
        items: [
          'What does training actually look like?',
          'How will I learn to explain products responsibly?',
          'What support exists for new advisors?',
          'What does a sustainable weekly rhythm look like?',
        ],
      },
      {
        title: '4. Signs This May Fit',
        items: [
          'You want meaningful work with growth potential.',
          'You like helping people make sense of important decisions.',
          'You are willing to be mentored.',
          'You want a career that rewards clarity, discipline, and relationships.',
        ],
      },
    ],
    prompts: [
      'Why am I curious about this career now?',
      'What kind of person do I want to become through my work?',
      'What scares me about starting?',
      'What would I need from a mentor to take this seriously?',
    ],
    nextStep: 'Bring your answers into a career conversation with Venus so you can explore fit honestly before making a commitment.',
  },
];

export type ResourceGuide = (typeof resourceGuides)[number];
