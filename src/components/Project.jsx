import "./Project.css";

function Project({ data }) {
  return (
    <div className="project">
      <h3>ID: {data.id}</h3>
      <h3>{data.title}</h3>
      <h4>{data.shortDescription}</h4>
    </div>
  );
}

export default Project;
