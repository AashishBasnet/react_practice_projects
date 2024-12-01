import { list } from "postcss";
import Button from "./Button.jsx";
import { useState } from "react";
export default function SideSection({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="mt-5 rounded-tr-2xl bg-zinc-900 px-8 py-16 text-gray-300 md:w-72 w-1/4  ">
      <h2 className=" mb-8 md:text-xl text-3xl font-mono font-extrabold">
        YOUR PROJECTS
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
