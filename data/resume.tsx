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
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Postgres',
    'Docker',
    'MongoDB',
    'TailwindCSS',
    'AWS',
    'Express.js'
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
        url: '#',
        icon: Icons.email,
        navbar: false
      }
    }
  },

  work: [
    {
      company: 'Glasier Inc',
      href: 'https://www.glasierinc.com/',
      badges: [],
      location: 'On-site',
      title: 'MERN Stack Developer',
      logoUrl: '/glasierinc.jpeg',
      start: 'Nov 2023',
      end: 'Dec 2024',
      description: [
        'Specialized in frontend development using React.js and Next.js to create dynamic, responsive, and user-friendly web applications',
        'Collaborated with cross-functional teams to deliver seamless user experiences and integrate frontend designs with backend APIs.',
        'Ensured performance optimization, adherence to modern design principles, and maintenance of high code quality.',
        'Actively contributed to the development of scalable and innovative web solutions, aligning with business objectives.'
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
      href: 'https://www.giftoora.com',
      dates: 'Otc 2024 - Dec 2024',
      active: true,
      description:
        'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
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
          icon: <Icons.globe className='size-3' />
        }
      ],
      image: '/gifoora.png',
      video: ''
    }
  ]
} as const;
