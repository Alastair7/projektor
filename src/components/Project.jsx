import "./Project.css";
import { useRef } from "react";
import ProjectDetails from "./ProjectDetails";

function Project({ data, onDeleteClick }) {
  const dialogRef = useRef(null);

  const toggleDialog = () => {
    if (!dialogRef.current) {
      console.log("dialogRef is falsy");
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  };

  return (
    <>
      <div onClick={toggleDialog} className="project-container">
        <div className="project-container-text-item">
          <h3>{data.title}</h3>
          <h4>{data.shortDescription}</h4>
        </div>
        <div className="project-container-actions-item">
          <div className="project-container-actions-buttons">
            <button onClick={() => onDeleteClick(data.id)}>
              <img src="src/assets/trash.svg" />
            </button>

            <button>
              {" "}
              <img src="src/assets/trash.svg" />
            </button>
          </div>
          <h4>{data.status}</h4>
        </div>
      </div>
      <ProjectDetails
        project={data}
        toggleDialog={toggleDialog}
        ref={dialogRef}
      />
    </>
  );
}

export default Project;
