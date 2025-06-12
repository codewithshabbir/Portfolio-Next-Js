import project1 from "/public/images/projects/Restoran.png";
import project2 from "/public/images/projects/Positivus.png";
import project3 from "/public/images/projects/Scoop-Home.png";
import project4 from "/public/images/projects/wev-xv.png";
import project5 from "/public/images/projects/nike.png";
import project6 from "/public/images/projects/scent-aura.png";
import project7 from "/public/images/projects/seo.png";
import project8 from "/public/images/projects/krist.png";
import project9 from "/public/images/projects/code-aura-verse.png";
import project10 from "/public/images/projects/countdown-timer.png";
import project11 from "/public/images/projects/todo-app.png";
import project12 from "/public/images/projects/reveal-cards.png";
import project13 from "/public/images/projects/printer-hand.png";
import project14 from "/public/images/projects/lovo-skin.png";
import { Project } from "@/@types/project";

export const projectsData: Project[] = [
  {
    title: "Restoran - Complete Front-end Solution",
    description:
      "A sleek, modern, and fully responsive website template for restaurants, built with HTML, CSS, Bootstrap, JavaScript, Slick Slider, and AOS. This template includes sections like the menu, about us, testimonials, gallery, and contact information, designed to offer a seamless user experience across all devices.",
    image: project1,
    category: "core-frontend",
    githubLink: "https://github.com/codewithshabbir/Restoran",
    liveLink: "https://codewithshabbir.github.io/Restoran/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Slick Slider", "AOS"],
  },
  {
    title: "Positivus - Responsive Landing Page",
    description:
      "This is a fully responsive landing page created based on the SMIT - Web Batch 12 Module 1 design on Figma. The project uses HTML, CSS, Bootstrap, and a little bit of JavaScript to deliver a smooth and interactive experience. It adapts seamlessly to different screen sizes, ensuring a great user experience across devices.",
    image: project2,
    category: "core-frontend",
    githubLink: "https://github.com/codewithshabbir/Positivus",
    liveLink: "https://codewithshabbir.github.io/Positivus/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
  },
  {
    title: "Social Scoop - Responsive Landing Page",
    description:
      "This responsive HTML template is designed for digital marketing agencies. It features a hero banner that includes a call-to-action form and navigation menu. The project utilizes custom fonts and FontAwesome icons to enhance the user experience.",
    image: project3,
    category: "core-frontend",
    githubLink: "https://github.com/codewithshabbir/Html-Template",
    liveLink: "https://html-template-task.netlify.app/",
    tags: ["HTML5", "CSS3"],
  },
  {
    title: "WebXV - Responsive Agency Template",
    description:
      "A fully responsive digital agency website built with React.js and Tailwind CSS. It includes sections like services, portfolio, about, and contact, all structured with modern UI/UX design principles. Smooth navigation is enabled through React Router.",
    image: project4,
    category: "react-js",
    githubLink: "https://github.com/codewithshabbir/WebXV-agency-template",
    liveLink: "https://web-xv-agency-template.vercel.app/",
    tags: ["React Js", "Tailwand CSS", "React Router"],
  },
  {
    title: "Nike - Ecommerce Web Clone",
    description:
      "A sleek eCommerce frontend clone inspired by Nike’s official website. Built using Next.js and styled with Tailwind CSS, it includes product sections, banners, filtering options, and a dynamic layout powered by Sanity CMS and Shadcn UI components.",
    image: project5,
    category: "next-js",
    githubLink: "https://github.com/codewithshabbir/nike-ecommerce-template-3",
    liveLink: "https://nike-ecommerce-template-3.vercel.app/",
    tags: ["Next Js", "Tailwand CSS", "Sanity", "Shadcn UI"],
  },
  {
    title: "Scent Aura - Ecommerce Frontend Web Clone",
    description:
      "A frontend clone of an eCommerce fragrance store designed with HTML, CSS, and Tailwind CSS. It features a clean product listing layout, modern UI design, and responsive elements to ensure optimal display across devices.",
    image: project6,
    category: "core-frontend",
    githubLink: "https://github.com/codewithshabbir/Scent-Aura",
    liveLink: "https://scent-aura.vercel.app/",
    tags: ["HTML", "CSS", "Tailwand CSS"],
  },
  {
    title: "SEO - Landing Page Website",
    description:
      "A professional landing page template for SEO and digital marketing services. Built using HTML, CSS, and Bootstrap, the layout includes sections for services, testimonials, and a contact form, with a mobile-friendly responsive design.",
    image: project7,
    category: "core-frontend",
    githubLink: "https://github.com/codewithshabbir/all-seo-expert",
    liveLink: "https://codewithshabbir.github.io/all-seo-expert/",
    tags: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Krist - Ecommerce Website",
    description:
      "A modern, fully functional eCommerce site built with Next.js, Tailwind CSS, and Sanity CMS. The layout is designed to showcase products with category filtering, rich product detail pages, and seamless navigation using Shadcn UI.",
    image: project8,
    category: "next-js",
    githubLink: "https://github.com/codewithshabbir/krist",
    liveLink: "https://krist-umber.vercel.app/",
    tags: ["Next Js", "Tailwand CSS", "Sanity", "Shadcn UI"],
  },
  {
    title: "Code Aura Verse - Blog Website",
    description:
      "A modern blog platform powered by Next.js and Sanity CMS. It features dynamic routing for blog posts, responsive layouts, category filtering, and a rich text editor interface. Styled with Tailwind CSS and UI components from Shadcn.",
    image: project9,
    category: "next-js",
    githubLink: "https://github.com/codewithshabbir/code-aura-verse",
    liveLink: "https://code-aura-verse.vercel.app/",
    tags: ["Next Js", "Tailwand CSS", "Sanity", "Shadcn UI"],
  },
  {
    title: "Countdown Timer App",
    description:
      "A simple yet elegant countdown timer built with Next.js and Tailwind CSS. Users can set a future date and time to track the countdown dynamically. Fully responsive and visually engaging UI.",
    image: project10,
    category: "mini-projects",
    githubLink: "https://github.com/codewithshabbir/countdown-timer-next-js",
    liveLink: "https://codewithshabbir-countdown-timer-next-js.vercel.app/",
    tags: ["Next Js", "Tailwand CSS"],
  },
  {
    title: "Todo List App",
    description:
      "A React.js-based Todo List application that allows users to add, delete, and mark tasks as complete. Built with Tailwind CSS, it features a clean and responsive design with smooth task management.",
    image: project11,
    category: "mini-projects",
    githubLink: "https://github.com/codewithshabbir/todo-list-react-js",
    liveLink: "https://todo-list-react-js-six-omega.vercel.app/",
    tags: ["React Js", "Tailwand CSS"],
  },
  {
    title: "Reveal Card on Hover",
    description:
      "A mini interactive UI project built with React.js and Tailwind CSS. It reveals hidden content inside a card when hovered over, demonstrating modern CSS animations and hover transitions.",
    image: project12,
    category: "mini-projects",
    githubLink:
      "https://github.com/codewithshabbir/reveal-card-content-on-hover",
    liveLink: "https://codewithshabbir.github.io/reveal-card-content-on-hover/",
    tags: ["React Js", "Tailwand CSS"],
  },
  {
    title: "PrinterHand – Online Printing Service",
    description:
      "A professional WordPress-based printing service website offering custom prints, business cards, flyers, and more. Designed for user-friendly navigation, responsive layout, and easy order placement.",

    image: project13,
    category: "wordpress-projects",
    githubLink: "",
    liveLink: "https://printerhand.com/",
    tags: [
      "Wordpress",
      "Slider Revolution",
      "WooCommerce",
      "Elementor",
      "Contact Form 7",
      "Site Kit",
      "MailChimp",
    ],
  },
  {
    title: "LovoSkin – Skincare E-commerce Store",
    description:
      "A premium Shopify-based e-commerce store for skincare products. Features a clean and responsive design, product filtering, secure checkout, and seamless user experience optimized for conversions.",
    image: project14, 
    category: "shopify-projects",
    githubLink: "",
    liveLink: "https://lovoskin.com/",
    tags: [
      "Shopify",
      "Liquid",
      "Responsive Design",
      "E-commerce",
      "Online Store",
    ],
  },
];
