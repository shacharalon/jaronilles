// English texts. The German version lives in content.de.ts and must keep the same shape.
// "To be discussed" marks content that still has to be filled in.
const TBD = 'To be discussed';

/** One past "of the month" entry on the History page. */
export interface HistoryEntry {
  month: string;
  name: string;
  text: string;
}

/** One topic on the Profession page: a button that opens its paragraphs and an optional picture. */
export interface ProfessionItem {
  icon: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}

export const CONTENT_EN = {
  ui: {
    learnMore: 'Learn more',
    openMap: 'Open map',
    whyIPicked: 'Why I picked it',
    myView: 'My view',
    ingredients: 'Ingredients',
    preparation: 'Preparation',
    servings: 'servings',
    languageLabel: 'Language'
  },

  nav: {
    main: 'Main',
    about: 'About me',
    profession: 'Profession',
    smartFactory: 'Smart Factory',
    technology: 'Technology of the month',
    ai: 'AI and me',
    recipe: 'Recipe of the month',
    history: 'History',
    hobbies: 'Hobbies',
    nextHike: 'Next hike'
  },

  owner: 'Jaron Illés',
  // Formal portrait shown on the Main page, e.g. 'assets/images/jaron.jpg'. Empty = no photo.
  photo: 'assets/images/jaron.webp',

  about: {
    photo: 'assets/images/jaron-about.png',
    quote: {
      text: 'If you’re not prepared to be wrong, you’ll never come up with anything original.',
      author: 'Sir Ken Robinson'
    },
    intro:
      'I work in management, as a Product Owner and as a project manager. I like to lead teams openly ' +
      'and transparently: with clear project visions, a lived feedback culture and respectful ' +
      'collaboration. I choose the method to fit the project, whether classic, agile or hybrid.',
    role: 'Management · Product Owner · Project Manager',
    title: 'Fact sheet',
    rows: [
      { icon: 'fa-diagram-project', label: 'Focus', value: 'Project, program and portfolio management (P3)' },
      { icon: 'fa-gears', label: 'Methods', value: 'Agile, classic and hybrid (e.g. HERMES, waterfall)' },
      { icon: 'fa-industry', label: 'Interests', value: 'Smart Factory, AI' },
      { icon: 'fa-sailboat', label: 'Hobbies', value: 'Cooking, Hiking with the family, Sailing, Diving' }
    ]
  },

  profession: {
    intro: 'Career since 1999: automation, IoT and machine learning.',
    items: [
      {
        icon: 'fa-people-group',
        title: 'Management',
        paragraphs: [
          'I lead teams openly and transparently. For me, a project team succeeds through four things: people, collaboration, culture and process.',
          'I work with clear project visions and a qualified, motivated team. I listen, understand and reflect back, and I live an open feedback culture with respectful treatment and independent work.',
          'I connect customers with decision makers, make the best use of the know-how already in the company and choose the right process for each project.'
        ],
        image: 'assets/images/success-factors.png',
        imageAlt: 'Success factors: Skills / People, Collaboration & network, Culture, Process'
      },
      {
        icon: 'fa-bullseye',
        title: 'Product Owner',
        paragraphs: [
          'As a Product Owner, I put communication first. I order the product backlog by budget and story points, so the team always works on what matters most.',
          'Scope stays variable and the time planning stays in view. I release step by step and use the retrospective to keep goals and requirements right.'
        ]
      },
      {
        icon: 'fa-diagram-project',
        title: 'Project Manager',
        paragraphs: [
          'I choose the method to fit the project: waterfall, hybrid, agile or HERMES, guided by the Stacey matrix.',
          'Requirements are defined before the project starts, and every requirement has matching tests in the RTM. I match capacity with the workload and manage risks actively.',
          'I work across project, program and portfolio management (P3).'
        ]
      },
      {
        icon: 'fa-route',
        title: 'Career',
        paragraphs: [
          'My career began in 1999 and has led me through automation to IoT and machine learning.'
        ],
        image: 'assets/images/career.png',
        imageAlt: 'Career timeline since 1999'
      },
      {
        icon: 'fa-certificate',
        title: 'Certifications',
        paragraphs: [
          'Alongside the Scrum Alliance certifications CSM and CSPO, I work with HERMES, IPMA, Lean, TQM and agile testing.'
        ],
        image: 'assets/images/certifications.png',
        imageAlt: 'Certifications and methods: Hermes, Scrum Alliance CSM and CSPO, IPMA, Lean, TQM, TDD'
      }
    ] as ProfessionItem[]
  },

  smartFactory: {
    icon: 'fa-industry',
    intro:
      'A smart factory connects machines, sensors and software so that production can monitor, ' +
      'analyse and adjust itself in real time.',
    blocks: [
      { icon: 'fa-wifi', name: 'IoT sensors', text: 'Collect live data from machines and processes.' },
      { icon: 'fa-database', name: 'Data platforms', text: 'Bring production data together so it can be analysed.' },
      { icon: 'fa-robot', name: 'Automation and robotics', text: 'Let machines carry out and adapt routine steps.' },
      { icon: 'fa-cube', name: 'Digital twins', text: 'Simulate machines and lines before changing the real ones.' },
      { icon: 'fa-eye', name: 'AI-based quality control', text: 'Spot defects and anomalies early and automatically.' }
    ],
    myView: TBD
  },

  technologyOfTheMonth: {
    month: TBD,
    name: TBD,
    icon: 'fa-microchip',
    description: TBD,
    whyIPicked: TBD,
    link: ''
  },

  aiAndMe: {
    intro: TBD,
    sections: [
      { icon: 'fa-lightbulb', title: 'How I use AI', text: TBD },
      { icon: 'fa-diagram-project', title: 'Projects', text: TBD },
      { icon: 'fa-comments', title: 'My view', text: TBD }
    ]
  },

  // recipeName must match a recipe "name" in assets/recipes.json and assets/recipes.en.json.
  recipeOfTheMonth: {
    month: TBD,
    recipeName: 'Pasta al Pomodoro',
    note: TBD
  },

  // Past recipes / technologies of the month. Add newest first, e.g.
  // { month: 'September 2026', name: 'Name', text: 'Short description' }
  history: {
    recipesLabel: 'Recipes',
    technologyLabel: 'Technology',
    empty: 'No entries yet.',
    recipes: [] as HistoryEntry[],
    technology: [] as HistoryEntry[]
  },

  nextHike: {
    question: 'Where is my next hike?',
    rows: [
      { icon: 'fa-mountain', label: 'Where', value: TBD },
      { icon: 'fa-calendar-days', label: 'When', value: TBD },
      { icon: 'fa-route', label: 'Distance', value: TBD },
      { icon: 'fa-clock', label: 'Duration', value: TBD },
      { icon: 'fa-note-sticky', label: 'Notes', value: TBD }
    ],
    // Link to a map (e.g. Google Maps or SchweizMobil). Empty = no button.
    mapLink: ''
  },

  hobbies: [
    { icon: 'fa-utensils', title: 'Cooking', text: TBD, image: 'assets/images/hobby-cooking.jpg' },
    { icon: 'fa-person-hiking', title: 'Hiking with the family', text: TBD, image: 'assets/images/hobby-hiking.jpg' },
    { icon: 'fa-sailboat', title: 'Sailing', text: TBD, image: 'assets/images/hobby-sailing.jpg' },
    { icon: 'fa-water', title: 'Diving', text: TBD, image: 'assets/images/hobby-diving.jpg' }
  ],
};

export type SiteContent = typeof CONTENT_EN;
