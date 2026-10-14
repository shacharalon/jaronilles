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
    smartFactory: 'Smart Factory',
    technology: 'Technology of the month',
    ai: 'AI and me',
    recipe: 'Recipe of the month',
    history: 'History',
    hobbies: 'Hobbies'
  },

  owner: 'Jaron Illés',
  // Formal portrait shown on the Main page, e.g. 'assets/images/jaron.jpg'. Empty = no photo.
  photo: 'assets/images/jaron.webp',

  about: {
    intro: [TBD],
    facts: [
      { icon: 'fa-location-dot', label: 'Location', value: TBD },
      { icon: 'fa-briefcase', label: 'Work', value: TBD },
      { icon: 'fa-graduation-cap', label: 'Education', value: TBD },
      { icon: 'fa-language', label: 'Languages', value: TBD }
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

  hobbies: [
    { icon: 'fa-utensils', title: 'Cooking', text: TBD },
    { icon: 'fa-tags', title: 'Selling', text: TBD },
    { icon: 'fa-sailboat', title: 'Sailing', text: TBD }
  ],

  // Source: "Osterwalder 24.09.2024.pptx" (assessment presentation, Osterwalder AG).
  projectManagement: {
    title: 'Project management',
    subtitle: 'From my assessment presentation at Osterwalder AG, September 2024',

    p3: {
      title: 'P3 Management Office',
      items: [
        { icon: 'fa-diagram-project', name: 'Project Management Office' },
        { icon: 'fa-layer-group', name: 'Program Management Office' },
        { icon: 'fa-briefcase', name: 'Portfolio Management Office' }
      ]
    },

    successFactors: {
      title: 'Success factors for leading a project team',
      groups: [
        {
          icon: 'fa-user',
          name: 'Skills / People',
          points: [
            'Leadership / feedback culture / commitment / knowledge of methods',
            'Clear project visions',
            'A qualified and motivated team',
            'Listen, understand, reflect back.',
            'Collective and individual responsibility complement each other for shared success in the team.'
          ]
        },
        {
          icon: 'fa-handshake',
          name: 'Collaboration & network',
          points: [
            'Good collaboration with everyone involved in the project',
            'Connecting customers with decision makers and building transparent communication between them.',
            'Make the best use of the know-how already in the company: project management becomes visible, with contact to the people on the ground.'
          ]
        },
        {
          icon: 'fa-people-group',
          name: 'Culture',
          points: [
            'Respectful treatment within the team',
            'Independent work with a culture of exchange',
            'Customer-oriented thinking',
            'Project management is open, and a transparent feedback culture is lived.',
            'The suitability of goals and requirements is checked continuously: retrospective vs. planning.',
            'Ongoing transparent communication with stakeholders and their bond with the team',
            'A firm link to the company structure'
          ]
        },
        {
          icon: 'fa-gears',
          name: 'Process',
          points: [
            'Projects follow the right process (Stacey matrix). There are standard methods such as waterfall, hybrid, agile, HERMES, etc.',
            'Requirements are defined before the project starts (requirements specification), open questions are clarified, and every requirement has corresponding tests in the RTM.',
            'Active risk management',
            'Available capacity is matched with the workload (agility).',
            'Finish to Start: projects must be completed before new ones are started.',
            'Start to Finish: new projects must be started before old ones are finished.'
          ]
        }
      ]
    },

    methods: {
      title: 'Methods',
      tags: [
        'Stacey Matrix',
        'Risk management',
        'Magic triangle',
        'Hermes-like project management',
        'Waterfall / classic project management',
        'Agile project management'
      ],
      backlog: {
        title: 'Release and backlog',
        points: [
          'Product backlog items by budget and story points',
          'Communication comes first',
          'Variable scope',
          'Scheduling'
        ]
      }
    },

    quote: {
      text: 'If you’re not prepared to be wrong, you’ll never come up with anything original.',
      author: 'Sir Ken Robinson'
    }
  }
};

export type SiteContent = typeof CONTENT_EN;
