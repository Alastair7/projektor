function ProjectDetails({ project, onClose }) {
  return (
    <>
      <p>{project.title}</p>
      <p>{project.status}</p>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </>
  );
}

export default ProjectDetails;
