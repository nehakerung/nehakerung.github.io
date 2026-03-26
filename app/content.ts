export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export type ActivityItem = {
  organization: string;
  title: string;
  start: string;
  end: string;
  bullets: string[];
};

export type EducationItem = {
  institution: string;
  qualification: string;
  years?: string;
  details?: string;
  bullets?: string[];
};

export type ProjectItem = {
  title: string;
  period?: string;
  bullets: string[];
  href?: string;
  tags?: string[];
};

export const profile = {
  name: "Neha Kerung",
  email: "nehakerung@gmail.com",
  phone: "+44 7869 259340",
  linkedinUrl: "https://www.linkedin.com/in/neha-kerung-b673131a2",
  headline:
    "Graduate-ready Computer Science student — full-stack, ML, and Agile delivery.",
  summary:
    "Final-year Computer Science student at Aston University, on track to graduate with First-Class Honours. Experienced in full-stack web development, machine learning, and Agile delivery through a year-long software engineering placement at the Office for National Statistics. Seeking a graduate role in technology consulting or software engineering where I can apply technical problem-solving skills to deliver real-world impact.",
};

export const technicalSkills: Record<string, string[]> = {
  Languages: [
    "Python",
    "Java",
    "SQL",
    "PHP",
    "HTML",
    "TypeScript",
    "JavaScript",
  ],
  Frameworks: ["Django", "Next.js", "React", "Wagtail CMS"],
  "Tools & DevOps": ["Git", "Docker", "Jira", "AWS (foundational)", "NoSQL"],
  "ML / Data": [
    "Machine Learning",
    "Natural Language Processing",
    "Large Datasets",
  ],
};

export const professionalSkills = [
  "Problem-solving",
  "Communication",
  "Team collaboration",
  "Time management",
  "Critical thinking",
  "Leadership",
  "Continuous learning",
];

export const experience: ExperienceItem[] = [
  {
    company: "Office for National Statistics",
    role: "Junior Software Engineer",
    start: "Sep 2024",
    end: "Nov 2025",
    bullets: [
      "Contributed to the development of a public-facing web platform using Django and Wagtail, delivering production-ready features within an Agile sprint cycle.",
      "Collaborated in a cross-functional Agile team, actively participating in stand-ups, sprint planning, retrospectives, and code reviews using Jira and Slack.",
      "Implemented automated UI testing using Behave and Playwright, improving reliability and supporting CI/CD pipeline integration.",
      "Developed and deployed features using Docker and Git, strengthening skills in modern DevOps and scalable web development.",
    ],
  },
  {
    company: "TCP Sustainathon",
    role: "Team Member, Carbon Ctrl",
    start: "Oct 2025",
    end: "Dec 2025",
    bullets: [
      "Worked in a team of five to design and pitch a data-driven sustainability solution, conducting research and analysis to support the recommendation.",
      "Presented findings to a judging panel, demonstrating ability to communicate complex data insights clearly and concisely under pressure.",
    ],
  },
];

export const activities: ActivityItem[] = [
  {
    organization: "Aston University",
    title: "University Mentor",
    start: "Nov 2025",
    end: "Present",
    bullets: [
      "Mentor two second-year Computer Science students through weekly one-to-one sessions, developing structured coaching and communication skills.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Aston University",
    qualification: "BSc Computer Science (First-Class Honours predicted)",
    years: "2022 – Jul 2026",
    details:
      "Key modules: Natural Language Processing (Python) · AI · Advanced Database Systems · Software Engineering",
    bullets: [
      "Built practical experience with large datasets, ML model development, and scalable database design.",
    ],
  },
  {
    institution: "Peter Symonds College",
    qualification: "A-Levels",
    years: "2017 – 2019",
    details:
      "Mathematics (B) · Chemistry (B) · Biology (C) | AS-Level: Psychology (A) · Extended Project Qualification (A)",
  },
  {
    institution: "Cranbourne",
    qualification: "GCSEs",
    years: "2017",
    details: "11 GCSEs including grade 9 in Mathematics and English",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Children's Reading Log Platform",
    period: "Sep 2025 – Apr 2026",
    tags: ["Django", "Next.js", "REST API", "UX"],
    bullets: [
      "Designing and building a full-stack web application using Django (REST API backend) and Next.js (React frontend) to encourage reading habits among young users.",
      "Conducting user research and usability testing to iterate on product design, applying UX thinking alongside technical development.",
      "Demonstrates end-to-end project ownership, from architecture decisions, web design and testing.",
    ],
  },
  {
    title: "News Articles Summariser (NLP)",
    period: "Dec 2025",
    tags: ["NLP", "BART", "Evaluation"],
    bullets: [
      "Fine-tuned transformer model (BART, facebook/bart-large-cnn) for news summarisation.",
      "Evaluated outputs using ROUGE, BLEU, and BERTScore.",
      "Developed skills in NLP pipelines, model training, and evaluation.",
    ],
  },
];
