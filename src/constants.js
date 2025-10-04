// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import cursor from './assets/tech_logo/cursorAI.png'

// Experience Section Logo's
import ioclLogo from './assets/company_logo/iocl.png';
import prodigyLogo from './assets/company_logo/prodigy.jpeg';

// Education Section Logo's
import kmpsLogo from './assets/education_logo/kmps.png';
import bsaLogo from './assets/education_logo/bsa.jpg';

// Project Section Logo's
import tripnestLogo from './assets/work_logo/tripnest_logo.png';
import vlcLogo from './assets/work_logo/vlc_logo.png';
import dishaLogo from './assets/work_logo/disha_logo.png';
import tictactoeLogo from './assets/work_logo/tictactoe_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      {name: 'Cursor AI', logo: cursor}
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ioclLogo,
      role: "Summar Intern",
      company: "Indian Oil Corporation Limited (IOCL)",
      date: "May 2025 - June 2025",
      desc: "Spearheaded the creation of an advanced e-stationary management web page UI at IOCL. Engineered optimized code leveraging JavaScript and CSS resulting in improved design of the e-stationary page. Enhanced the UI using bootstrap framework an also gain valuable knowledge about Qlik sense tool.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      id: 1,
      img: prodigyLogo,
      role: "Web Developer Intern",
      company: "Prodidy Infotech Pvt. Ltd.",
      date: "December 2024 - January 2025",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Git",
        "GitHub",
        "Open API's"
      ],
    },
  ];
  
  export const education = [
    
    {
      id: 0,
      img: bsaLogo,
      school: "BSA College Of Engineering And Technology, Mathura",
      date: "Sept 2022 - Present",
      grade: "80.01%",
      desc: "I have completed my Betchlor's degree (BTech) in Computer Science and Engineering from BSA College ,Mathura. I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "BTech - Computer Science and Engineering",
    },
    {
      id: 1,
      img: kmpsLogo,
      school: "Kanha Makhan Public School, Mathura",
      date: "April 2021 - July 2022",
      grade: "78%",
      desc: "I completed my class 12 education from Kanha Makhan Public School, Mathura, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Vrindavan Lok-Cart",
      description:
        "Built a full-stack AI powered e-commerce platform dedicated to religious and spiritual products, offering product browsing, cartmanagement, Reviews, secure checkout, and order tracking. Implemented responsive UI, secure user authentication, and MongoDB-based backend for product, user, admin panel, and order management. Integrated search, filters, and payment gateway integration for seamless shopping experience, Added Live AI Chat Support for better customer support.",
      image: vlcLogo,
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary","Passport.js"],
      github: "https://github.com/Lucifer-Tech-arch/Vrindavanlokcart",
      webapp: "https://vrindavanlokcart-frontend.vercel.app/",
    },
    {
      id: 1,
      title: "TripNest",
      description:
        "Created full-featured web booking platform in travel, stay and hospitality domain where people can share home stays and experiences and can also create profiles, upload property listings, book stays, write reviews etc",
      image: tripnestLogo,
      tags: ["Bootstrap", "JavaScript", "EJS", "Node.js", "Express.js,", "MongoDB", "Rest API’s","Passport.js"],
      github: "https://github.com/Lucifer-Tech-arch/Tripnext",
      webapp: "https://tripnext-at4z.onrender.com/",
    },
    {
      id: 2,
      title: "Disha - Career Advisory Web App",
      description:
        "Developed a comprehensive mobile application that provides personalized career and education guidance by integrating local government/educational data with global career trends, supporting users from academic choices to professional growth.",
      image: dishaLogo,
      tags: ["React.js", "Gemini API", "Tailwind CSS", "Framer Motion", "Clerk Auth"],
      github: "https://github.com/Lucifer-Tech-arch/Disha-frontend",
      webapp: "https://delightful-zabaione-7a8532.netlify.app/",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description:
        "Developed an engaging Tic Tac Toe game with an intuitive interface, responsive design, and smooth gameplay for an enjoyable experience.",
      image: tictactoeLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Lucifer-Tech-arch/PRODIGY_WD_02",
      webapp: "https://lucifer-tech-arch.github.io/PRODIGY_WD_02/",
    },
  ];  