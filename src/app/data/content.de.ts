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
    quote: {
      text: 'If you’re not prepared to be wrong, you’ll never come up with anything original.',
      author: 'Sir Ken Robinson'
    },
    intro:
      'Ich arbeite als Product Owner, im Management und in der Projektleitung. Ich führe Teams gerne ' +
      'offen und transparent: mit klaren Projektvisionen, gelebter Feedbackkultur und respektvoller ' +
      'Zusammenarbeit. Die Methode wähle ich passend zum Projekt, ob klassisch, agil oder hybrid.',
    title: 'Steckbrief',
    rows: [
      { icon: 'fa-user', label: 'Name', value: 'Jaron Illés' },
      { icon: 'fa-briefcase', label: 'Beruf', value: 'Product Owner, Management, Projektleitung' },
      { icon: 'fa-diagram-project', label: 'Schwerpunkt', value: 'Projekt-, Programm- und Portfoliomanagement (P3)' },
      { icon: 'fa-gears', label: 'Methoden', value: 'Agil, klassisch und hybrid (z. B. HERMES, Wasserfall)' },
      { icon: 'fa-industry', label: 'Interessen', value: 'Smart Factory, KI' },
      { icon: 'fa-sailboat', label: 'Hobbys', value: 'Kochen, Verkaufen, Segeln, Tauchen' }
    ]
  },

  profession: {
    careerImage: 'assets/images/career.png',
    careerImageAlt: 'Karriere seit 1999',
    certifications: {
      title: 'Zertifizierungen',
      image: 'assets/images/certifications.png',
      imageAlt: 'Zertifizierungen und Methoden: Hermes, Scrum Alliance CSM und CSPO, IPMA, Lean, TQM, TDD'
    },
    sections: [
      { icon: 'fa-bullseye', title: 'Product Owner', text: TBD },
      {
        icon: 'fa-people-group',
        title: 'Management',
        text: 'Erfolgsfaktoren für die Führung eines Projektteams: Mensch, Zusammenarbeit, Kultur und Prozess.',
        image: 'assets/images/success-factors.png',
        imageAlt: 'Erfolgsfaktoren: Skills / Mensch, Zusammenarbeit & Netzwerk, Kultur, Prozess',
        points: [
          {
            icon: 'fa-user',
            name: 'Skills / Mensch',
            text: 'Klare Projektvisionen, ein qualifiziertes und motiviertes Team, Feedbackkultur und Commitment. Zuhören, verstehen, wiedergeben.'
          },
          {
            icon: 'fa-handshake',
            name: 'Zusammenarbeit & Netzwerk',
            text: 'Gute Zusammenarbeit mit allen Projektbeteiligten. Kunden mit den Entscheidungsträgern vernetzen und das vorhandene Know-how in der Firma optimal nutzen.'
          },
          {
            icon: 'fa-people-group',
            name: 'Kultur',
            text: 'Respektvoller Umgang, eigenständige Arbeit mit einer Austauschkultur, kundenorientiertes Denken und eine offene, transparente Feedbackkultur.'
          },
          {
            icon: 'fa-gears',
            name: 'Prozess',
            text: 'Die passende Methode zum Projekt wählen (Stacey Matrix: Wasserfall, Hybrid, Agile, HERMES), Anforderungen vor Projektbeginn definieren und Risiken aktiv managen.'
          }
        ]
      },
      { icon: 'fa-diagram-project', title: 'Projektleitung', text: TBD }
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
    { icon: 'fa-tags', title: 'Verkaufen', text: TBD, image: '' },
    { icon: 'fa-sailboat', title: 'Segeln', text: TBD, image: 'assets/images/hobby-sailing.jpg' },
    { icon: 'fa-water', title: 'Tauchen', text: TBD, image: 'assets/images/hobby-diving.jpg' }
  ],
};
