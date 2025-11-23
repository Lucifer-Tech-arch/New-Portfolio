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
import seoulixlogo from './assets/company_logo/download.png';
import dockerlogo from './assets/tech_logo/docker.png'
import firebaseLogo from './assets/tech_logo/firebase.png';
import pythonlogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import postgresslogo from './assets/tech_logo/postgress.png'
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import cursor from './assets/tech_logo/cursorAI.png'

// Experience Section Logo's
import ioclLogo from './assets/company_logo/iocl.png';

// Education Section Logo's
import kmpsLogo from './assets/education_logo/kmps.png';
import bsaLogo from './assets/education_logo/bsa.jpg';

// Project Section Logo's
import tripnestLogo from './assets/work_logo/tripnest_logo.png';
import vlcLogo from './assets/work_logo/vlc_logo.png';
import dishaLogo from './assets/work_logo/disha_logo.png';
import unifyaiLogo from './assets/work_logo/unifyai_logo.png';

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
      { name: 'PostgreSQL', logo: postgresslogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonlogo },
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
      {name: 'Cursor AI', logo: cursor},
      { name: 'Docker', logo: dockerlogo}
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: seoulixlogo,
      role: "Full Stack Developer Intern",
      company: "Seoulix Technologies (OPC) pvt Ltd.",
      date: "November 2025 - Present",
      desc: " Working with MERN and Next.js to build web applications, Creating AI automation workflows using n8n and Lang Chain.Developing Frontend Components, backend Restful APIs, and database operations using SQL, NoSQL",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "My SQL",
        "n8n AI Automation",
        "Lang Chain"
      ],
    },
    {
      id: 1,
      img: ioclLogo,
      role: "Summer Intern",
      company: "Indian Oil Corporation Limited (IOCL)",
      date: "May 2025 - June 2025",
      desc: "Spearheaded the creation of an advanced e-stationary management web page UI at IOCL. Engineered optimized code leveraging JavaScript and CSS resulting in improved design of the e-stationary page. Enhanced the UI using bootstrap framework an also gain valuable knowledge about Qlik sense tool",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Qluick Sence Tool"
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
      title: "UnifyAI",
      description:
        "Delivered a unified AI platform that reduces content creation time by 80%. Improved image editing speed by 50% using server-side optimization. Enhanced user engagement through real-time preview and feedback systems.",
      image: unifyaiLogo,
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQl", "Clerk Auth","OpenAI Gemini model","Tailwind CSS","Material UI"],
      github: "https://github.com/Lucifer-Tech-arch/UnifyAI",
      webapp: "https://unify-ai-z793.vercel.app/",
    },
  ];  