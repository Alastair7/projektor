import { forwardRef } from "react";

const ProjectDetails = forwardRef(function ProjectDetails(props, ref) {
  const { project, toggleDialog } = props;
  return (
    <dialog ref={ref}>
      <p>{project.title}</p>
      <p>{project.status}</p>
      <button onClick={toggleDialog} type="button">
        Close
      </button>
    </dialog>
  );
});

export default ProjectDetails;
