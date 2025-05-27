export interface Project {
    image: string;
    title: string;
    description: string;
    skills: Array<string>;
    demo: string;
    source: string;
}

export interface Experience {
    role: string;
    organisation: string;
    startDate: string;
    endDate: string;
    experience: Array<string>;
}

export interface Education {
    title: string;
    institution: string;
    year: string;
}

export type Language = 'HTML' | 'CSS' | 'REACT' | 'FLUTTER' | 'MLP' | 'RSTUDIO' | 'JAVASCRIPT' | 'TYPESCRIPT';

export const languages: Language[] = [
    'HTML',
    'CSS',
    'REACT',
    'FLUTTER',
    'MLP',
    'RSTUDIO',
    'JAVASCRIPT',
    'TYPESCRIPT'
];