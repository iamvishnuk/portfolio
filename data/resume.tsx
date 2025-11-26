import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Vishnu K',
  initials: 'VK',
  url: 'https://vishnuk.dev',
  location: 'Kerala, India',
  locationLink: 'https://www.google.com/maps/place/Kannur',
  description: 'Software Engineer. I love building things on internet.',
  summary:
    'As a self-taught MERN Stack Developer, seeking a challenging role to utilize technical skills, passion for web development, and a continuous learning mindset in contributing to dynamic projects and driving impactful solutions',
  avatarUrl: '/me.jpg',
  skills: [
    {
      name: 'React',
      icon: Icons.react
    },
    {
      name: 'Next.js',
      icon: Icons.nextjs
    },
    {
      name: 'Typescript',
      icon: Icons.typescript
    },
    {
      name: 'Node.js',
      icon: Icons.nodejs
    },
    {
      name: 'Postgres',
      icon: Icons.postgres
    },
    {
      name: 'Docker',
      icon: Icons.docker
    },
    {
      name: 'MongoDB',
      icon: Icons.mongodb
    },
    {
      name: 'TailwindCSS',
      icon: Icons.tailwindcss
    },
    {
      name: 'AWS',
      icon: Icons.aws
    },
    {
      name: 'Express.js',
      icon: Icons.expressjs
    },
    {
      name: 'Git',
      icon: Icons.git
    },
    {
      name: 'GitHub',
      icon: Icons.github
    },
    {
      name: 'Figma',
      icon: Icons.figma
    },
    {
      name: 'Socket.IO',
      icon: Icons.socketIo
    }
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' }
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' }
  ],
  contact: {
    email: 'vishnuk1609@gmail.com',
    tel: '+919562658809',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/iamvishnuk',
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vishnu-k-9294a9221',
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: 'X',
        url: 'https://x.com/VishnuK1609',
        icon: Icons.x,
        navbar: true
      },
      email: {
        name: 'Send Email',
        url: 'mailto:vishnuk1609.dev@gmail.com',
        icon: Icons.email,
        navbar: true
      },
      LeetCode: {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/vishnukkakkarayil',
        icon: Icons.leetCode,
        navbar: true
      }
    }
  },

  work: [
    {
      company: 'Glasier Inc',
      href: 'https://www.glasierinc.com',
      badges: [],
      location: 'On-site',
      title: 'MERN Stack Developer',
      logoUrl: '/glasierinc.jpeg',
      start: 'Nov 2023',
      end: 'Dec 2024',
      description: [
        'Revamped legacy web applications requiring modern UI/UX improvements and performance optimization. Built responsive, dynamic interfaces using React.js and Next.js, implementing component-based architecture and state management solutions. Achieved 40% faster page load times and improved user engagement metrics by 25%.',

        'Worked on high-priority client projects with tight deadlines requiring seamless integration between frontend and backend systems. Collaborated closely with cross-functional teams including designers, backend developers, and product managers to integrate RESTful APIs and ensure smooth end-to-end functionality. Successfully delivered scalable web applications meeting all client specifications and quality standards with 95% client satisfaction rate.',

        'Addressed performance bottlenecks affecting website speed and search engine rankings. Implemented code-splitting, lazy loading, image optimization, and SEO best practices across all projects. Reduced bundle sizes by 35% and improved Core Web Vitals scores, resulting in 50% better SEO rankings for key client websites.',

        'Maintained growing codebase requiring consistency and scalability across development team. Established coding standards, implemented reusable component libraries, and conducted code reviews following modern UI/UX principles. Reduced development time for new features by 30% and decreased bug reports by 45% through improved code quality.'
      ]
    }
  ],
  education: [
    {
      school: 'Brototype',
      href: 'https://brototype.com',
      degree: 'MERN Stack Developer',
      logoUrl: '/brototype.jpeg',
      start: '2022',
      end: '2023'
    },
    {
      school: 'Karnataka Colleage of Manage and Science',
      href: 'https://kcms.edu.in/',
      degree: "Bachelor's of Computer Application(BCA)",
      logoUrl: '/kcms.png',
      start: '2018',
      end: '2021'
    }
  ],
  projects: [
    {
      title: 'Ghar Ka Dhosth - Real Estate Platform',
      projectFor: 'Freelance',
      href: 'https://gharkadhosth.in',
      dates: 'Oct 2025 - Oct 2025',
      active: false,
      description:
        'A modern full-stack real estate web application built with Next.js 15, React 19, and TypeScript. Features comprehensive property management with advanced filtering, location-based search, and admin dashboard. Integrates MongoDB, AWS S3 for image storage, and WhatsApp for instant communication. Built with Tailwind CSS and Framer Motion for responsive design and smooth animations. Implements server-side actions, form validation with Zod, and SEO-friendly routing. Docker-ready deployment showcasing enterprise-level architecture for real estate businesses.',
      technologies: [
        'Next.js',
        'Typescript',
        'MongoDB',
        'TailwindCSS',
        'Shadcn UI',
        'Motion',
        'AWS S3',
        'Vercel'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://gharkadhosth.in',
          icon: <Icons.globe size={15} />
        }
      ],
      image: '/ghar-ka-dhosth.png',
      video: ''
    },
    {
      title: 'Monkey Adventures',
      projectFor: 'Freelance',
      href: 'https://www.monkeyadventures.co.in',
      dates: 'Jun 2025 - Jul 2025',
      active: false,
      description:
        'A full-stack travel booking platform built with Next.js, MongoDB, and TailwindCSS. Features include an admin panel for managing events, travel packages (fixed and customizable), and a gallery to showcase completed trips. Users can explore packages and register for events. Built with TypeScript, Framer Motion, and ShadCN UI for a modern and responsive experience.',
      technologies: [
        'Next.js',
        'Typescript',
        'MongoDB',
        'TailwindCSS',
        'Shadcn UI',
        'Motion'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.monkeyadventures.co.in',
          icon: <Icons.globe size={15} />
        }
      ],
      image: '/monkey-adventures.png',
      video: ''
    },
    {
      title: 'Giftoora',
      projectFor: 'Freelance',
      href: 'https://www.giftoora.com',
      dates: 'Nov 2024 - Feb 2025',
      active: false,
      description:
        'Developed a full-stack e-commerce platform for a gift website using Next.js, MongoDB, Razorpay, and ShadCN UI. Implemented seamless payment integration and an intuitive user interface for a smooth shopping experience',
      technologies: [
        'Next.js',
        'Typescript',
        'MongoDB',
        'TailwindCSS',
        'Razorpay',
        'Shadcn UI'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.giftoora.com',
          icon: <Icons.globe size={15} />
        }
      ],
      image: '/giftoora.png',
      video: ''
    },
    {
      title: 'Glasier Inc Website',
      projectFor: 'Galsier Inc',
      href: 'https://www.glasierinc.com',
      dates: 'Nov 2023 - Dec 2024',
      active: false,
      description:
        "Developed Glasier Inc.'s company website using Next.js and Bootstrap, with a strong focus on SEO optimization, responsive design, and performance to enhance user experience and search engine visibility.",
      technologies: ['Next.js', 'Bootstrap'],
      links: [
        {
          type: 'Website',
          href: 'https://www.glasierinc.com',
          icon: <Icons.globe size={15} />
        }
      ],
      image: '/glasierinc.png',
      video: ''
    },
    {
      title: 'Gamezone (E-commerce)',
      projectFor: 'Personal Project',
      href: 'http://13.233.89.30:3001',
      active: false,
      dates: 'Nov 2023 - Dec 2024',
      description:
        'Game-zone is an e-commerce website that allows customers to browse and purchase products online. The website features a user-friendly interface, a secure payment system, and advanced search and filtering options. Customers can create accounts, and track their order status.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'EJS',
        'Bootstrap',
        'Razorpay',
        'Twilio'
      ],
      links: [
        {
          type: 'Website',
          href: 'http://13.233.89.30:3001',
          icon: <Icons.globe size={15} />
        },
        {
          type: 'GitHub',
          href: 'https://github.com/iamvishnuk/Gamezone---ecommerce',
          icon: <Icons.github className='size-4' />
        }
      ],
      image: '/gamezone.png',
      video: ''
    }
  ],
  certifications: [
    {
      title: 'Namaste JavaScript',
      certificateUrl: '/certificates/certificate.webp'
    }
  ]
} as const;
