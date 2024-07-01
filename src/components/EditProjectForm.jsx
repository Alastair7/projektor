function EditProjectForm({ project }) {
  <form>
    <label htmlFor="project-name">Title:</label>
    <input
      id="project-name"
      type="text"
      name="title"
      value={project.title}
      required
    />

    <label htmlFor="project-short-description">Short Description:</label>
    <textarea
      id="project-short-description"
      name="shortDescription"
      value={project.shortDescription}
    />

    <label htmlFor="project-url">URL:</label>
    <input id="project-url" type="url" name="url" value={project.url} />

    <label htmlFor="project-status">Status:</label>
    <select
      name="status"
      id="project-status"
      form="add-project-form"
      value={formData.status}
    >
      <option value="done">Done</option>
      <option value="in-progress">In Progress</option>
      <option value="abandoned">Abandoned</option>
      <option value="idea">Idea</option>
    </select>

    <input type="submit" value="Save" />
  </form>;
}

export default EditProjectForm;
