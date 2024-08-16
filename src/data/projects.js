const projects = [
  {
    id: 1,
    title: 'Mia Aesthetics Website Redesign and Development',
    slug: 'mia-aesthetics-website',
    description: 'Led the redesign and development of a responsive WordPress website for Mia Aesthetics, a leading aesthetic clinic, resulting in a 40% increase in online appointment bookings.',
    longDescription: `
      • Implemented custom WordPress plugins to streamline the appointment booking process, reducing user drop-off by 25%.
      • Optimized site performance, achieving a 90+ PageSpeed score, which led to a 15% improvement in organic search rankings.
      • Integrated a custom CRM solution, improving lead management efficiency by 30%.
      • Implemented ADA compliance measures, ensuring accessibility for all users and mitigating legal risks.
    `,
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'HTML5', 'MySQL', 'REST API'],
    technicalHighlights: [
      'Developed custom WordPress theme using modern PHP practices and the WordPress REST API',
      'Implemented lazy loading and image optimization techniques to improve page load times',
      'Utilized Advanced Custom Fields for flexible content management',
      'Integrated third-party APIs for enhanced functionality (e.g., Google Maps, social media feeds)',
    ],
    businessImpact: [
      '40% increase in online appointment bookings',
      '25% reduction in user drop-off during the booking process',
      '15% improvement in organic search rankings',
      '30% improvement in lead management efficiency',
    ],
    image: '/src/assets/images/test.jpg',
    link: 'https://miaaesthetics.com',
    githubLink: 'https://github.com/yourusername/mia-aesthetics',
    dateCompleted: '2023-06-15',
    role: 'Lead Developer',
    teamSize: 3,
    duration: '4 months',
  },
  {
    id: 2,
    title: 'PatientNow CRM Integration for Multi-Location Clinic',
    slug: 'patientnow-integration',
    description: 'Developed a seamless integration between WordPress and the PatientNow CRM system for a multi-location aesthetic clinic, resulting in a 50% reduction in administrative workload.',
    longDescription: `
      • Created a custom WordPress plugin to sync patient data between the website and PatientNow CRM in real-time.
      • Implemented secure data transfer protocols to ensure HIPAA compliance and protect sensitive patient information.
      • Developed a user-friendly interface for staff to manage patient data across all clinic locations.
      • Automated appointment reminders and follow-ups, reducing no-shows by 35%.
    `,
    technologies: ['WordPress', 'PHP', 'JavaScript', 'REST API', 'MySQL', 'React'],
    technicalHighlights: [
      'Designed and implemented a scalable API architecture to handle high-volume data synchronization',
      'Utilized React for building a responsive and interactive admin dashboard',
      'Implemented robust error handling and logging for improved system reliability',
      'Created a batching system for efficient bulk data processing',
    ],
    businessImpact: [
      '50% reduction in administrative workload',
      '35% reduction in appointment no-shows',
      '20% increase in cross-selling opportunities identified through improved data analysis',
      'Enabled expansion to 2 new clinic locations without increasing administrative staff',
    ],
    image: '/src/assets/images/patientnow-integration.jpg',
    link: 'https://example.com/patientnow-case-study',
    githubLink: 'https://github.com/yourusername/patientnow-integration',
    dateCompleted: '2023-09-30',
    role: 'Full Stack Developer',
    teamSize: 2,
    duration: '3 months',
  },
  // Add more projects as needed
];

export default projects;
