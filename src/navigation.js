import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // TODO Update Coaches info and Exec Team
    // {
    //   text: 'Team',
    //   links: [
    //     {
    //       text: 'Coaches and Exec Team',
    //       href: getPermalink('/coaches'),
    //     },
    // TODO Update Roster with player info and pictures
    //     {
    //       text: 'Roster',
    //       href: getPermalink('/roster'),
    //     },
    //   ],
    // },
    {
      text: 'Gallery',
      href: getPermalink('/gallery'),
    },
    {
      text: 'Alumni',
      href: getPermalink('/alumni'),
    },
    // TODO
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
  ],
  actions: [{ text: 'Shop', href: getPermalink('/shop'), target: '_blank' }],
};

export const footerData = {
  // TODO Leaving as example
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Club',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Alumni', href: '#' },
  //       // { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/UTDRugby' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/utd_rugby/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/utdallasrugby' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/UTDallasRugby' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/UTDallasRugby/website/blob/main/LICENSE"> UT Dallas Rugby</a> · All rights reserved.
  `,
};
