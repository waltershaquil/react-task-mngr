import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task(props) {
  const Navigate = useNavigate();
  function onSeeDetails(task) {
    Navigate(`/task?name=${task.name}&description=${task.description}`);
  }

  return (
    <div>
      <ul className="space-y-2 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((tasks) => (
          //<li>{tasks.name}</li>
          //
          <li key={tasks.id} className="flex">
            <button
              onClick={() => {
                props.onTaskClick(tasks.id);
              }}
              className="text-white w-[80%] p-2 bg-gray-500 rounded-lg flex items-center gap-2 h-12 text-left mr-1 "
            >
              {tasks.isCompleted && <CheckIcon />}
              {tasks.name}
            </button>
            <button
              onClick={() => {
                onSeeDetails(tasks);
              }}
              className="text-white w-[10%] p-3 bg-gray-500 rounded-lg h-12 mr-1"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => props.onDeleteTaskClick(tasks.id)}
              className="text-white w-[10%] p-3 bg-gray-500 rounded-lg h-12"
            >
              <TrashIcon />
            </button>
          </li>
          //
        ))}
      </ul>
    </div>
  );
}
export default Task;
