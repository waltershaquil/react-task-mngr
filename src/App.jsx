import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import { v4 } from "uuid";
import { data, Navigate } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // essa funcao e executada sempre que o tasks for alterado
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //useEffect(() => {
  const response = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      { method: "Get" }
    );
    const data = await response.JSON();
    setTasks(newTasks);
  };
  //}, []);

  function onAddTask(name, description) {
    const newTask = {
      id: v4(),
      name,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks); // Use setState to update the tasks state
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-gray-800 text-center flex justify-center items-top p-6">
      <div className="w-[500px] justify-center">
        <h1 className="text-3xl font-bold text-white">Tsk manager</h1>
        <AddTask onAddTask={onAddTask} />
        <Task
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
