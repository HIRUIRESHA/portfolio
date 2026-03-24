import movieLensImg from "../assets/movieLens.png";
import expensemateImg from "../assets/expensemate.png";
import buildaurImg from "../assets/buildaur_devops.png";
import buildauraImg from "../assets/buildaura.png";
import cdcmImg from "../assets/cdcm.png";


export const projects = [
    {
        id: 1,
        title: 'MovieLens - Movie Reviewing System',
        description: 'Full-stack movie rating and review system where users can explore movies, read details, and add reviews. Includes admin panel for managing movies and categories.',
        image: movieLensImg,
        category: 'Full Stack',
        technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Axios'],
        metrics: 'First full-stack project',
        //demoUrl: 'https://example.com/demo1',
        githubUrl: 'https://github.com/HIRUIRESHA/GUI.git'
    },

    {
        id: 2,
        title: 'Buildaura - Construction Management System',
        description: 'Full-stack system connecting clients and construction companies with role-based access (Admin, Client, Company, Engineer). Includes project requests and management dashboard.',
        image: buildauraImg,
        category: 'Full Stack',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
        metrics: 'Role-based system + real-world workflow',
        //demoUrl: 'https://example.com/demo2',
        githubUrl: 'https://github.com/HIRUIRESHA/Buildaura.git'
    },

    {
        id: 3,
        title: 'Buildaura DevOps Pipeline',
        description: 'CI/CD pipeline using Docker, Jenkins, and AWS EC2 with Terraform for infrastructure automation and deployment.',
        image: buildaurImg,
        category: 'DevOps',
        technologies: ['Docker', 'Jenkins', 'Terraform', 'AWS'],
        metrics: 'CI/CD + Cloud deployment',
        //demoUrl: 'https://example.com/demo3',
        githubUrl: 'https://github.com/HIRUIRESHA/buildaura_devops.git'
    },

    {
        id: 4,
        title: 'ExpenseMate - Mobile App',
        description: 'Flutter mobile app for tracking income and expenses with charts, analytics, reminders, and Firebase authentication.',
        image: expensemateImg,
        category: 'Mobile App',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        metrics: 'Finance tracking app with analytics',
        //demoUrl: 'https://example.com/demo4',
        githubUrl: 'https://github.com/HIRUIRESHA/ExpenseMate.git'
    },

    {
        id: 5,
        title: 'Doctor Channeling System (Ongoing)',
        description: 'Group project for healthcare management system with role-based authentication, appointment booking, and medical record uploads.',
        image: cdcmImg,
        category: 'Full Stack',
        technologies: ['React', 'Spring Boot', 'MongoDB', 'JWT', 'Tailwind CSS'],
        metrics: 'Ongoing university group project',
        //demoUrl: '',
        githubUrl: ''
    }
];

export const categories = [
    'All',
    'Full Stack',
    'Web Apps',
    'DevOps',
    'Mobile App'
];