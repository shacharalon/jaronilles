// Deutsche Texte (Hochdeutsch, Schweizer Rechtschreibung: «ss» statt «ß»).
// Muss dieselbe Struktur haben wie content.en.ts.
// «Noch zu besprechen» markiert Inhalte, die noch ausgefüllt werden müssen.
import { SiteContent } from './content.en';

const TBD = 'Noch zu besprechen';

export const CONTENT_DE: SiteContent = {
  ui: {
    learnMore: 'Mehr erfahren',
    whyIPicked: 'Warum ich es gewählt habe',
    myView: 'Meine Sicht',
    ingredients: 'Zutaten',
    preparation: 'Zubereitung',
    servings: 'Personen',
    languageLabel: 'Sprache'
  },

  nav: {
    main: 'Start',
    about: 'Über mich',
    smartFactory: 'Smart Factory',
    technology: 'Technologie des Monats',
    ai: 'KI und ich',
    recipe: 'Rezept des Monats',
    history: 'Rückblick',
    hobbies: 'Hobbys'
  },

  owner: 'Jaron Illés',
  photo: 'assets/images/jaron.webp',

  about: {
    intro: [TBD],
    facts: [
      { icon: 'fa-location-dot', label: 'Wohnort', value: TBD },
      { icon: 'fa-briefcase', label: 'Arbeit', value: TBD },
      { icon: 'fa-graduation-cap', label: 'Ausbildung', value: TBD },
      { icon: 'fa-language', label: 'Sprachen', value: TBD }
    ]
  },

  smartFactory: {
    icon: 'fa-industry',
    intro:
      'Eine Smart Factory verbindet Maschinen, Sensoren und Software, sodass sich die Produktion ' +
      'in Echtzeit überwachen, analysieren und anpassen kann.',
    blocks: [
      { icon: 'fa-wifi', name: 'IoT-Sensoren', text: 'Erfassen Live-Daten von Maschinen und Prozessen.' },
      { icon: 'fa-database', name: 'Datenplattformen', text: 'Führen Produktionsdaten zusammen, damit sie analysiert werden können.' },
      { icon: 'fa-robot', name: 'Automation und Robotik', text: 'Lassen Maschinen Routineschritte ausführen und anpassen.' },
      { icon: 'fa-cube', name: 'Digitale Zwillinge', text: 'Simulieren Maschinen und Linien, bevor die echten verändert werden.' },
      { icon: 'fa-eye', name: 'KI-gestützte Qualitätskontrolle', text: 'Erkennt Fehler und Auffälligkeiten früh und automatisch.' }
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
      { icon: 'fa-lightbulb', title: 'Wie ich KI nutze', text: TBD },
      { icon: 'fa-diagram-project', title: 'Projekte', text: TBD },
      { icon: 'fa-comments', title: 'Meine Sicht', text: TBD }
    ]
  },

  recipeOfTheMonth: {
    month: TBD,
    recipeName: 'Pasta al Pomodoro',
    note: TBD
  },

  history: {
    recipesLabel: 'Rezepte',
    technologyLabel: 'Technologie',
    empty: 'Noch keine Einträge.',
    recipes: [],
    technology: []
  },

  hobbies: [
    { icon: 'fa-utensils', title: 'Kochen', text: TBD },
    { icon: 'fa-tags', title: 'Verkaufen', text: TBD },
    { icon: 'fa-sailboat', title: 'Segeln', text: TBD }
  ],

  // Quelle: «Osterwalder 24.09.2024.pptx» (Assessment-Präsentation, Osterwalder AG).
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
