"use client";

import React from "react";
import CardProject from "../components/card-project/card-project";


interface Project {
    id: number;
    title: string;
    img: string;
}
const ProjectsPage = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/Nastya505/bd-projects/posts")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-20 justify-center w-full ">
      {projects.map((project) => (
        <CardProject 
         key={project.id}
         title={project.title}
         img={project.img}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
