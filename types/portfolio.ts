export interface ProjectItem {
    title: string;
    description: string;
    tags: string[];
    liveLink?: string;
    codeLink?: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    duration: string;
    points: string[];
}