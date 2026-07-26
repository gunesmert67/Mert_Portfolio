/**
 * Categorized technical skills for the Vibe Coder (AI-Assisted Developer) stack.
 * Updated with latest high-quality SVG logos and organized into requested categories.
 */

interface Skill {
  id: number;
  skillName: string;
  image: string;
  width: number;
  height: number;
  skillLevel: number;
  link?: string;
  invertInDark?: boolean;
}

export interface SkillCategory {
  titleKey: string;
  skills: Skill[];
}

export const SkillsData: SkillCategory[] = [
  {
    titleKey: 'skills.categories.web',
    skills: [
      {
        id: 1,
        skillName: 'Next.js',
        image: '/logo/nextjs_icon_dark.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://nextjs.org/',
        invertInDark: true,
      },
      {
        id: 2,
        skillName: 'React',
        image: '/logo/react_light.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://react.dev/',
      },
      {
        id: 3,
        skillName: 'TypeScript',
        image: '/logo/typescript.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://www.typescriptlang.org/',
      },
      {
        id: 4,
        skillName: 'Tailwind CSS',
        image: '/logo/tailwindcss.svg',
        width: 80,
        height: 80,
        skillLevel: 5,
        link: 'https://tailwindcss.com/',
      },
      {
        id: 5,
        skillName: 'Three.js',
        image: '/logo/threejs.svg',
        width: 75,
        height: 75,
        skillLevel: 4,
        link: 'https://threejs.org/',
        invertInDark: true,
      },
      {
        id: 6,
        skillName: 'Framer Motion',
        image: '/logo/framer-motion.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://www.framer.com/motion/',
      },
      {
        id: 7,
        skillName: 'Python',
        image: '/logo/python.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://www.python.org/',
      },
      {
        id: 8,
        skillName: 'Streamlit',
        image: '/logo/streamlit.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://streamlit.io/',
        invertInDark: true,
      },
    ],
  },
  {
    titleKey: 'skills.categories.vibe',
    skills: [
      {
        id: 9,
        skillName: 'Antigravity',
        image: '/logo/antigravity.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://antigravity.google/',
      },
      {
        id: 10,
        skillName: 'Groq',
        image: '/logo/groq.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://groq.com/',
        invertInDark: true,
      },
      {
        id: 11,
        skillName: 'Ollama',
        image: '/logo/ollama.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://ollama.com/',
        invertInDark: true,
      },
      {
        id: 12,
        skillName: 'LM Studio',
        image: '/logo/lmstudio.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://lmstudio.ai/',
        invertInDark: true,
      },
      {
        id: 13,
        skillName: 'OpenAI',
        image: '/logo/openai.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://openai.com/',
        invertInDark: true,
      },
      {
        id: 14,
        skillName: 'Whisper AI',
        image: '/logo/Whisper.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://openai.com/research/whisper',
      },
      {
        id: 15,
        skillName: 'NotebookLM',
        image: '/logo/notebooklm.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://notebooklm.google/',
        invertInDark: true,
      },
      {
        id: 16,
        skillName: 'Qdrant',
        image: '/logo/qdrant-wordmark-light.svg',
        width: 90,
        height: 40,
        skillLevel: 5,
        link: 'https://qdrant.tech/',
        invertInDark: true,
      },
    ],
  },
  {
    titleKey: 'skills.categories.automation',
    skills: [
      {
        id: 17,
        skillName: 'n8n',
        image: '/logo/n8n-wordmark-light.svg',
        width: 90,
        height: 40,
        skillLevel: 5,
        link: 'https://n8n.io/',
        invertInDark: true,
      },
      {
        id: 18,
        skillName: 'Docker',
        image: '/logo/docker.svg',
        width: 75,
        height: 75,
        skillLevel: 4,
        link: 'https://www.docker.com/',
      },
      {
        id: 19,
        skillName: 'Vercel',
        image: '/logo/vercel.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://vercel.com/',
        invertInDark: true,
      },
      {
        id: 20,
        skillName: 'MySQL',
        image: '/logo/mysql-wordmark-light.svg',
        width: 90,
        height: 50,
        skillLevel: 4,
        link: 'https://www.mysql.com/',
      },
      {
        id: 21,
        skillName: 'Git',
        image: '/logo/git.svg',
        width: 75,
        height: 75,
        skillLevel: 4,
        link: 'https://git-scm.com/',
      },
      {
        id: 22,
        skillName: 'GitHub',
        image: '/logo/github_light.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://github.com/',
        invertInDark: true,
      },
      {
        id: 23,
        skillName: 'VS Code',
        image: '/logo/vscode.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://code.visualstudio.com/',
      },
    ],
  },
];
