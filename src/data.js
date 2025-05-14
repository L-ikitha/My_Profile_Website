import { IoLogoGithub, IoMail, IoCall, IoLocationSharp, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
export const Experience = [
  {
    id: 1,
    date: "2021 - Present",
    title: "Front-End Developer",
    location: "Jurident",
    description: "Developing dynamic, responsive web applications using React.js and other modern technologies. Focused on creating seamless user experiences and high-quality, scalable solutions.",
  },
  {
    id: 2,
    date: "2020 - 2021",
    title: "Web Developer Intern",
    location: "Tech Solutions",
    description: "Worked on various web development projects, gaining experience in front-end technologies and responsive design.",
  },
];

export const Projects = [
    {
        id: 1,
        name: "Portfolio Website",
        imageSrc: img1,
        techs: "React.js, CSS Grid",
        github: "#",
      },
      {
        id: 2,
        name: "E-Commerce Store",
        imageSrc: img2,
        techs: "React.js, Redux, Node.js",
        github: "#",
      },
];

export const SocialLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/username",
    iconSrc: <IoLogoGithub />,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:email@example.com",
    iconSrc: <IoMail />,
  },
  {
    id: 3,
    name: "Phone",
    link: "tel:+123456789",
    iconSrc: <IoCall />,
  },
  {
    id: 4,
    name: "Location",
    link: "https://www.google.com/maps",
    iconSrc: <IoLocationSharp />,
  },
  {
    id: 5,
    name: "Twitter",
    link: "https://twitter.com/username",
    iconSrc: <IoLogoTwitter />,
  },
  {
    id: 6,
    name: "LinkedIn",
    link: "https://linkedin.com/in/username",
    iconSrc: <IoLogoLinkedin />,
  },
];
