
import { StaticImageData } from "next/image";

export interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    category: string;
    liveLink: string;
    githubLink: string;
    tags: string[];
}