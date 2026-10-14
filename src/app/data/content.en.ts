// English texts. The German version lives in content.de.ts and must keep the same shape.
// "To be discussed" marks content that still has to be filled in.
const TBD = 'To be discussed';

/** One past "of the month" entry on the History page. */
export interface HistoryEntry {
  month: string;
  name: string;
  text: string;
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
    title: 'Fact sheet',
    rows: [
      { icon: 'fa-user', label: 'Name', value: 'Jaron Illés' },
      { icon: 'fa-cake-candles', label: 'Date of birth', value: TBD },
      { icon: 'fa-location-dot', label: 'Location', value: TBD },
      { icon: 'fa-language', label: 'Languages', value: TBD },
      { icon: 'fa-briefcase', label: 'Profession', value: 'Product Owner, Management, Project Leader' },
      { icon: 'fa-sailboat', label: 'Hobbies', value: 'Cooking, Selling, Sailing' }
    ]
  },

  profession: {
    sections: [
      { icon: 'fa-bullseye', title: 'Product Owner', text: TBD },
      { icon: 'fa-people-group', title: 'Management', text: TBD },
      { icon: 'fa-diagram-project', title: 'Project Leader', text: TBD }
    ]
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
    { icon: 'fa-utensils', title: 'Cooking', text: TBD },
    { icon: 'fa-tags', title: 'Selling', text: TBD },
    { icon: 'fa-sailboat', title: 'Sailing', text: TBD }
  ],
};

export type SiteContent = typeof CONTENT_EN;
