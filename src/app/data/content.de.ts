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
    sections: [
      { icon: 'fa-bullseye', title: 'Product Owner', text: TBD },
      { icon: 'fa-people-group', title: 'Management', text: TBD }
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
};
