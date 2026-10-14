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
  ]
};
