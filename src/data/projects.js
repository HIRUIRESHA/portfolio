import movieLensImg from "../assets/movieLens.png";
import expensemateImg from "../assets/expensemate.png";
import buildaurImg from "../assets/buildaur_devops.png";
import buildauraImg from "../assets/buildaura.png";
import cdcmImg from "../assets/cdcm.png";

export const projects = [
    {
        id: 1,
        title: 'Buildaura - Construction Management Platform',
        shortDescription: 'Enterprise full-stack construction platform with role-based access, project scheduling, and quote tracking.',
        description: 'A comprehensive full-stack management web platform engineered to connect clients, construction firms, and certified engineers. Features strict role-based access control (Admin, Client, Company, Engineer), real-time project milestone tracking, quotation management, and interactive analytics dashboards.',
        image: buildauraImg,
        category: 'Full Stack',
        featured: true,
        status: 'Production Ready',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
        highlights: [
            'Multi-tenant role-based authentication (Admin, Engineer, Company, Client)',
            'Interactive project milestone progress tracking & updates',
            'Contract quotation workflows & estimate management',
            'Responsive dashboard with real-time project status indicators'
        ],
        metrics: 'Role-based Architecture + Full Lifecycle Management',
        githubUrl: 'https://github.com/HIRUIRESHA/Buildaura.git'
    },
    {
        id: 2,
        title: 'Buildaura DevOps CI/CD & Cloud Pipeline',
        shortDescription: 'Automated CI/CD deployment pipeline with Docker containers, Jenkins automation, Terraform IaC, and AWS EC2.',
        description: 'An enterprise-grade DevOps infrastructure for automated building, testing, and continuous deployment of the Buildaura platform. Leverages Docker for consistent multi-stage containerization, Terraform for declarative Infrastructure as Code provisioning on AWS, and Jenkins pipelines for automated integration workflows.',
        image: buildaurImg,
        category: 'DevOps & Cloud',
        featured: true,
        status: 'Operational',
        technologies: ['Docker', 'Jenkins', 'Terraform', 'AWS EC2', 'Linux Bash', 'CI/CD'],
        highlights: [
            'Declarative Infrastructure as Code (IaC) using HashiCorp Terraform',
            'Automated Jenkins CI/CD pipeline triggered on code repository push',
            'Docker containerization with lightweight production images',
            'Cloud deployment automation targeting Amazon Web Services (AWS EC2)'
        ],
        metrics: 'Automated CI/CD + Cloud Infrastructure as Code',
        githubUrl: 'https://github.com/HIRUIRESHA/buildaura_devops.git'
    },
    {
        id: 3,
        title: 'MovieLens - Film Reviews & Rating System',
        shortDescription: 'Community movie critique platform with custom review engines, relational database schema, and admin suite.',
        description: 'A responsive full-stack film database and review portal where cinema enthusiasts can search film listings, read synopses, and post verified ratings and critiques. Built with a scalable relational database architecture in MySQL and protected by an admin moderation console.',
        image: movieLensImg,
        category: 'Full Stack',
        featured: true,
        status: 'Completed',
        technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Axios', 'REST API'],
        highlights: [
            'Relational database architecture schema designed in MySQL',
            'RESTful backend endpoints for movie search, filtering, and reviews',
            'Admin console for managing genre categories, movie metadata, and reviews',
            'Dynamic client-side state handling and rating metrics'
        ],
        metrics: 'Relational DB Design + Moderation Dashboard',
        githubUrl: 'https://github.com/HIRUIRESHA/GUI.git'
    },
    {
        id: 4,
        title: 'ExpenseMate - Personal Finance Mobile App',
        shortDescription: 'Cross-platform mobile personal finance app with spending analytics, budget tracking, and Firebase cloud sync.',
        description: 'A sleek, cross-platform mobile application crafted in Flutter and Dart to help users master their personal finances. Provides daily expense logging, custom income/expense categories, interactive analytical charts, budget threshold alerts, and real-time cloud synchronization.',
        image: expensemateImg,
        category: 'Mobile App',
        featured: true,
        status: 'Completed',
        technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Provider'],
        highlights: [
            'Real-time cloud database synchronization via Google Cloud Firestore',
            'Secure user authentication with email & social sign-in support',
            'Visual charts & category breakdowns for monthly spending analysis',
            'Responsive mobile UI conforming to modern Material 3 design patterns'
        ],
        metrics: 'Cross-Platform Mobile + Real-Time Cloud Sync',
        githubUrl: 'https://github.com/HIRUIRESHA/ExpenseMate.git'
    },
    {
        id: 5,
        title: 'CareLink - Doctor Channeling Healthcare Portal',
        shortDescription: 'Healthcare coordination system with doctor appointment scheduling, role authentication, and patient records.',
        description: 'Collaborative university software engineering project developing a clinical channeling and medical scheduling system. Connects patients with specialized doctors, facilitates digital appointment slot booking, tracks consultant availability, and secures patient medical record uploads.',
        image: cdcmImg,
        category: 'Full Stack',
        featured: true,
        status: 'Academic Project',
        technologies: ['React', 'Spring Boot', 'Java', 'MongoDB', 'Tailwind CSS', 'JWT'],
        highlights: [
            'Enterprise Java backend built with Spring Boot and Spring Security',
            'Document database schema modeled in MongoDB for appointments & records',
            'Interactive calendar booking and slot availability verification',
            'Modern patient-friendly UI built with React and Tailwind CSS'
        ],
        metrics: 'Spring Boot Architecture + University Team Collaboration',
        githubUrl: 'https://github.com/HIRUIRESHA'
    }
];

export const categories = [
    'All',
    'Full Stack',
    'DevOps & Cloud',
    'Mobile App'
];