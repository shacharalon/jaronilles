// All editable text for the personal pages lives here.
// "To be discussed" marks content that still has to be filled in.
const TBD = 'To be discussed';

export const SITE_CONTENT = {
  owner: 'Jaron Illés',
  tagline: TBD,
  // Formal portrait shown on the Main page, e.g. 'assets/images/jaron.jpg'. Empty = no photo.
  photo: '',

  about: {
    intro: [TBD],
    facts: [
      { icon: 'fa-location-dot', label: 'Location', value: TBD },
      { icon: 'fa-briefcase', label: 'Work', value: TBD },
      { icon: 'fa-graduation-cap', label: 'Education', value: TBD },
      { icon: 'fa-language', label: 'Languages', value: TBD }
    ]
  },

  technologyOfTheMonth: {
    month: 'October 2026',
    name: 'Smart Factory',
    icon: 'fa-industry',
    description:
      'A smart factory connects machines, sensors and software so that production can monitor, ' +
      'analyse and adjust itself in real time. Typical building blocks are IoT sensors, ' +
      'data platforms, automation and robotics, simulation (digital twins) and AI-based quality control.',
    whyIPicked: TBD,
    link: ''
  },

  // recipeName must match a recipe "name" in assets/recipes.json (falls back to the first recipe).
  recipeOfTheMonth: {
    month: TBD,
    recipeName: 'Pasta al Pomodoro',
    note: TBD
  },

  hobbies: [
    { icon: 'fa-utensils', title: 'Cooking', text: TBD },
    { icon: 'fa-tags', title: 'Selling', text: TBD },
    { icon: 'fa-star', title: 'Hobby 3', text: TBD }
  ],

  // Source: "Osterwalder 24.09.2024.pptx" (assessment presentation, Osterwalder AG).
  projectManagement: {
    title: 'Projektmanagement',
    subtitle: 'Aus meiner Assessment-Präsentation bei Osterwalder AG, September 2024',

    p3: {
      title: 'P3 Management Office',
      items: [
        { icon: 'fa-diagram-project', name: 'Project Management Office' },
        { icon: 'fa-layer-group', name: 'Program Management Office' },
        { icon: 'fa-briefcase', name: 'Portfolio Management Office' }
      ]
    },

    successFactors: {
      title: 'Erfolgsfaktoren Führung des Projektteams',
      groups: [
        {
          icon: 'fa-user',
          name: 'Skills / Mensch',
          points: [
            'Leadership / Feedbackkultur / Commitment / Methodenkenntnisse',
            'Klare Projektvisionen',
            'Qualifiziertes und motiviertes Team',
            'Zuhören, verstehen, wiedergeben.',
            'Kollektive und individuelle Verantwortung ergänzen sich zum gemeinsamen Erfolg im Team.'
          ]
        },
        {
          icon: 'fa-handshake',
          name: 'Zusammenarbeit & Netzwerk',
          points: [
            'Gute Zusammenarbeit mit allen Projektbeteiligten',
            'Vernetzung der Kunden mit den Entscheidungsträgern und Entwicklung einer transparenten Kommunikation zwischen ihnen.',
            'Das vorhandene Know-how in der Firma optimal nutzen: Projektmanagement macht sich sichtbar, Kontakt mit der Basis.'
          ]
        },
        {
          icon: 'fa-people-group',
          name: 'Kultur',
          points: [
            'Respektvoller Umgang im Team',
            'Eigenständige Arbeit mit einer Austauschkultur',
            'Kundenorientiertes Denken',
            'Projektmanagement ist offen, und eine transparente Feedbackkultur wird gelebt.',
            'Die Angemessenheit der Ziele und Anforderungen wird laufend überprüft: durch Retrospektive vs. Planung.',
            'Laufende transparente Kommunikation zu den Stakeholdern und deren Bindung zum Team',
            'Fester Zusammenhang mit der Unternehmensstruktur'
          ]
        },
        {
          icon: 'fa-gears',
          name: 'Prozess',
          points: [
            'Die Projekte folgen dem richtigen Prozess (Stacey Matrix). Es gibt Standardmethoden wie Wasserfall, Hybrid, Agile, HERMES usw.',
            'Anforderungen sind vor Projektbeginn definiert (Pflichten-/Lastenheft), offene Fragen sind geklärt und jede Anforderung verfügt über korrelierende Tests im RTM.',
            'Aktives Risikomanagement',
            'Vorhandene Kapazität ist mit dem Arbeitsvolumen abgeglichen (Agilität).',
            'Finish to Start: Projekte müssen zu Ende gebracht werden, bevor neue angefangen werden.',
            'Start to Finish: Neue Projekte müssen gestartet werden, bevor alte beendet werden.'
          ]
        }
      ]
    },

    methods: {
      title: 'Methoden',
      tags: [
        'Stacey Matrix',
        'Risk Management',
        'Magisches Dreieck',
        'Hermes-Like Projektmanagement',
        'Wasserfall / klassisches Projektmanagement',
        'Agiles Projektmanagement'
      ],
      backlog: {
        title: 'Release and Backlog',
        points: [
          'Product Backlog Item nach Budget und Storypoint',
          'Kommunikation im Vordergrund',
          'Variabler Umfang',
          'Zeitplanung'
        ]
      }
    },

    quote: {
      text: 'If you’re not prepared to be wrong, you’ll never come up with anything original.',
      author: 'Sir Ken Robinson'
    }
  }
};
