module.exports = {
  siteTitle: 'Ayush | Computer Sciencer',
  siteDescription:
    'Ayush Raj is a smart computer engineer, building things to make the world a better place',
  siteKeywords: 'Ayush Raj, Ayush, Raj, designer, content creator',
  siteUrl: 'https://AyushRaj.com',
  siteLanguage: 'en_US',
  siteImage: 'https://AyushRaj.com/og.png',

  // googleVerification: 'dUgjmQBI7tQOciwUQ16Q31rC6bPvMShtEKYuckNowQ',

  name: 'Ayush Raj',
  location: 'Near BOI, PIN 813104 (Banka), BAUSI, India',
  email: 'ayushsinghbijay@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/AyushSingh22',
    },
    {
      name: 'Quora',
      url: 'https://www.quora.com/profile/Ayush-Singh-3056?ch=10&share=8966c649&srid=4C7qm',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ayush-raj-736483193',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/opRaj/',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/opRaj/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AYUSHRA48246665?s=09',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@opRaj',
  googleAnalyticsID: 'UA-127661885-1',

  headerHeight: 100,

  // greenColor: '#64ffda',
  // navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
