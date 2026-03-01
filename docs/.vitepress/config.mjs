import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NextStep',
  description: 'Job Portal Management System — Documentation',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#2563EB' }],
    ['meta', { property: 'og:url', content: 'https://nextstep-docv3.vercel.app/' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'NextStep Docs',
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Requirements', link: '/requirements/functional' },
      {
        text: 'API Reference',
        link: '/api/overview'
      },
      { text: 'Architecture', link: '/architecture/overview' },
      { text: 'Use Cases', link: '/usecases/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Quick Start', link: '/guide/getting-started' },
            { text: 'Technology Stack', link: '/guide/tech-stack' },
            { text: 'User Roles', link: '/guide/user-roles' },
          ]
        }
      ],
      '/requirements/': [
        {
          text: 'Requirements',
          items: [
            { text: 'Functional Requirements', link: '/requirements/functional' },
            { text: 'Non-Functional Requirements', link: '/requirements/non-functional' },
            { text: 'Acceptance Criteria', link: '/requirements/acceptance' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Overview',
          items: [
            { text: 'Introduction', link: '/api/overview' },
          ]
        },
        {
          text: 'Auth & Users',
          collapsed: false,
          items: [
            { text: 'Authentication', link: '/api/authentication' },
            { text: 'User Management', link: '/api/users' },
            { text: 'Profiles', link: '/api/profiles' },
            { text: 'Password Reset', link: '/api/password-reset' },
          ]
        },
        {
          text: 'Jobs & Applications',
          collapsed: false,
          items: [
            { text: 'Job Vacancies', link: '/api/jobs' },
            { text: 'Applications', link: '/api/applications' },
            { text: 'Quiz', link: '/api/quiz' },
            { text: 'Mock Examination', link: '/api/mock-exam' },
          ]
        },
        {
          text: 'Freelance',
          collapsed: false,
          items: [
            { text: 'Projects', link: '/api/freelance' },
            { text: 'Milestones', link: '/api/milestones' },
            { text: 'Payments', link: '/api/payments' },
          ]
        },
        {
          text: 'Platform Services',
          collapsed: false,
          items: [
            { text: 'Appointments', link: '/api/appointments' },
            { text: 'CV Builder', link: '/api/cv-builder' },
            { text: 'Event Campaigns', link: '/api/campaigns' },
            { text: 'Notice Board', link: '/api/notices' },
            { text: 'Complaints', link: '/api/complaints' },
          ]
        },
        {
          text: 'Admin',
          collapsed: false,
          items: [
            { text: 'Audit Logs & Reports', link: '/api/audit' },
          ]
        },
      ],
      '/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'System Overview', link: '/architecture/overview' },
            { text: 'ER Diagram', link: '/architecture/er-diagram' },
            { text: 'Data Entities', link: '/architecture/data-entities' },
            { text: 'UI Design Standards', link: '/architecture/ui-standards' },
          ]
        }
      ],
      '/usecases/': [
        {
          text: 'Use Cases',
          items: [
            { text: 'Summary', link: '/usecases/' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Imesh-Bandar/NextStepDoc.git' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'NextStep Job Portal Management System | <a href="https://nextstep-docv3.vercel.app/" target="_blank">Production Site</a>',
      copyright: '© 2026 NextStep Platform. All rights reserved.'
    },
    outline: {
      level: [2, 3]
    }
  },
  markdown: {
    lineNumbers: true
  }
})
