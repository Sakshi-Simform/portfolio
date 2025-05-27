export interface Project {
    id:string;
    image: string;
    title: string;
    description: string;
    skills: Array<string>;
    demo: string;
    source: string;
}

export interface Experience {
    id:string;
    role: string;
    organisation: string;
    startDate: string;
    endDate: string;
    experience: Array<string>;
}

export interface Education {
    id:string;
    title: string;
    institution: string;
    year: string;
}

export type Language = 'HTML' | 'CSS' | 'REACT' | 'FLUTTER' | 'MLP' | 'RSTUDIO' | 'JAVASCRIPT' | 'TYPESCRIPT';

export const languages: Array<Language> = [
    
    'HTML',
    'CSS',
    'REACT',
    'FLUTTER',
    'MLP',
    'RSTUDIO',
    'JAVASCRIPT',
    'TYPESCRIPT'
];