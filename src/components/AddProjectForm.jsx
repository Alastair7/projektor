import "./AddProjectForm.css";
import { useForm } from "react-hook-form";
function AddProjectForm({ handleAddProject }) {
  const { register, handleSubmit, reset } = useForm({
    title: "",
    shortDescription: "",
    url: "",
    status: "idea",
  });

  const onSubmit = (data) => {
    const newProject = {
      id: crypto.randomUUID(),
      ...data,
    };

    handleAddProject(newProject);

    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="add-project-form">
      <h1>ADD PROJECT</h1>
      <input {...register("title")} placeholder="Title" />
      <textarea {...register("shortDescription")} placeholder="Description" />
      <input {...register("url")} placeholder="url" />
      <select {...register("status")} defaultValue="idea">
        <option value="done">Done</option>
        <option value="in-progress">In Progress</option>
        <option value="abandoned">Abandoned</option>
        <option value="idea">Idea</option>
      </select>

      <input id="submitProjectButton" type="submit" value="Add project" />
    </form>
  );
}

export default AddProjectForm;
