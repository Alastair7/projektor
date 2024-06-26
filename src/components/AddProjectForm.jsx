import { useId, useState } from "react";
function AddProjectForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    url: "",
    status: "idea",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: crypto.randomUUID(),
      ...formData,
    };

    handleSubmit(newProject);

    setFormData({
      title: "",
      shortDescription: "",
      url: "",
      status: "idea",
    });
  };
  return (
    <form onSubmit={onSubmit} id="add-project-form">
      <label htmlFor="project-name">Name:</label>
      <input
        type="text"
        name="title"
        id="project-name"
        value={formData.title}
        onChange={onChange}
        required
      />

      <label htmlFor="project-short-description">Short Description:</label>
      <textarea
        name="shortDescription"
        id="project-short-description"
        value={formData.shortDescription}
        onChange={onChange}
      />

      <label htmlFor="project-url">URL:</label>
      <input
        type="url"
        name="url"
        id="project-url"
        value={formData.url}
        onChange={onChange}
      />

      <label htmlFor="project-status">Status:</label>
      <select
        name="status"
        id="project-status"
        form="add-project-form"
        value={formData.status}
        onChange={onChange}
      >
        <option value="done">Done</option>
        <option value="in-progress">In Progress</option>
        <option value="abandoned">Abandoned</option>
        <option value="idea">Idea</option>
      </select>

      <input type="submit" value="Add project" />
    </form>
  );
}

export default AddProjectForm;
