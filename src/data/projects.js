const projects = [
  {
    id: 1,
    title: 'Rock Creek Wellness Website',
    slug: 'rock-creek-wellness',
    description: 'High-performance, SEO-optimized WordPress website for Rock Creek Wellness with custom CRM functionality.',
    longDescription: `Developed a responsive, user-friendly website using a custom WordPress theme compatible with Elementor. Implemented a custom CRM integration for lead management and targeted email marketing campaigns. Optimized website performance using advanced techniques, achieving high PageSpeed scores on both mobile and desktop.`,
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'HTML5', 'Elementor'],
    features: [
      'Custom WordPress theme with Elementor compatibility',
      'Custom CRM integration for lead management',
      'Advanced performance optimizations',
      'Responsive design for all devices',
      'Custom functionalities for enhanced user experience'
    ],
    image: '/src/assets/images/rock-creek-wellness.jpg',
    link: 'https://rockcreekwellness.com',
    githubLink: 'https://github.com/yourusername/rock-creek-wellness',
    performanceMetrics: [
      'PageSpeed score: 86 on mobile, 98 on desktop',
      'Estimated load time: ~2.5s on mobile, ~1.2s on desktop',
      'First Contentful Paint: ~1.5s on mobile, ~0.8s on desktop',
      'Time to Interactive: ~3.5s on mobile, ~1.8s on desktop'
    ],
    businessImpact: [
      '35% increase in online appointment bookings',
      '40% improvement in average time on site',
      '25% reduction in bounce rate',
      '20% increase in organic search traffic'
    ]
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    slug: 'e-commerce-platform',
    description: 'Full-stack e-commerce platform with real-time inventory management and payment integration.',
    longDescription: `Designed and developed a scalable e-commerce platform using React for the frontend and Node.js with Express for the backend. Implemented real-time inventory management using WebSockets and integrated Stripe for secure payment processing. The platform includes features such as user authentication, product search with filters, and an admin dashboard for inventory management.`,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'Stripe API'],
    features: [
      'User authentication and authorization',
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'Advanced product search and filtering',
      'Responsive design for mobile and desktop',
      'Admin dashboard for inventory and order management'
    ],
    image: '/src/assets/images/e-commerce-platform.jpg',
    link: 'https://myecommerceplatform.com',
    githubLink: 'https://github.com/yourusername/e-commerce-platform',
    performanceMetrics: [
      'First Contentful Paint: 1.2s',
      'Time to Interactive: 2.8s',
      'Lighthouse Performance Score: 92'
    ],
    businessImpact: [
      '50% increase in conversion rate',
      '30% reduction in cart abandonment',
      '25% increase in average order value'
    ]
  }
];

export default projects;
