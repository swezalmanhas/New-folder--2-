import Project1 from './assets/project1.jpg';
import Project2 from './assets/Project2.jpg';
import netflix from './assets/netflix.webp';
import Project3 from './assets/Project3.png';
import Project4 from './assets/Project4.png';


import Project8 from './assets/project8.jpg';



export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
 
 
  
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. ',
  },
  {
    id: 2,
    name: ' UI/UX ',
    title: ' DESIGNS ',
    description:
      'UI  and UX design are two closely related disciplines that focus on creating engaging and user-friendly digital experiences',
  },
  {
    id: 3,
    name: ' Video Editing ',
    title: 'Unleashing the Art ',
    description:
      'Video editing is the process of manipulating video footage, audio, and visual effects to create a final video product ',
  },
 
 
];

export const skills = [
  {
    id: 1,
    name: 'HTML/CSS',
    percentage: 85,
    description:
    'HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are two fundamental technologies used for creating and styling web pages.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 60,
    description:
      'JavaScript (JS) is a high-level, interpreted programming language that enables dynamic and interactive behavior in web pages.',
  },

  {
    id: 3,
    name: 'FIGMA',
    percentage: 90,
    description:
      'Figma is a cloud-based design and prototyping tool used for creating user interfaces, web designs, mobile app designs, and other digital design projects. ',
  },

  {
    id: 4,
    name: 'VITE + REACT',
    percentage: 50,
    description:
      'Vite is a fast build tool and development server that is often used in combination with React to create efficient and performant web applications.',
  },

  {
    id: 5,
    name: 'C++',
    percentage: 70,
    description:
      'C++ is a general-purpose programming language that is widely used for developing a wide range of applications. ',
  },

  {
    id: 6,
    name: 'Bootstrap',
    percentage: 70,
    description:
      'Bootstrap is a popular front-end framework used for developing responsive and mobile-first websites and web applications.',
  },
  {
   id:7,
   name:'PHP',
   percentage:50,
   description:'PHP, which stands for Hypertext Preprocessor, is a popular server-side scripting language primarily used for web development.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project8,
    category: 'project',
    title: 'online service management system',
    description:
      ' That helps organizations manage their services by providing a platform to handle customer requests, service inquiries, and complaints.',
      linked:'https://github.com/swezalmanhas/osms2',
  },
  {
    id: 2,
    img: Project2,
    category: 'UI UX Design',
    title: 'Astellar',
    description:
      'The name of the event is Astellar It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      linked:'https://www.figma.com/file/mFvOeKCzr4uTnjevZZFpDW/astellar?type=design&mode=design&t=ScpWiqKGziFtj2JI-0',
  },
  {
    id: 3,
    img: Project3,
    category: 'Event Site',
    title: 'Astellar',
    description:
      'The name of the event is Astellar It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
      linked:'https://astellar.netlify.app',
  },
  {
    id: 4,
    img: Project1,
    category: 'Project',
    title: 'FilmFusion',
    description:
      'Upcoming Project',
      linked:'',
  },
  {
    id: 5,
    img: netflix,
    category: 'Project',
    title: 'Netflix Clone',
    description:
      '"Introducing Flixify, a seamless Netflix clone offering an extensive library of movies, TV shows, and exclusive content"',
      linked:'https://github.com/swezalmanhas/netflix-clone',
  },
  {
    id: 6,
    img: Project4,
    category: 'UI/UX Design',
    title: 'App Design',
    description:
      'Design help to make website or app in more proper and efficient way.',
      linked:'https://www.figma.com/file/lmDoX7rB5vUME1y3vJk2EB/food-app?type=design&mode=design&t=l1mbM5myQVb9wSLk-0',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Undergraduate',
    subtitle: 'Thapar Institute of Engineering and Technology',
    date: '2021 - 2025',
    description:
      'B.E in Computer Science and Engineering currently study in 3 year.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Higher Secondary Education',
    subtitle: 'Delhi Public School Udhampur',
    date: '2020 - 2021',
      description: 'Second topper in NON-MEDICAL branch of DPS UDHAMPUR in 2020-2021 with  PERCENTAGE : 95.8%',
    category: 'education',
  },

  {
    id: 3,
    title: 'Matriculation',
    subtitle: "St. Mary's Convent School Agra ",
    date: '2018-2019',
    description:
      'PERCENTAGE : 89.4% ',
      
    category: 'education',
  },

  {
    id: 4,
    title: 'Microsoft Learn Student Chapter',
    subtitle: 'Member Of Tech Team',
    date: '2021 - PRESENT',
    description:
      'Suggesting and Designing Core Website for Events Core Responsibility for designing Front-end using CSS/JS/Bootstrap/Figma',
     
    category: 'experience',
  },
];

