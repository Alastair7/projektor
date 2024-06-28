import "./Project.css";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { createPortal } from "react-dom";

function Project({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="project">
        <h3>ID: {data.id}</h3>
        <h3>Title: {data.title}</h3>
        <h4>Description: {data.shortDescription}</h4>
        <h4>URL: {data.url}</h4>
        <h4>Status: {data.status}</h4>
      </div>
      {showModal &&
        createPortal(
          <ProjectDetails project={data} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

export default Project;
