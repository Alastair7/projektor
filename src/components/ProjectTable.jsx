import Project from "./Project";

function ProjectTable({ projects, onDeleteClick }) {
  return (
    <div>
      {projects.map((item) => (
        <Project onDeleteClick={onDeleteClick} key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ProjectTable;
