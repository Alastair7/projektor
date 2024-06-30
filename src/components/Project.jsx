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
      <div onClick={toggleDialog} className="project">
        <h3>ID: {data.id}</h3>
        <h3>Title: {data.title}</h3>
        <h4>Description: {data.shortDescription}</h4>
        <h4>URL: {data.url}</h4>
        <h4>Status: {data.status}</h4>

        <button onClick={() => onDeleteClick(data.id)}>DELETE</button>
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
