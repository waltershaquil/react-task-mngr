import { useState } from "react";

function AddTask({ onAddTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col bg-slate-200 p-6 rounded-md my-2 space-y-4">
      <input
        id="name"
        className="h-10 p-2 rounded-md"
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        id="description"
        className="h-10 p-2 rounded-md"
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!name.trim() || !description.trim()) {
            return alert("preencha o nome e a descricao");
          }
          onAddTask(name, description);
        }}
        className="w-full bg-slate-600 text-white rounded-md h-10"
      >
        Add Task
      </button>
    </div>
  );
}
export default AddTask;
