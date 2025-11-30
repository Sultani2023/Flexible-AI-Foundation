export type Module = {
  id: number;
  title: string;
  duration: string;
  level: string;
  icon: string;
  description: string;
  rating: number;
  lessons: number;
};

export const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Artificial Intelligence (AI)",
    duration: "45 min",
    level: "Beginner",
    icon: "🧠",
    description:
      "Learn what AI is, how it works, real-world examples, and why it matters for your future career.",
    rating: 4.8,
    lessons: 8,
  },
  {
    id: 2,
    title: "AI Content Creation for Freelance Writing",
    duration: "60 min",
    level: "Beginner",
    icon: "✍️",
    description:
      "Learn how to use AI tools to write blogs, social posts, product descriptions, and client content faster.",
    rating: 4.8,
    lessons: 9,
  },
  {
    id: 3,
    title: "AI Image Generation for Graphic Designers",
    duration: "75 min",
    level: "Intermediate",
    icon: "🎨",
    description:
      "Master Midjourney, DALL·E, and other tools to create professional-grade images and branding assets.",
    rating: 4.8,
    lessons: 8,
  },
  {
    id: 4,
    title: "AI Video Creation & Editing",
    duration: "90 min",
    level: "Beginner",
    icon: "🎥",
    description:
      "Use AI video generators and editors to create professional content.",
    rating: 4.8,
    lessons: 10,
  },
  {
    id: 5,
    title: "No-Code Website & App Building",
    duration: "120 min",
    level: "Beginner",
    icon: "💻",
    description:
      "Build websites and apps without coding using Webflow, Framer, Glide, Bubble.",
    rating: 4.8,
    lessons: 7,
  },
  {
    id: 6,
    title: "AI-Powered Data Analysis for Business Insights",
    duration: "60 min",
    level: "Intermediate",
    icon: "📊",
    description:
      "Analyze business data using ChatGPT, spreadsheets, and AI dashboards.",
    rating: 4.8,
    lessons: 6,
  }
];
