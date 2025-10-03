import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Junedali",
  lastName: "Patel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer & AI Enthusiast / Graphic Designer and Video Editor",
  avatar: "/images/juned.jpg",
  email: "junedalipatel007@gmail.com",
  location: "Kolhapur, India",
  timezone: "Asia/Kolkata",
  languages: ["English", "Hindi", "Marathi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Tech Blog</>,
  description: (
    <>
      Get updates on my latest projects, coding tutorials, and insights on full-stack development,
      artificial intelligence, and emerging technologies.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/junedalipatel",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/junedalipatel/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/xjuned__/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  title: "Junedali Patel | Full Stack Developer & AI Enthusiast",
  description: "Personal portfolio of Junedali Patel, a Full Stack Developer passionate about building scalable web applications and exploring AI technologies.",
  headline: "Transforming Ideas into Digital Reality",
  subline: "I'm a Full Stack Developer with expertise in modern web technologies, dedicated to crafting efficient, scalable, and user-centric applications.",
  featured: {
    display: true,
    title: "Exploring the Future of Web & AI",
    href: "/work",
  },
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>Hello! I'm Junedali Patel, a passionate Full Stack Developer with expertise in building modern web applications and integrating cutting-edge AI technologies. I specialize in crafting high-performance, scalable websites and applications that drive business growth and user engagement.</p>
        
        <h3>My Expertise</h3>
        <p>I excel in developing custom web solutions with AI integration, including:</p>
        <ul>
          <li><strong>eCommerce Platforms</strong>: Building feature-rich online stores with seamless payment gateways and inventory management</li>
          <li><strong>Service Websites</strong>: Creating professional, lead-generating websites for service-based businesses</li>
          <li><strong>Personal Branding Sites</strong>: Designing personalized web experiences for creators, influencers, and public figures</li>
          <li><strong>AI Integration</strong>: Implementing AI-powered features like chatbots, recommendation engines, and data analysis tools</li>
          <li><strong>UI/UX Design</strong>: Crafting intuitive and visually appealing user interfaces with a focus on user experience</li>
          <li><strong>Graphic Design</strong>: Creating compelling visual content including logos, social media graphics, and marketing materials</li>
          <li><strong>Video Editing</strong>: Producing engaging video content with professional editing and motion graphics</li>
        </ul>

        <h3>Why Work With Me?</h3>
        <p>With expertise in JavaScript/TypeScript, React.js, Node.js, and modern web technologies, I bring ideas to life with clean, efficient code and intuitive user experiences. My approach combines technical excellence with a deep understanding of business objectives to deliver solutions that make an impact.</p>
        
        <p>When I'm not coding, I'm exploring the latest in AI technology, contributing to open-source projects, and staying ahead of industry trends to bring innovative solutions to every project.</p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Labmentix Pvt. Ltd.",
        timeframe: "March,2025 - August,2025 ",
        role: "Full Stack Web Developer",
        achievements: [
          <>Led the development of scalable web applications for enterprise clients, including Wipro collaborations on SAS-based solutions. Architected responsive front-ends with React.js, Next.js, and Tailwind CSS, while building robust backends using Node.js, Express.js, and RESTful APIs, ensuring optimal performance and user experience across all devices.</>,
          
          <>Orchestrated full-stack development lifecycle from requirements gathering to deployment, implementing secure authentication flows and managing MongoDB databases for efficient data handling. Integrated multiple third-party APIs and services, while optimizing application performance through advanced techniques like code splitting and lazy loading.</>,
          
          <>Collaborated within agile teams to deliver high-quality, performance-sensitive real-time systems. Conducted thorough code reviews, mentored junior developers, and maintained strict adherence to coding standards, ensuring reliable and scalable solutions that met enterprise requirements.</>
        ],
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Tailwind CSS", "JWT", "Git", "Docker", "AWS"],
        images: []
      },
      {
        company: "IIRS-ISRO",
        timeframe: "2022 - 2025",
        role: "Software Scientist (trainee)",
        achievements: [
          <>Served as a trainee at ISRO's Indian Institute of Remote Sensing (IIRS), gaining hands-on experience with cutting-edge space technology and contributing to geospatial data analysis projects. Played an active role in the Chandrayaan-3 mission, supporting critical data processing and analysis tasks.</>,
          
          <>Developed and optimized algorithms for satellite data processing and geospatial visualization, enhancing the efficiency of remote sensing data interpretation. Worked extensively with Python and GIS tools to analyze and process large datasets from various satellite imaging systems.</>,
          
          <>Collaborated with senior scientists and researchers on multiple projects, contributing to the development of innovative solutions for remote sensing applications. Gained expertise in handling satellite imagery, data preprocessing, and implementing machine learning models for terrain classification and feature extraction.</>
        ],
        technologies: ["Python", "Remote Sensing", "GIS", "Data Analysis", "Satellite Imagery"],
        images: []
      },
    ],
  },
  skills: {
    display: true,
    title: "Technical Proficiencies",
    description: "My expertise spans across full-stack development, AI integration, and cloud solutions",
    groups: [
      {
        title: "Frontend Development",
        items: ["React.js", "Next.js", "TypeScript", "Redux", "React Native", "Tailwind CSS", "Material-UI", "Responsive Web Design"],
      },
      {
        title: "Backend & Database",
        items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs", "GraphQL", "Supabase"],
      },
      {
        title: "AI & Data Science",
        items: ["Python", "TensorFlow", "Dialogflow CX", "Natural Language Processing", "Scikit-learn"],
      },
      {
        title: "Mobile Development",
        items: ["React Native", "Expo", "Mobile UI/UX", "Offline Storage", "Push Notifications", "App Deployment"],
      },
      {
        title: "Cloud & DevOps",
        items: ["Google Cloud Platform", "Firebase Services", "Docker", "GitHub Actions", "CI/CD Pipelines"],
      },
      {
        title: "Geospatial & Remote Sensing",
        items: ["GIS Applications", "Satellite Imagery Analysis", "Geospatial Data Processing", "QGIS", "Remote Sensing"],
      },
      {
        title: "Tools & Workflow",
        items: ["Git & GitHub", "VS Code", "Postman",  "JIRA", "Figma", "Adobe XD"],
      },
      {
        title: "Graphic Design",
        items: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "UI/UX Design", "Brand Identity", "Print Design", "Social Media Graphics"],
      },
      {
        title: "Video Editing & Motion Graphics",
        items: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "Motion Graphics", "Video Effects", "Color Grading"],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "D Y Patil College of Engineering and Technology, Kolhapur",
        degree: "Bachelor of Science in Computer Science",
        timeframe: "2019 - 2023",
        description: (
          <>
            <p>Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, Artificial Intelligence, Machine Learning, Software Engineering</p>
            <p>Activities: Member of Computer Science Club, Participated in multiple hackathons and coding competitions</p>
          </>
        ),
      },
      {
        name: "Certifications",
        description: (
          <ul>
            <li>Full Stack Web Development Bootcamp - Udemy</li>
            <li>Machine Learning Specialization - Coursera</li>
            <li>AWS Certified Developer - Associate</li>
          </ul>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Proficiencies",
    skills: [
      {
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces with modern web technologies.",
        images: []
      },
      {
        title: "Backend Development",
        description: "Designing and implementing scalable server-side applications and APIs.",
        images: []
      },
      {
        title: "Database Management",
        description: "Working with both SQL and NoSQL databases for efficient data storage and retrieval.",
        images: []
      },
      {
        title: "DevOps & Cloud",
        description: "Deploying and managing applications using containerization and cloud services.",
        images: []
      },
      {
        title: "AI & Machine Learning",
        description: "Implementing machine learning models and AI-powered features in applications.",
        images: []
      }
    ]
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `A collection of projects developed by ${person.name} showcasing expertise in full-stack development and AI applications`,
  projects: [
    {
      title: "AI-Powered Code Review Assistant",
      description: "A machine learning tool that analyzes code quality, suggests improvements, and detects potential bugs using static code analysis and AI.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
      image: "/images/projects/code-review-ai.jpg",
      link: "https://github.com/junedalipatel/code-review-ai",
      featured: true
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "A real-time analytics dashboard for e-commerce businesses with sales tracking, customer behavior analysis, and inventory management.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Chart.js", "AWS"],
      image: "/images/projects/ecom-dashboard.jpg",
      link: "https://github.com/junedalipatel/ecom-dashboard"
    },
    {
      title: "Smart Home Automation System",
      description: "An IoT-based home automation system with mobile app control, energy monitoring, and AI-powered automation rules.",
      technologies: ["React Native", "Node.js", "MQTT", "Raspberry Pi", "TensorFlow Lite"],
      image: "/images/projects/smart-home.jpg",
      link: "https://github.com/junedalipatel/smart-home"
    },
    {
      title: "Blockchain-Based Voting System",
      description: "A secure and transparent voting system built on blockchain technology to ensure election integrity and prevent fraud.",
      technologies: ["Ethereum", "Solidity", "Web3.js", "React", "IPFS"],
      image: "/images/projects/blockchain-voting.jpg",
      link: "https://github.com/junedalipatel/blockchain-voting"
    }
  ]
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
