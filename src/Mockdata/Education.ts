import type { Education } from "../types/type"

export const education: Array<Education> = [
  {
    id: crypto.randomUUID(),
    title: "Bachelor of Science in Information Technology",
    institution: "GLS University",
    year: "2020-2023"
  },
  {
    id: crypto.randomUUID(),
    title: "Master of Science in Information Technology",
    institution: "GLS University",
    year: "2023-2025"
  },
] as const;