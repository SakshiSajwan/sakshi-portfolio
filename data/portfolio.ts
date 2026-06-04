export const siteConfig = {
  name: "Sakshi Sajwan",
  role: "Full Stack & AI Engineer",
  location: "New Delhi, India",
  email: "sakshisajwan000@gmail.com",
  phone: "+91 8595986060",
  bio: "Full Stack & AI Engineer building modern web applications, intelligent systems, and user-focused digital experiences.",
  links: {
    github: "https://github.com/sakshisajwan",
    linkedin: "https://linkedin.com/in/sakshisajwan",
    hackerrank: "https://www.hackerrank.com/sakshisajwan",
    email: "mailto:sakshisajwan000@gmail.com",
  },
};

export const projects = [
{
    id: "troova",
    title: "Troova",
    tagline: "Social Discovery Mobile App",
    description:
      "A social discovery mobile app that helps users connect through shared interests using a modern swipe-based experience. Currently in MVP stage, built with React Native and Expo for cross-platform iOS and Android delivery.",
    longDescription:
      "Troova reimagines how people discover communities. The swipe-based interaction model reduces friction, while the interest-graph backend surfaces relevant connections. Designed mobile-first with a clean, minimal interface inspired by modern consumer apps.",
    features: [
      "Swipe-based interest matching UI",
      "Real-time user discovery feed",
      "Interest tagging and categorization",
      "Profile-driven connection system",
      "Cross-platform iOS & Android support",
    ],
    challenges: [
      "Designing a discovery algorithm that balances relevance and serendipity",
      "Building a native swipe interaction with React Native Gesture Handler",
      "Structuring real-time data with Firebase and Supabase",
    ],
    stack: ["React Native", "Expo", "Firebase", "Supabase", "TypeScript"],
    category: "Mobile",
    status: "Featured",
    github: "https://github.com/sakshisajwan",
    live: null,
    gradient: "from-violet-500/10 via-transparent to-transparent",
    accentColor: "violet",
  },
  {
    id: "innhance",
    title: "Innhance Dashboard",
    tagline: "Hotel Management & CRM Platform",
    description:
      "A production-grade React.js dashboard built during my internship at Innhance. Powers hotel booking operations, customer relationship management, and WhatsApp automation workflows.",
    longDescription:
      "Built as part of a real startup product, this dashboard handles the core operations of hotel management — bookings, guests, staff, and CRM. Integrated live backend APIs for real-time data sync and contributed to WhatsApp automation for customer communication.",
    features: [
      "Hotel booking management interface",
      "Customer CRM with lead tracking",
      "Real-time API data synchronization",
      "WhatsApp automation workflow UI",
      "Reusable component library",
    ],
    challenges: [
      "Managing complex state across multiple dashboard views",
      "Designing CRM workflows for non-technical hotel staff",
      "Ensuring reliable API sync for real-time booking data",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "Agile"],
    category: "Frontend",
    status: "Internship Project",
    github: "https://github.com/sakshisajwan",
    live: null,
    gradient: "from-blue-500/10 via-transparent to-transparent",
    accentColor: "blue",
  },
  {
    id: "glowpick",
    title: "GlowPick",
    tagline: "AI Skincare Recommendation Engine",
    description:
      "An AI-powered skincare product recommendation system that delivers personalized suggestions based on user skin profile and preferences using machine learning.",
    longDescription:
      "GlowPick uses a combination of rule-based filtering and ML recommendation logic to match users with skincare products. Built on a structured dataset, it performs feature selection, data preprocessing, and scoring to generate accurate, explainable recommendations.",
    features: [
      "Personalized product recommendations",
      "Skin type and concern-based filtering",
      "ML-driven scoring and ranking",
      "Data visualization of recommendation outcomes",
      "Modular preprocessing pipeline",
    ],
    challenges: [
      "Collecting and structuring a reliable skincare product dataset",
      "Balancing recommendation diversity vs accuracy",
      "Making ML outputs explainable to end users",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook"],
    category: "AI / ML",
    status: "Personal Project",
    github: "https://github.com/sakshisajwan",
    live: null,
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    accentColor: "emerald",
  },
];

export const experience = [
  {
    id: "innhance",
    company: "Innhance",
    role: "Frontend Developer Intern",
    period: "Mar 2026 – Apr 2026",
    location: "Remote",
    type: "Internship",
    description:
      "Built production-ready React interfaces for hotel management and CRM platforms at a B2B startup.",
    highlights: [
      "Developed responsive React-based interfaces for hotel management and CRM platforms",
      "Integrated frontend with backend APIs for real-time data synchronization",
      "Built reusable UI component library improving development efficiency",
      "Contributed to WhatsApp automation workflows for customer communication",
      "Collaborated in agile startup environment delivering production-ready features",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "nxtjob",
    company: "NxtJob.ai",
    role: "HR Operations Intern",
    period: "Sep 2025 – Jan 2026",
    location: "Remote",
    type: "Internship",
    description:
      "Supported AI-powered recruitment operations, optimizing hiring workflows and candidate experience.",
    highlights: [
      "Screened candidate profiles and coordinated interview schedules across multiple client requirements",
      "Maintained confidential HR records with strict data privacy compliance",
      "Reduced scheduling delays, contributing to faster interview closures",
      "Improved candidate experience through streamlined communication workflows",
    ],
    stack: ["HR Operations", "Recruitment", "Data Management"],
  },
];

export const skills = {
  Frontend: [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
  ],
  Backend: ["Node.js", "REST APIs", "API Integration"],
  "AI & ML": ["Python", "Pandas", "NumPy", "Scikit-learn", "OpenCV"],
  Databases: ["MongoDB", "MySQL", "SQL"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel", "Railway", "Jupyter Notebook"],
  Concepts: ["SDLC", "Agile", "CRM Development", "Automation Systems"],
};

export const education = [
  {
    degree: "Bachelor of Technology — Computer Science (IoT)",
    institution: "KCC Institute of Technology and Management",
    period: "Sep 2022 – Sep 2026",
    location: "Greater Noida, Uttar Pradesh",
    grade: "CGPA: 7.4",
  },
];