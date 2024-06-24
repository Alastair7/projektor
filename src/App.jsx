import "./App.css";
import SubmitButton from "./components/SubmitButton";
import ProjectTable from "./components/ProjectTable";
import { useId, useState } from "react";

function App() {
  const [projects, setProjects] = useState(InitialProjects);

  const handleClick = () => {
    setProjects([
      {
        id: crypto.randomUUID(),
        title: "Test",
        shortDescription: "Test",
      },
      ...projects,
    ]);
  };
  return (
    <>
      <div id="header-app">
        <h1>Projektor</h1>
        <h2>Manage your projects blazingly fast</h2>
      </div>

      <SubmitButton onClick={handleClick} />
      <ProjectTable projects={projects} />
    </>
  );
}

const InitialProjects = [
  {
    id: crypto.randomUUID(),
    title: "Hello World",
    shortDescription: "Short Description",
  },
  {
    id: crypto.randomUUID(),
    title: "Hi Dev",
    shortDescription: "Short Description",
  },
];

export default App;
