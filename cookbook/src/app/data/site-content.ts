// All editable text for the personal pages lives here.
// "To be discussed" marks content that still has to be filled in.
const TBD = 'To be discussed';

export const SITE_CONTENT = {
  owner: 'Jaron Illes',
  tagline: TBD,

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
    month: TBD,
    name: TBD,
    icon: 'fa-microchip',
    description: TBD,
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
    { icon: 'fa-star', title: 'Hobby 2', text: TBD },
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

    startPlan: {
      title: 'Startaktivitäten im ersten Halbjahr',
      months: [
        {
          month: 'Monat 1',
          title: 'Team und Projekt',
          points: [
            'Einzelgespräche mit Teammitgliedern führen.',
            'Analyse der Team-Stärken und -Schwächen.',
            'Identifizieren von Verbesserungsbereichen.',
            'Überblick über laufende Projekte erstellen.',
            'Arbeitsumfeld und Prozesse kennenlernen.',
            'Analyse des Projektmanagements.'
          ]
        },
        {
          month: 'Monat 2',
          title: 'Testing Team & QA Prozess',
          points: [
            'Wer: Testing Team kennenlernen',
            'Wie: aktuelle Testmethoden und Prozesse',
            'Wo: auf der Maschine? In der Simulation?',
            'Was: manuell oder automatisiert testen',
            'Wieso: Wer ist der Auftraggeber?',
            'Wann: Auf welchem Zeitstand des Features, des Produkts testen wir?'
          ]
        },
        {
          month: 'Monat 3',
          title: 'Produktportfolio / Mitbewerber',
          points: [
            'Das Produktportfolio kennenlernen.',
            'Einen Überblick über die Montage der Maschinen erhalten.',
            'Analyse der Stärken und Schwächen der einzelnen Produkte.',
            'Stärken und Schwächen der Mitbewerber vergleichen und daraus unseren «Added Value» im Markt herausziehen.',
            'Die gewonnenen Erkenntnisse in zukünftige Projekte integrieren.'
          ]
        },
        {
          month: 'Monat 4',
          title: 'Kundenmanagement',
          points: [
            'Kunden kennenlernen.',
            'Kundenbesuche durchführen.',
            'Kundenfeedback zu Produkten einholen.',
            'Kritische Kunden vs. Key-Kunden und weniger erfolgreiche Projekte analysieren.',
            'Positives und Herausforderungen auswerten und Erkenntnisse umsetzen.'
          ]
        },
        {
          month: 'Monat 5',
          title: 'Implement RTM / Reporting / Feedback',
          points: [
            'Pflichten-/Lastenheft erlernen.',
            'Analyse der anforderungsbezogenen Tests im Test-Team gewinnen.',
            'RTM erstellen.',
            'Test-Matrix anpassen, damit automatisierte und manuelle Tests effizient verwaltet werden.',
            'Reporting erstellen.'
          ]
        },
        {
          month: 'Monat 6',
          title: 'Retrospektive',
          points: [
            'Gemeinsam mit Management und Team überprüfen, ob alles im Soll ist, und festlegen, wie es weitergeht.',
            'Arbeitsmethoden wie Dailys / Weeklys, Feedbackkultur, Reporting-System',
            'Schwächen und Stärken sind erkannt, Massnahmen umgesetzt oder geplant.',
            'Ausserordentliche Projekte erkennen.',
            'Weitere Optimierungen erkennen und die daraus folgenden Aufgaben verteilen.'
          ]
        }
      ]
    },

    quote: {
      text: 'If you’re not prepared to be wrong, you’ll never come up with anything original.',
      author: 'Sir Ken Robinson'
    }
  }
};
