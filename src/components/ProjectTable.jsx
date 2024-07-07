import Project from "./Project";
import "./ProjectTable.css";

function ProjectTable({ projects, onDeleteClick }) {
  return (
    <div className="project-table">
      {projects.map((item) => (
        <Project onDeleteClick={onDeleteClick} key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ProjectTable;
