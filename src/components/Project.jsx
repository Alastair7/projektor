import "./Project.css";

function Project({ data }) {
  return (
    <div className="project">
      <h3>ID: {data.id}</h3>
      <h3>Title: {data.title}</h3>
      <h4>Description: {data.shortDescription}</h4>
      <h4>URL: {data.url}</h4>
      <h4>Status: {data.status}</h4>
    </div>
  );
}

export default Project;
