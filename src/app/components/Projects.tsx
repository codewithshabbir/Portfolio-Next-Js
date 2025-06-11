import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Button from "./Button";
import { Project } from "@/@types/project";

interface ProjectProps {
  projectsData: Project[];
}

const Projects: React.FC<ProjectProps> = ({projectsData}) => {
  console.log(projectsData);
  
  return (
    <div>
      {projectsData.map((project, index) => (
        <div key={index} data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 projects-wrapper gap-6 my-4 p-5 rounded-3xl">
          <div className="md:col-span-4">
            <Image
              className="rounded-3xl w-full" layout="responsive"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="md:col-span-8 flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm mt-2 text-gray-200 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tags, index) => (
                <span key={index} className="bg-orange-400 text-white rounded-xl px-3 py-[0.5px]">
                  {tags}
                </span>
              ))}
            </div>
            <div className="relative block mt-8 line">
            <Button
                classes="border-white bg-transparent text-white hover:text-white"
                title="Live Preview"
                icon={<FaChevronRight className="ml-1 inline-block text-sm font-bold w-6" />}
                link={project.liveLink}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
