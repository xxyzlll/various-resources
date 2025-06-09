export interface Resource {
  id: number;
  name: string;
  image?: string;
  description?: string;
  link?: string;
}

export const resources: Resource[] = [
  {
    id: 1,
    name: "Vue 官方文档",
    image: "https://vuejs.org/images/logo.png",
    description: "Vue.js 是一套用于构建用户界面的渐进式框架。",
  },
  {
    id: 2,
    name: "Vite 官网",
    image: "https://vitejs.dev/logo.svg",
    description: "下一代前端工具链，让前端开发更快更轻松。",
  },
  {
    id: 3,
    name: "TypeScript 中文网",
    image: "https://www.typescriptlang.org/icons/icon-48x48.png",
    description: "TypeScript 是 JavaScript 的一个超集。",
  },
];
