
import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython , FaBootstrap} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';
import { DiPhp } from 'react-icons/di';

export const links = [
  { id: nanoid(), href: '/', text: 'home' },
  { id: nanoid(), href: '/skills', text: 'skills' },
  { id: nanoid(), href: '/about', text: 'about' },
  { id: nanoid(), href: '/projects', text: 'projects' },
  { id: nanoid(), href: '/contact', text: 'contact' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Node.js, building scalable back-end services and APIs to support dynamic web applications with efficient server-side logic.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in TypeScript, enhancing JavaScript projects with type safety and improved code maintainability for robust web development.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in MongoDB, designing and managing NoSQL databases to store and retrieve data for modern, scalable applications.',
  },
  {
    id: nanoid(),
    title: 'XAMPP',
    icon: <DiPhp className='h-16 w-16 text-emerald-500' />,
    text: 'Familiar with XAMPP, setting up local development environments for PHP and MySQL to test and deploy web applications.',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <SiMysql className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in MySQL, creating and managing relational databases to support data-driven web applications with efficient queries.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Versatile in Python, developing scripts and applications for automation, data processing, and back-end logic in web projects.',
  },

  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Tailwind CSS, creating responsive and utility-first designs for fast and consistent styling of modern web applications.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in Bootstrap, leveraging its components and grid system to build responsive and visually consistent web interfaces efficiently.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://benson-ten.vercel.app/',
    github: 'https://github.com/The-Ke-Tech?tab=repositories',
    title: 'TaskMaster: Productivity App',
    text: 'Developed a responsive task management application using React and Tailwind CSS, enabling users to create, track, and prioritize tasks with a clean, intuitive interface. Integrated local storage for persistent data and implemented drag-and-drop functionality for seamless task organization.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://benson-ten.vercel.app/',
    github: 'https://github.com/The-Ke-Tech?tab=repositories',
    title: 'PortfolioPro: Personal Showcase',
    text: 'Designed and built a dynamic personal portfolio using React, Vite, and Tailwind CSS to showcase my front-end development skills. Featured responsive design, smooth navigation with React Router, and optimized performance for a professional user experience across devices.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://benson-ten.vercel.app/',
    github: 'https://github.com/The-Ke-Tech?tab=repositories',
    title: 'E-Shop: E-Commerce Platform',
    text: 'Created a modern e-commerce website with React and JavaScript, featuring a product catalog, shopping cart, and checkout functionality. Utilized Tailwind CSS for responsive styling and integrated API calls to fetch product data, ensuring a smooth and engaging shopping experience.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://benson-ten.vercel.app/',
    github: 'https://github.com/The-Ke-Tech?tab=repositories',
    title: 'Personal Website: Digital Presence',
    text: 'Built a sleek personal website using HTML, CSS, and JavaScript, showcasing my skills and projects. Designed with a responsive layout and modern aesthetics, it provides an engaging user experience tailored to personal branding and professional outreach.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://benson-ten.vercel.app/',
    github: 'https://github.com/The-Ke-Tech?tab=repositories',
    title: 'Canva Design Portfolio',
    text: 'Curated a collection of professional designs using Canva, including posters, business cards, and social media graphics. Focused on modern aesthetics and user preferences, delivering visually striking assets for personal and commercial branding needs.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://benson-ten.vercel.app/',
    github: 'https://github.com/The-Ke-Tech?tab=repositories',
    title: 'Capcut Video Editing Showcase',
    text: 'Produced engaging video content using Capcut, featuring seamless transitions, effects, and storytelling. Created promotional videos and tutorials, optimized for social media platforms, showcasing creativity and technical proficiency in modern video editing tools.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://benson-ten.vercel.app/',
    github: 'https://github.com/The-Ke-Tech?tab=repositories',
    title: 'Weather Dashboard',
    text: 'Developed an interactive weather dashboard using JavaScript and Tailwind CSS, integrating a third-party API to display real-time weather data. Designed with a responsive interface, it provides users with accurate forecasts and a seamless experience across devices.',
  },
];
