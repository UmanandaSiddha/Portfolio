export const siteConfig = {
    personal: {
        name: 'Umananda Siddha',
        title: 'Software Engineer & Full Stack Developer',
        location: {
            city: 'Bongaigaon',
            region: 'Assam',
            country: 'India'
        },
        email: 'umanandasiddha243@gmail.com',
        phone: '+91 708 640 03 95',
        website: 'https://umanandasiddha.vercel.app',
        resumeUrl: '/resume.pdf'
    },
    hero: {
        intro: "I'm a",
        roles: ['Developer', 'Engineer', 'Creator', 'Innovator'],
        primaryCta: {
            label: 'View My Work',
            href: '#experience'
        },
        secondaryCta: {
            label: 'Download Resume',
            href: '/resume.pdf'
        },
        socials: [
            {
                platform: 'instagram',
                label: 'Instagram',
                href: 'https://www.instagram.com/shivaji9407/'
            },
            {
                platform: 'linkedin',
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/umananda-siddha-399b95217'
            },
            {
                platform: 'x',
                label: 'X (Twitter)',
                href: 'https://x.com/TheFallen2428'
            },
            {
                platform: 'github',
                label: 'GitHub',
                href: 'https://github.com/UmanandaSiddha'
            }
        ]
    },
    sections: {
        about: {
            title: 'About Me'
        },
        experience: {
            title: 'Experience'
        },
        projects: {
            title: 'Projects'
        },
        skills: {
            title: 'Skills',
            loopLabel: 'Tech Stack & Tools',
            intro: 'My technical expertise spans modern web development, backend architecture, and cloud infrastructure.'
        },
        contact: {
            title: 'Get In Touch'
        }
    },
    about: {
        summary: [
            'Software Engineer focused on building scalable backend systems and user-first product experiences. Currently working on Ovlox, a project-tracking platform that helps non-technical founders monitor product progress and engineering execution.',
            'I enjoy designing modular architectures, optimizing performance, and connecting product signals across tools to deliver clear, actionable insights.'
        ],
        education: {
            school: 'Tezpur University',
            degree: 'B.Tech, Electronics & Communication Engineering',
            period: '2022 - 2026',
            gpa: '7.6/10'
        },
        achievements: [
            'Development Lead, Google Developer Groups — Tezpur University (2024–25)',
            'Special Mention, NIT Silchar Hackathon (Jan 2024)'
        ]
    },
    experience: [
        {
            title: 'Software Engineer',
            company: 'Learn With Stack (Ovlox)',
            period: 'Nov 2025 – Present',
            description: [
                'Building Ovlox, a project-tracking platform for non-technical founders to monitor product progress and engineering execution.',
                'Developing the backend using NestJS + PostgreSQL with a modular architecture designed for scalability and maintainability.',
                'Implementing integrations with GitHub, Slack, Discord, Jira, and Linear to continuously ingest project and engineering activity signals.',
                'Designing an AI layer with a RAG pipeline so users can ask questions about tasks, progress, blockers, and team activity.'
            ]
        },
        {
            title: 'Software Engineer',
            company: 'Upesto (Savora Eats)',
            period: 'Nov 2024 – Oct 2025',
            description: [
                'Reduced API response time by 40% by introducing Redis caching and moving non-critical operations to async background jobs.',
                'Built and maintained a NestJS backend using PostgreSQL + PostGIS, enabling geo-search queries and location-based features.',
                'Designed scalable media workflows using AWS S3 presigned URLs, improving upload reliability and reducing backend load.',
                'Integrated Google Maps services for production location experiences (place search, distance-based filtering, geo queries).'
            ]
        },
        {
            title: 'Backend Developer Intern',
            company: 'Vrixaa Labs',
            period: 'Aug 2024 – Jan 2025',
            description: [
                'Built a GraphQL-based backend for an LMS platform with a modular service-oriented architecture.',
                'Implemented secure multi-device authentication with refresh-token rotation and role-based authorization flows.',
                'Integrated Monaco Editor and a Dockerized code execution service, enabling real-time coding workflows inside the platform.',
                'Developed a scalable video upload pipeline using FFmpeg transcoding, enabling consistent streaming-ready media output.'
            ]
        },
        {
            title: 'Freelance Full Stack Developer',
            company: 'Evool Foundation (Fundraising Platform)',
            period: 'Feb 2023 – May 2024',
            description: [
                'Delivered a production fundraising platform supporting one-time and subscription donations using the MERN stack.',
                'Integrated Razorpay payments, subscription billing, and webhook verification for secure transaction processing.',
                'Built QR-based campaign pages and tracking workflows to improve donation shareability and campaign reach.'
            ]
        }
    ],
    projects: [
        {
            title: 'Ovlox (Work Project)',
            description:
                'A project-tracking platform for non-technical founders to monitor execution and delivery. Connects GitHub, Slack, Discord, Jira, and Linear, and provides a RAG-based Q&A layer over unified project context.',
            technologies: ['NestJS', 'PostgreSQL', 'Next.js', 'RAG', 'Integrations'],
            github: undefined,
            demo: 'https://ovlox.dev'
        },
        {
            title: 'Savora Eats (Upesto) (Work Project)',
            description:
                'Production food delivery platform backend focused on performance, geo-search, and scalable media handling. Built APIs with caching, async jobs, and PostGIS-powered location features.',
            technologies: ['NestJS', 'PostgreSQL', 'PostGIS', 'Redis', 'BullMQ', 'AWS S3'],
            github: undefined,
            demo: 'https://savoraeats.com'
        },
        {
            title: 'Voolata (Evool Foundation) (Freelance)',
            description:
                'Fundraising platform supporting one-time and subscription donations. Built secure Razorpay payment flows with webhook verification and QR-based campaign pages.',
            technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Razorpay'],
            github: 'https://github.com/UmanandaSiddha/Application',
            demo: 'https://voolata.com'
        },
        {
            title: 'Media Server (WebRTC + Mediasoup)',
            description: 'A multi-user video conferencing system using WebRTC with a mediasoup SFU for scalable real-time communication.',
            technologies: ['WebRTC', 'mediasoup', 'WebSockets', 'Node.js'],
            github: 'https://github.com/UmanandaSiddha/Media-Server-WebRTC',
            demo: undefined
        },
        {
            title: 'MediCode (OCR + GPT Medical Assistant)',
            description: 'An OCR pipeline that extracts medical text from images and generates structured summaries with LLM workflows. Awarded Special Mention at NIT Silchar Hackathon (Jan 2024).',
            technologies: ['OCR', 'LLMs', 'Python', 'Image Processing'],
            github: 'https://github.com/UmanandaSiddha/MediCode',
            demo: undefined
        }
    ],
    skills: {
        techStack: [
            { key: 'react', label: 'React', href: 'https://react.dev' },
            { key: 'next', label: 'Next.js', href: 'https://nextjs.org' },
            { key: 'typescript', label: 'TypeScript', href: 'https://www.typescriptlang.org' },
            { key: 'node', label: 'Node.js', href: 'https://nodejs.org' },
            { key: 'postgres', label: 'PostgreSQL', href: 'https://www.postgresql.org' },
            { key: 'mongo', label: 'MongoDB', href: 'https://www.mongodb.com' },
            { key: 'docker', label: 'Docker', href: 'https://www.docker.com' },
            { key: 'aws', label: 'AWS', href: 'https://aws.amazon.com' }
        ],
        categories: [
            {
                title: 'Languages',
                skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'SQL']
            },
            {
                title: 'Frontend',
                skills: ['ReactJS', 'React Native', 'NextJS', 'Redux', 'Zustand', 'TailwindCSS']
            },
            {
                title: 'Backend',
                skills: ['NodeJS', 'NestJS', 'PostgreSQL', 'MongoDB', 'Prisma', 'Redis', 'BullMQ', 'WebSockets', 'PostGIS']
            },
            {
                title: 'DevOps',
                skills: ['Docker', 'AWS (EC2, S3)', 'CI/CD (GitHub Actions)']
            },
            {
                title: 'Tools',
                skills: ['Firebase/FCM', 'Razorpay', 'FFmpeg', 'Git', 'WebRTC', 'mediasoup']
            },
            {
                title: 'Core Concepts',
                skills: ['Microservices', 'Event-driven systems', 'Pub/Sub', 'JWT/OAuth2', 'Rate limiting', 'Caching', 'Async pipelines']
            }
        ]
    },
    contact: {
        headline: 'Get In Touch',
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        ctas: [
            {
                label: 'Email Me',
                href: 'mailto:umanandasiddha243@gmail.com',
                variant: 'primary'
            },
            {
                label: 'GitHub',
                href: 'https://github.com/UmanandaSiddha',
                variant: 'secondary'
            },
            {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/umananda-siddha-399b95217',
                variant: 'secondary'
            }
        ]
    }
} as const;
