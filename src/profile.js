// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "James Robison",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "While I have dabbled in various languages and frameworks for a decade, I have landed on JavaScript and its libraries and frameworks like React, Next.js, jQuery, Redux, and Angular as my go-to frontend technology. I am also very skilled in React Native, Expo, Flutter, Ionic for mobile app development and also data visualization libraries and frameworks like D3.js, Recharts, ChartJS, WebGL, etc. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "SeatGeek",
    skills: ["MERN stack, MUI, GraphQL"],
    url: "https://seatgeek.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "On",
    skills: ["Contentful, React, Gatsby.js, Stripe"],
    url: "https://www.on-running.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Sendlane",
    skills: ["React, Next.js, Node.js, NestJS, MongoDB"],
    url: "https://www.sendlane.com/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "K-LOVE",
    skills: ["React, React Native, Node.js, Firebase"],
    url: "https://www.sendlane.com/",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Walgreens",
    skills: ["React, Next.js, Redux, MUI, CSS"],
    url: "https://www.walgreens.com/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "iFit",
    skills: ["React, Next.js, Node.js, AWS"],
    url: "https://www.ifit.com/",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Parachuting",
    url: " ",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Chess",
    url: " ",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Climbing",
    url: " ",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/jamesfrobison",
  // facebook: "https://facebook.com",
  twitter: "https://twitter.com/JamieRo41087655",
  // instagram: "https://instagram.com",
  linkedin: "https://linkedin.com/in/jamiefrobison/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
