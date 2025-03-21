import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

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
    }
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' }
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
        'Designed and developed dynamic, responsive web applications using React.js and Next.js to deliver exceptional user experiences.',
        'Collaborated with cross-functional teams to implement frontend designs, integrate RESTful APIs, and ensure smooth functionality.',
        'Executed performance optimization strategies to enhance website speed, SEO, and scalability.',
        'Applied modern UI/UX design principles and coding standards to maintain high-quality, maintainable codebases.',
        'Contributed to building scalable and innovative web solutions aligned with client and business objectives.'
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
          icon: <Icons.globe className='size-1' />
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
          icon: <Icons.globe className='size-1' />
        }
      ],
      image: '/glasierinc.png',
      video: ''
    },
    {
      title: 'Gamezone (E-commerce)',
      projectFor: 'Personal Project',
      href: 'http://13.233.89.30:3001',
      dates: 'Nov 2023 - Dec 2024',
      active: false,
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
          icon: <Icons.globe className='size-1' />
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
