// Configuration for the team component / page
const placeHolderImage = { src: '~/assets/images/new_rugby.png', alt: 'UTD Rugby Logo' };

const team = {
  // Whether the team page is enabled or not
  enabled: true,

  // The title of the team section
  title: 'Our Team',

  // The subtitle of the team section
  description: 'Meet the team behind this project',

  // Members of the team
  members: [
    {
      testimonial: `test`,
      nickname: 'Big T',
      firstname: 'Tarik',
      lastname: 'Salih',
      nationality: 'Morocco 🇲🇴',
      favoriteProtein: 'Grilled Chicken 🍗',
      favoriteLift: 'T-bar Rows',
      position: 'Prop',
      image: placeHolderImage,
      social: {
        website: '#',
        // twitter: '#',
        instagram: '#',
        // facebook: '#',
        linkedin: 'TODO',
        github: 'TODO',
      },
    },
    {
      testimonial: ``,
      nickname: '',
      firstname: 'Joseph',
      lastname: 'Farghal',
      nationality: 'Jordanian🇯🇴',
      favoriteProtein: '🥩🥩',
      favoriteLift: 'Bench',
      position: 'Prop',
      image: {
        src: 'https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        alt: 'Sarah Hansen Image',
      },
      social: {
        website: '#',
        // twitter: '#',
        instagram: '#',
        // facebook: '#',
        // linkedin: 'TODO',
        // github: 'TODO',
      },
    },
    {
      testimonial: ``,
      nickname: '',
      firstname: 'Brenlen',
      lastname: '',
      position: 'Lock',
      nationality: 'American 🇺🇸🦅🇪',
      favoriteProtein: '🍗',
      favoriteLift: 'Rear Delt Fly',
      image: placeHolderImage,
    },
    {
      testimonial: ``,
      nickname: 'Sully',
      firstname: 'Dayne',
      lastname: 'Sullivan',
      position: 'Flanker',
      nationality: 'Irish ☘️🇮🇪',
      favoriteProtein: 'Smoked Brisket 🍖',
      favoriteLift: 'Deadlift',
      image: {
        src: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80',
        alt: 'Mark Wilkinson Image',
      },
      social: {
        website: '#',
        // twitter: '#',
        instagram: '#',
        // facebook: '#',
        linkedin: '#',
        // github: '#',
      },
    },
  ],
};

export default team;
