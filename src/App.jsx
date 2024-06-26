import "./App.css";
import ProjectTable from "./components/ProjectTable";
import { useState } from "react";
import AddProjectForm from "./components/AddProjectForm";

function App() {
  const [projects, setProjects] = useState(InitialProjects);
  const [enable, setEnabled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = () => {
    setEnabled(!enable);
  };

  const handleAddProject = (project) => {
    setProjects([...projects, project]);
  };

  const handleProjectSelect = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    alert(project.id);
    setSelectedProject(project);
  };

  return (
    <>
      <div id="header-app">
        <h1>Projektor</h1>
        <h2>Manage your projects blazingly fast</h2>
      </div>

      <button type="button" onClick={handleClick}>
        Show
      </button>
      <ProjectTable projects={projects} onSelect={handleProjectSelect} />
      {enable && <AddProjectForm handleSubmit={handleAddProject} />}
    </>
  );
}

const InitialProjects = [
  {
    id: crypto.randomUUID(),
    title: "Hello World",
    shortDescription: "Short Description",
    url: "http://localhost:com",
    status: "done",
  },
  {
    id: crypto.randomUUID(),
    title: "Hi Dev",
    shortDescription: "Short Description",
    url: "http://localhost:com",
    status: "done",
  },
];

export default App;
