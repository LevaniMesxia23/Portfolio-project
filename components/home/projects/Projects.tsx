import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Audiophile-ecommerce-website",
    imgSrc: "project-imgs/audiophileImg.jpg",
    code: "https://github.com/LevaniMesxia23/audiophile-ecommerce-website",
    projectLink: "https://audiophile-ecommerce-website-sable.vercel.app/",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "React Hooks", "Yup", "Helmet"],
    description:
      "Users can browse products, view detailed descriptions, add items to their cart, and complete their purchase seamlessly.",
    modalContent: (
      <>
        <p>
          Welcome to the Audiophile E-commerce Website project!
        </p>
        <p>
          This application is designed to provide an exceptional shopping experience for audiophiles seeking high-quality audio equipment.
        </p>
        <p>
        Users can browse products, view detailed descriptions, add items to their cart, and complete their purchase seamlessly.
        </p>
        <p>
        I made the project using React, with React hooks and other additional tools, it was a particularly pleasant process to make a checkout in this application, in which I used yup, in my opinion, yup simplifies the work and is flexible at the same time
        </p>
      </>
    ),
  },
  {
    title: "Invoice-App",
    imgSrc: "project-imgs/invoiceImg.jpg",
    code: "https://github.com/LevaniMesxia23/invoice-app",
    projectLink: "https://invoice-app-team-team-3.vercel.app",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer-Motion", "Yup"],
    description:
      "This is a web application for managing and generating invoices.",
    modalContent: (
      <>
        <p>
        This is a web application for managing and generating invoices.
        </p>
        <p>
        The app is built using React, TypeScript, and Vite, ensuring a fast and efficient development experience.
        </p>
        <p>
        The project involves developing an Invoice Management System that provides a comprehensive set of functionalities, including creating, reading, updating, filtering, and deleting invoices. It is designed to be responsive, ensuring optimal usability on both desktop and mobile devices.
        </p>
        <p>
        The application leverages local storage for data persistence, allowing users to save and retrieve invoice data efficiently.
        </p>
        <p>
        A modern user interface is crafted using Tailwind CSS, giving the application a sleek and contemporary appearance.
        </p>
      </>
    ),
  },
  {
    title: "Entertainment Web App",
    imgSrc: "project-imgs/webApp.jpg",
    code: "https://github.com/LevaniMesxia23/entertainment-web-app",
    projectLink: "https://entertainment-web-app-virid.vercel.app",
    tech: ["React.js", "Typescript", "Tailwind CSS", "React Router", "Hook-Form"],
    description:
      "This application serves as a platform for users to explore and enjoy various forms of entertainment",
    modalContent: (
      <>
        <p>
        Welcome to the Entertainment Web App!
        </p>
        <p>
        This application serves as a platform for users to explore and enjoy various forms of entertainment, including movies and TV shows.
        </p>
        <p>
        It offers an extensive browsing experience through a vast collection of movies and TV shows, enhanced by advanced search capabilities for quick and easy access to desired content.
        </p>
        <p>
        Users can personalize their experience by adding items to their favorites and watchlist, making it convenient to revisit their preferred content later.
        </p>
        <p>
        The application boasts a fully responsive design, providing an optimal viewing experience on all devices, whether desktop, tablet, or mobile. Its interactive user interface is enriched with engaging animations and smooth transitions, delivering a visually appealing and immersive user experience.
        </p>
      </>
    ),
  },
  {
    title: "Planets Fact Site",
    imgSrc: "project-imgs/planets.jpg",
    code: "https://github.com/LevaniMesxia23/Planets-fact-site",
    projectLink: "https://planets-fact-site-6qzr-f10irtwt3-levanis-projects-b6e33a8c.vercel.app/",
    tech: ["React.js", "TypeScript", "styled-components", "React Router"],
    description:
      "Planets Fact Site is a responsive web application providing detailed information about the planets in our solar system.",
    modalContent: (
      <>
        <p>This responsive website offers an engaging way to explore information about the planets. </p>
        <p>Key features include interactive details, smooth animations, and a design that adapts to any device.</p>
        <p>
        Built using React for dynamic components, React Router for seamless navigation, Framer Motion for animations, and Styled Components for scoped styling, the site provides a modern user experience.
        </p>
        <p>
        Users can delve into detailed planet facts through an engaging interface that features smooth animations and a design optimized for all devices.
        </p>
      </>
    ),
  },
];
