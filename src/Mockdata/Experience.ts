import type { Experience } from "../types/type"

export const experience: Array<Experience> = [
  {
    id:crypto.randomUUID(),
    role: "Software Engineer",
    organisation: "Simform Solutions",
    startDate: "January 2025",
    endDate: "Present",
    experience: [
      "Developed and maintained web applications with React.js,improving user experience",
      "Worked with code reviews with Git for version control",
      "Ensured clean, maintainable code through best practices. "
    ]
  }
]as const;