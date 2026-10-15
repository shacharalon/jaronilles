// Deutsche Texte (Hochdeutsch, Schweizer Rechtschreibung: «ss» statt «ß»).
// Muss dieselbe Struktur haben wie content.en.ts.
// «Noch zu besprechen» markiert Inhalte, die noch ausgefüllt werden müssen.
import { SiteContent } from './content.en';

const TBD = 'Noch zu besprechen';

export const CONTENT_DE: SiteContent = {
  ui: {
    learnMore: 'Mehr erfahren',
    openMap: 'Karte öffnen',
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
    profession: 'Beruf',
    smartFactory: 'Smart Factory',
    technology: 'Technologie des Monats',
    ai: 'KI und ich',
    recipe: 'Rezept des Monats',
    history: 'Rückblick',
    hobbies: 'Hobbys',
    nextHike: 'Nächste Wanderung'
  },

  owner: 'Jaron Illés',
  photo: 'assets/images/jaron.webp',

  about: {
    photo: 'assets/images/jaron-about.png',
    quote: {
      text: 'If you’re not prepared to be wrong, you’ll never come up with anything original.',
      author: 'Sir Ken Robinson'
    },
    intro:
      'Ich arbeite im Management, als Product Owner und im Projektmanagement. Ich führe Teams gerne ' +
      'offen und transparent: mit klaren Projektvisionen, gelebter Feedbackkultur und respektvoller ' +
      'Zusammenarbeit. Die Methode wähle ich passend zum Projekt, ob klassisch, agil oder hybrid.',
    role: 'Management · Product Owner · Projektmanagement',
    title: 'Steckbrief',
    rows: [
      { icon: 'fa-diagram-project', label: 'Schwerpunkt', value: 'Projekt-, Programm- und Portfoliomanagement (P3)' },
      { icon: 'fa-gears', label: 'Methoden', value: 'Agil, klassisch und hybrid (z. B. HERMES, Wasserfall)' },
      { icon: 'fa-industry', label: 'Interessen', value: 'Smart Factory, KI' },
      { icon: 'fa-sailboat', label: 'Hobbys', value: 'Kochen, Wandern mit der Familie, Segeln, Tauchen' }
    ]
  },

  profession: {
    intro: 'Karriere seit 1999: Automation, IoT und Machine Learning.',
    items: [
      {
        icon: 'fa-people-group',
        title: 'Management',
        paragraphs: [
          'Ich führe Teams offen und transparent. Für mich gelingt ein Projektteam durch vier Dinge: Mensch, Zusammenarbeit, Kultur und Prozess.',
          'Ich arbeite mit klaren Projektvisionen und einem qualifizierten, motivierten Team. Ich höre zu, verstehe und gebe wieder, und lebe eine offene Feedbackkultur mit respektvollem Umgang und eigenständiger Arbeit.',
          'Ich vernetze Kunden mit den Entscheidungsträgern, nutze das vorhandene Know-how in der Firma optimal und wähle für jedes Projekt den passenden Prozess.'
        ],
        image: 'assets/images/success-factors.png',
        imageAlt: 'Erfolgsfaktoren: Skills / Mensch, Zusammenarbeit & Netzwerk, Kultur, Prozess'
      },
      {
        icon: 'fa-bullseye',
        title: 'Product Owner',
        paragraphs: [
          'Als Product Owner stelle ich die Kommunikation in den Vordergrund. Ich ordne das Product Backlog nach Budget und Storypoints, damit das Team immer am Wichtigsten arbeitet.',
          'Der Umfang bleibt variabel und die Zeitplanung im Blick. Ich liefere Schritt für Schritt aus und halte Ziele und Anforderungen mit der Retrospektive aktuell.'
        ]
      },
      {
        icon: 'fa-diagram-project',
        title: 'Projektmanagement',
        paragraphs: [
          'Die Methode wähle ich passend zum Projekt: Wasserfall, Hybrid, Agile oder HERMES, orientiert an der Stacey Matrix.',
          'Anforderungen sind vor Projektbeginn definiert, und jede Anforderung hat passende Tests im RTM. Ich gleiche die Kapazität mit dem Arbeitsvolumen ab und manage Risiken aktiv.',
          'Ich arbeite im Projekt-, Programm- und Portfoliomanagement (P3).'
        ]
      },
      {
        icon: 'fa-route',
        title: 'Karriere',
        paragraphs: [
          'Meine Karriere begann 1999 und führte mich über die Automation zu IoT und Machine Learning.'
        ],
        image: 'assets/images/career.png',
        imageAlt: 'Karriere seit 1999'
      },
      {
        icon: 'fa-certificate',
        title: 'Zertifizierungen',
        paragraphs: [
          'Neben den Scrum-Alliance-Zertifikaten CSM und CSPO arbeite ich mit HERMES, IPMA, Lean, TQM und agilem Testen.'
        ],
        image: 'assets/images/certifications.png',
        imageAlt: 'Zertifizierungen und Methoden: Hermes, Scrum Alliance CSM und CSPO, IPMA, Lean, TQM, TDD'
      }
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

  nextHike: {
    question: 'Wo ist meine nächste Wanderung?',
    rows: [
      { icon: 'fa-mountain', label: 'Wo', value: TBD },
      { icon: 'fa-calendar-days', label: 'Wann', value: TBD },
      { icon: 'fa-route', label: 'Distanz', value: TBD },
      { icon: 'fa-clock', label: 'Dauer', value: TBD },
      { icon: 'fa-note-sticky', label: 'Hinweise', value: TBD }
    ],
    mapLink: ''
  },

  hobbies: [
    { icon: 'fa-utensils', title: 'Kochen', text: TBD, image: 'assets/images/hobby-cooking.jpg' },
    { icon: 'fa-person-hiking', title: 'Wandern mit der Familie', text: TBD, image: 'assets/images/hobby-hiking.jpg' },
    { icon: 'fa-sailboat', title: 'Segeln', text: TBD, image: 'assets/images/hobby-sailing.jpg' },
    { icon: 'fa-water', title: 'Tauchen', text: TBD, image: 'assets/images/hobby-diving.jpg' }
  ],
};
