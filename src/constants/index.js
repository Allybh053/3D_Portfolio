import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Database Administrator",
        company_name: "Maskavia Sdn Bhd",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2024 - Present",
        points: [
            "Ensure databases are properly migrated",
            "Ensure compliance with data protection regulations such as GDPR or HIPAA.",
            "Provide support to development teams during system design and data migration.",
            "Collaborate with development teams on database structures, indexing, and optimization.",
        ],
    },
    {
        title: "IT Executive",
        company_name: "Universal Sports",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2023 -  Aug 2023",
        points: [
            "Coordinate with vendors for troubleshooting and maintenance of third-party hardware or software.",
            "Oversee the installation, configuration, and maintenance of computer systems, servers, networks, and software.",
            "Troubleshoot system failures or bugs and provide prompt solutions to ensure minimal downtime.",
            "Lead the planning and execution of system upgrades, migrations, and IT projects.",
        ],
    },
    {
        title: "Assistant Developer",
        company_name: "MJIIT",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2019 - Jan 2020",
        points: [
            "Support in building front-end and back-end components of web applications or other software solutions.",
            "Collaborate with senior developers to implement features using programming languages such as Java, Python, PHP, C#, or JavaScript.",
            "Collaborate with the quality assurance team to ensure proper testing and deployment.",
            "Assist in managing and organizing code repositories.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Dreams",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Unknown",
        points: [
            "Design and develop the client-side interface using technologies such as HTML, CSS, JavaScript, and modern front-end frameworks like React, Angular, or Vue.js.",
            "Use back-end frameworks such as Node.js, Express.js, Django, Flask, Laravel, or Spring Boot to build scalable and robust systems.",
            "Manage application hosting and deployment on cloud platforms like AWS, Azure, or Google Cloud.",
            "Integrate third-party services and APIs to enhance the functionality of the application.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Allybh053',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Library Management System',
        description: 'Developed a web application For Akademi Pencegahan Rasuah Malaysia.',
        link: 'https://github.com/Allybh053/Library_Management_System',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ecommerce-vendor',
        description: 'Created a full-stack replica of E-commerce Management system',
        link: 'https://github.com/Allybh053/eCommerce-Vendor',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Indoor Navigation System FT Car Park/etc',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://www.catchup-apps.com/app/intro/select-language/?piKey=Basispaket-vZLgxvdW6PH8sK24Epj2RmOSUpag10etaFaFJb8', 
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Login Page using Laravel',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Allybh053/LoginPage',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Thank You For visiting my Github',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://allybh053.github.io/flower/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Vectolabs',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Allybh053/vectolabs',
    }
];