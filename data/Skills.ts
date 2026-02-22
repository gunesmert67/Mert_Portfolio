/**
 * Categorized technical skills for the Vibe Coder (AI-Assisted Developer) stack.
 * Updated with latest high-quality SVG logos.
 */

export interface Skill {
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
    titleKey: 'skills.categories.vibe',
    skills: [
      {
        id: 1,
        skillName: 'Antigravity',
        image: '/logo/antigravity.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://antigravity.google/',
      },
      {
        id: 2,
        skillName: 'Ollama',
        image: '/logo/ollama.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://ollama.com/',
        invertInDark: true,
      },
      {
        id: 3,
        skillName: 'LM Studio',
        image: '/logo/lmstudio.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://lmstudio.ai/',
        invertInDark: true,
      },
      {
        id: 4,
        skillName: 'OpenAI',
        image: '/logo/openai.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://openai.com/',
        invertInDark: true,
      },
      {
        id: 5,
        skillName: 'Whisper AI',
        image: '/logo/whisper.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://whisperai.com/',
      },
      {
        id: 6,
        skillName: 'NotebookLM',
        image: '/logo/notebooklm.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://notebooklm.google/',
        invertInDark: true,
      },
    ],
  },
  {
    titleKey: 'skills.categories.environment',
    skills: [
      {
        id: 7,
        skillName: 'VS Code',
        image: '/logo/vscode.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://code.visualstudio.com/',
      },
      {
        id: 8,
        skillName: 'GitHub',
        image: '/logo/github_light.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://github.com/',
        invertInDark: true,
      },
      {
        id: 9,
        skillName: 'Docker',
        image: '/logo/docker.svg',
        width: 75,
        height: 75,
        skillLevel: 4,
        link: 'https://www.docker.com/',
      },
      {
        id: 10,
        skillName: 'Git',
        image: '/logo/git.svg',
        width: 75,
        height: 75,
        skillLevel: 4,
        link: 'https://git-scm.com/',
      },
      {
        id: 11,
        skillName: 'n8n',
        image: '/logo/n8n-wordmark-light.svg',
        width: 90,
        height: 40,
        skillLevel: 5,
        link: 'https://n8n.io/',
        invertInDark: true,
      },
    ],
  },
  {
    titleKey: 'skills.categories.technologies',
    skills: [
      {
        id: 12,
        skillName: 'Next.js',
        image: '/logo/nextjs_icon_dark.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://nextjs.org/',
        invertInDark: true,
      },
      {
        id: 13,
        skillName: 'React',
        image: '/logo/react_light.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://react.dev/',
      },
      {
        id: 14,
        skillName: 'Tailwind CSS',
        image: '/logo/tailwindcss.svg',
        width: 80,
        height: 80,
        skillLevel: 5,
        link: 'https://tailwindcss.com/',
      },
      {
        id: 15,
        skillName: 'TypeScript',
        image: '/logo/typescript.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://www.typescriptlang.org/',
      },
      {
        id: 16,
        skillName: 'Python',
        image: '/logo/python.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://www.python.org/',
      },
      {
        id: 17,
        skillName: 'MySQL',
        image: '/logo/mysql-wordmark-light.svg',
        width: 90,
        height: 50,
        skillLevel: 4,
        link: 'https://www.mysql.com/',
      },
      {
        id: 18,
        skillName: 'Streamlit',
        image: '/logo/streamlit.svg',
        width: 75,
        height: 75,
        skillLevel: 5,
        link: 'https://streamlit.io/',
        invertInDark: true,
      },
      {
        id: 19,
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
];

