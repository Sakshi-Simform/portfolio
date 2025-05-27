import type { Project } from "../types/type"

export const project: Array<Project> = [
  { 
    id:crypto.randomUUID(),
    image: "https://th.bing.com/th/id/OIP.wHFSQ73Wtu_EMXUV578XgwHaFj?rs=1&pid=ImgDetMain",
    title: "Post Management",
    description: "CRUD app that allows users to create, read, update, and delete posts, with an infinite scroll feature..",
    skills: ["HTML", "CSS", "TypeScript"],
    demo: "https://deploy-preview-3--crud-productm.netlify.app/",
    source: "https://github.com/Sakshi-Simform/product-management/tree/dev"
  },
  {
    id:crypto.randomUUID(),
    image: "https://th.bing.com/th/id/OIP.ccoQc9qPxXON9NZYlRT8qQHaEq?rs=1&pid=ImgDetMain",
    title: "Split Tracker",
    description: "App made for splitting, and track expenses among participants with local storage support.",
    skills: ["HTML", "CSS", "TypeScript"],
    demo: "https://fair-shaare.vercel.app/",
    source: "https://github.com/dhruvdhaduk-simform/fair-share/tree/dev"
  },
  {
    id:crypto.randomUUID(),
    image: "https://th.bing.com/th/id/OIP.a85wrEeztauWYlgOOOD-KgHaHa?cb=iwc2&rs=1&pid=ImgDetMain",
    title: "CookBook",
    description: "Recipe with images and flip-card functionality for detailed views using reusable components..",
    skills: ["React", "TypeScript"],
    demo: "https://deploy-preview-4--cookpedia-app.netlify.app/",
    source: "https://github.com/Sakshi-Simform/Recipe-App/pull/3"
  }
]as const;