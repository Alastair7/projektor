import Project from "./Project";

function ProjectTable({ projects }) {
  return (
    <div>
      {projects.map((item) => (
        <Project key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ProjectTable;
