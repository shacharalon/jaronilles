// English texts. The German version lives in content.de.ts and must keep the same shape.
// "To be discussed" marks content that still has to be filled in.
const TBD = 'To be discussed';

/** One past "of the month" entry on the History page. */
export interface HistoryEntry {
  month: string;
  name: string;
  text: string;
}

/** A role on the Profession page. Optional picture and list of points for a longer description. */
export interface RoleSection {
  icon: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  points?: { icon: string; name: string; text: string }[];
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
    quote: {
      text: 'If you’re not prepared to be wrong, you’ll never come up with anything original.',
      author: 'Sir Ken Robinson'
    },
    intro:
      'I work as a Product Owner, in management and as a project leader. I like to lead teams openly ' +
      'and transparently: with clear project visions, a lived feedback culture and respectful ' +
      'collaboration. I choose the method to fit the project, whether classic, agile or hybrid.',
    title: 'Fact sheet',
    rows: [
      { icon: 'fa-user', label: 'Name', value: 'Jaron Illés' },
      { icon: 'fa-briefcase', label: 'Profession', value: 'Product Owner, Management, Project Leader' },
      { icon: 'fa-diagram-project', label: 'Focus', value: 'Project, program and portfolio management (P3)' },
      { icon: 'fa-gears', label: 'Methods', value: 'Agile, classic and hybrid (e.g. HERMES, waterfall)' },
      { icon: 'fa-industry', label: 'Interests', value: 'Smart Factory, AI' },
      { icon: 'fa-sailboat', label: 'Hobbies', value: 'Cooking, Selling, Sailing, Diving' }
    ]
  },

  profession: {
    careerImage: 'assets/images/career.png',
    careerImageAlt: 'Career timeline since 1999',
    certifications: {
      title: 'Certifications',
      image: 'assets/images/certifications.png',
      imageAlt: 'Certifications and methods: Hermes, Scrum Alliance CSM and CSPO, IPMA, Lean, TQM, TDD'
    },
    sections: [
      { icon: 'fa-bullseye', title: 'Product Owner', text: TBD },
      {
        icon: 'fa-people-group',
        title: 'Management',
        text: 'Success factors for leading a project team: people, collaboration, culture and process.',
        image: 'assets/images/success-factors.png',
        imageAlt: 'Success factors: Skills / People, Collaboration & network, Culture, Process',
        points: [
          {
            icon: 'fa-user',
            name: 'Skills / People',
            text: 'Clear project visions, a qualified and motivated team, feedback culture and commitment. Listen, understand, reflect back.'
          },
          {
            icon: 'fa-handshake',
            name: 'Collaboration & network',
            text: 'Good collaboration with everyone involved. Connect customers with decision makers and make the best use of the know-how already in the company.'
          },
          {
            icon: 'fa-people-group',
            name: 'Culture',
            text: 'Respectful treatment, independent work with a culture of exchange, customer-oriented thinking and open, transparent feedback.'
          },
          {
            icon: 'fa-gears',
            name: 'Process',
            text: 'Choose the right method for the project (Stacey matrix: waterfall, hybrid, agile, HERMES), define requirements up front and manage risks actively.'
          }
        ]
      },
      { icon: 'fa-diagram-project', title: 'Project Leader', text: TBD }
    ] as RoleSection[]
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
    { icon: 'fa-tags', title: 'Selling', text: TBD, image: '' },
    { icon: 'fa-sailboat', title: 'Sailing', text: TBD, image: 'assets/images/hobby-sailing.jpg' },
    { icon: 'fa-water', title: 'Diving', text: TBD, image: 'assets/images/hobby-diving.jpg' }
  ],
};

export type SiteContent = typeof CONTENT_EN;
