// Skills Section Logo's
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import reactNativeLogo from './assets/tech_logo/Reactnative.png';
import threejsLogo from './assets/tech_logo/threejs.png';
import shadcnLogo from './assets/tech_logo/shadcn.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import dockerlogo from './assets/tech_logo/docker.png'
import firebaseLogo from './assets/tech_logo/firebase.png';
import supabaseLogo from './assets/tech_logo/supabase.png';
import clerkLogo from './assets/tech_logo/clerk.png';
import neonLogo from './assets/tech_logo/neon.png';
import fastapiLogo from './assets/tech_logo/fastapi.png';
import inngestLogo from './assets/tech_logo/inngest.png';
import pythonlogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import postgresslogo from './assets/tech_logo/postgress.png'
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import claudeLogo from './assets/tech_logo/claude.png';
import n8nLogo from './assets/tech_logo/n8n.png';
import cloudinaryLogo from './assets/tech_logo/cloundinary.png';
import zohocrmLogo from './assets/tech_logo/zohocrm.png';
import vapiLogo from './assets/tech_logo/vapi.png';

// Experience Section Logos
import ioclIcon from './assets/company_logo/iocl_icon.png';
import seoulixlogo from './assets/company_logo/download.png';
import bpIcon from "./assets/company_logo/bp_icon.png";

// Education Section Logos
import kmpsLogo from './assets/education_logo/kmps.png';
import bsaLogo from './assets/education_logo/bsa.jpg';

// Project Section Logos
import tripnestLogo from './assets/work_logo/tripnest_logo.png';
import vlcLogo from './assets/work_logo/vlc_logo.png';
import careerlogo from "./assets/work_logo/careerpilot_logo.png";
import unifyaiLogo from './assets/work_logo/unifyai_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Shadcn UI', logo: shadcnLogo },
      { name: 'Three.js', logo: threejsLogo },
      { name: 'React Native', logo: reactNativeLogo },
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
      { name: 'Supabase', logo: supabaseLogo },
      { name: 'Clerk', logo: clerkLogo },
      { name: 'Neon', logo: neonLogo },
      { name: 'FastAPI', logo: fastapiLogo },
      { name: 'Inngest', logo: inngestLogo },
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
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Docker', logo: dockerlogo },
      { name: 'Claude Code', logo: claudeLogo },
      { name: 'Cloudinary', logo: cloudinaryLogo },
      { name: 'Zoho CRM', logo: zohocrmLogo },
      { name: 'n8n', logo: n8nLogo },
      { name: 'Vapi', logo: vapiLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: bpIcon,
      logoBg: "bg-white",
      role: "Full Stack Engineer",
      company: "BluParrot Ventures Pvt Ltd",
      date: "January 2026 - Present",
      desc: "Contributed to AI-powered recruitment and voice agent platforms using LLMs, ElevenLabs, and n8n, automating candidate profiling, call management, transcripts, and workflow operations. Worked on ERP and Zoho CRM integrations to streamline business workflows, customer management, and production operations.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "AI Agents",
        "Next.js",
        "Nest.js"
      ],
    },
    {
      id: 2,
      img: seoulixlogo,
      logoBg: "bg-black",
      role: "Full Stack Developer Intern",
      company: "Seoulix Technologies (OPC) pvt Ltd.",
      date: "November 2025 - January 2026",
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
      id: 3,
      img: ioclIcon,
      logoBg: "bg-white",
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
      title: "CareerPilot - AI HRMS Platform",
      description:
        "Developed a comprehensive AI-powered HRMS, ATS, LMS and Career Guidance platform.",
      image: careerlogo,
      tags: ["TypeScript", "Next.js", "FireBase", "Socket.io", "Bull MQ", "JWT", "OpenAI", "Node.js", "Express.js", "PostgreSQL", "Redis", "LangChain", "Vactor DB", ],
      github: "https://github.com/Lucifer-Tech-arch/CareerPilot",
      webapp: "https://careerpilot.vercel.app/",
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
