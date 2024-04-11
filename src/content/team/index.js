// Configuration for the team component / page

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
        testimonial: `Name: Tarik Salih
Nationality: Morocco 🇲🇦
Favorite Protein: Grilled Chicken 🍗
Favorite Lift: T-bar Rows`,
        name: 'Big T',
        job: 'Prop',
        image: {
          src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
          alt: 'Emily Kennedy Image',
        },
      },
      {
        testimonial: `Nationality: Jordanian🇯🇴
Favorite Protein: 🥩🥩
Favorite Lift: Bench`,
        name: 'Joseph Farghal',
        job: 'Prop',
        image: {
          src: 'https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
          alt: 'Sarah Hansen Image',
        },
      },
      {
        testimonial: `Nationality: American 🇺🇸🦅
Favorite Protein: 🍗
Favorite Lift: Rear Delt Fly`,
        name: 'Brenlen',
        job: 'Lock',
        image: {
          src: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80',
          alt: 'Mark Wilkinson Image',
        },
      },
      {
        testimonial: `Name: Dayne Sullivan
Nationality: Irish ☘️🇮🇪
Favorite Protein: Smoked Brisket 🍖
Favorite Lift: Deadlift`,
        name: 'Sully',
        job: 'Flanker',
        image: {
          src: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80',
          alt: 'Mark Wilkinson Image',
        },
      },
    {
      // The name of the first member
      name: 'Neil Sims',
      // Clickable link of the first member name
      nameLink: '#',
      // The job title of the first member
      title: 'Vue.js Developer',
      // The avatar of the first member
      avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png',
      // Social links of the first member
      social: {
        website: '#',
        // twitter: '#',
        instagram: '#',
        // facebook: '#',
        linkedin: '#',
        // github: '#',
      },
    },
    {
      name: 'Bonnie Green',
      nameLink: null,
      title: 'CEO',
      avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      social: {
        // website: '#',
        twitter: '#',
        // instagram: '#',
        // facebook: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Jese Leos',
      nameLink: null,
      title: 'UI/UX Designer',
      // avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
      social: {
        // website: '#',
        // twitter: '#',
        instagram: '#',
        facebook: '#',
        // linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Gough',
      nameLink: null,
      title: 'Frontend Developer',
      avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png',
      social: {
        // website: '#',
        // twitter: '#',
        instagram: '#',
        // facebook: '#',
        linkedin: '#',
        github: '#',
      },
    },
  ],
};

export default team;
