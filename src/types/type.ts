export interface Project {
    id:number | string;
    image: string;
    title: string;
    description: string;
    skills: Array<string>;
    demo: string;
    source: string;
}

export interface Experience {
    id:number | string;
    role: string;
    organisation: string;
    startDate: string;
    endDate: string;
    experience: Array<string>;
}

export interface Education {
    id:number | string;
    title: string;
    institution: string;
    year: string;
}