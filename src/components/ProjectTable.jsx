import Project from "./Project";

function ProjectTable({ projects, onSelect }) {
  return (
    <div>
      {projects.map((item) => (
        <Project onClick={() => onSelect(item.id)} key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ProjectTable;
