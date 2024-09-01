import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";




// import projectImage1 from "../assets/project1.jpeg";
// import projectImage2 from "../assets/project2.jpeg";
// import projectImage3 from "../assets/project3.jpeg";
// import projectImage4 from "../assets/project4.jpeg";
// import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import bg1 from '../assets/bgImages/bg1.avif'
import bg2 from '../assets/bgImages/bg2.avif'
import bg3 from '../assets/bgImages/bg3.avif'
import bg4 from '../assets/bgImages/bg4.avif'
import bg5 from '../assets/bgImages/bg5.avif'
import bg6 from '../assets/bgImages/bg6.avif'
import bg7 from '../assets/bgImages/bg7.avif'
import bg8 from '../assets/bgImages/bg8.avif'





export const PROJECTS = [
  {
    id: 1,
    name: "Mini-Instagram-Clone",
    description:
     "Vestibulum quis purus velit.Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
    image: bg1,
    link: "https://microinstagramclone.vercel.app/",
  },
  {
    id: 2,
    name: "Nike UI Design",
    description:
      "Vestibulum quis purus velit. Praesent eu nibh ac est tincidunt laoreet ut sit amet nunc. Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
    image: bg2,
    link: "https://nikeuiclone2024.vercel.app/",
  },
  {
    id: 3,
    name: "VirtualR UI/UX Design",
    description:
      "Vestibulum quis purus velit. Praesent eu nibh ac est tincidunt laoreet ut sit amet nunc. Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
    image: bg3,
    link: "https://virtualruiuxclone.vercel.app/",
  },
  {
    id: 4,
    name: "Spotify Landing Page UI/Ux Application",
    description:
      "Praesent eu nibh ac est tincidunt laoreet ut sit amet nunc. Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
    image: bg4,
    link: "https://spotify-ui-ux-clone2024.vercel.app/",
  },
  {
    id: 5,
    name: "Movie-App-UI-Design(TailwindCSS & Redux)",
    description:
      "Laoreet ut sit amet nunc. Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
    image: bg5,
    link: "https://github.com/user/blog-platform",
  },


  {
    id: 6,
    name: "Babble Chat App (Socket.io) MERN",
    description:
    "Vestibulum quis purus velit.Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
    image: bg6,
    link: "https://babble-chat-aplication-2024.onrender.com/login",
  },
  {
    id: 7,
    name: "Contacts-Book-Application",
    description:
     " Praesent eu nibh ac est tincidunt laoreet ut sit amet nunc. Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
    image: bg7,
    link: "https://github.com/user/chat-application",
  },
  {
  id: 8,
  name: "Guess The Number App",
  description:
    "Vestibulum quis purus velit. Praesent eu nibh ac est tincidunt laoreet ut sit amet nunc. Integer rhoncus dapibus leo. Nulla lectus est, laoreet viverra justo sit amet, auctor vestibulum metus. Integer ut tristique ex. Quisque sed viverra neque.",
  image: bg8,
  link: "https://guessmenow.vercel.app/",
},

];



export const SKILLS = [
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <SiExpress  className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Express js",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React Js",
    experience: "2+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  
 
  {
    icon: <RiTailwindCssFill className="text-4xl text-white lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
 
  {
    icon: <SiRedux className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redux",
    experience: "1+ year",
  },
 
];

// export const EXPERIENCES = [
//   {
//     title: "Lead Frontend Developer",
//     company: "Innovative Tech Solutions",
//     duration: "July 2020 - Present",
//     description:
//       "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Digital Creations",
//     duration: "February 2016 - June 2020",
//     description:
//       "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "Bright Future Technologies",
//     duration: "August 2014 - January 2016",
//     description:
//       "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
//   },
// ];

export const EDUCATION = [
  {
    degree: "Master of Technology in Computer Science",
    institution: "IFTM UNIVERSITY ,MORADABAD,UP",
    duration: "SEPTEMBER 2020 - MARCH 2024",
    description:
      "Specialized in Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "INTERMEDIATE",
    institution: "JINGLE BELLS PUBLIC SCHOOL, BAREILLY,UP",
    duration: "MARCH-2020",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "HIGH SCHOOL",
    institution: "JINGLE BELLS PUBLIC SCHOOL, BAREILLY,UP",
    duration: "JANUARY-2018",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  
  
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
