import { useState } from "react";
import "./App.css";
import ProjectTable from "./components/ProjectTable";
import AddProjectForm from "./components/AddProjectForm";

const INITIALPROJECTS = [
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

function App() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState(INITIALPROJECTS);

  const handleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const handleAddProject = (toAddProject) => {
    setProjects([...projects, toAddProject]);
  };

  const handleProjectDelete = (projectId) => {
    const newProjectsList = projects.filter(
      (project) => project.id !== projectId
    );

    setProjects(newProjectsList);
  };

  return (
    <>
      <div id="header-app">
        <h1>Projektor</h1>
        <h2>Manage your projects blazingly fast</h2>
      </div>

      <button type="button" onClick={handleFormVisibility}>
        Show
      </button>
      {showForm && <AddProjectForm handleAddProject={handleAddProject} />}
      <ProjectTable projects={projects} onDeleteClick={handleProjectDelete} />
    </>
  );
}

export default App;
