import { useContext } from "react";
import Task from "../task/task";
import AppContext from "../../context/AppContext";

const TaskList = () => {
  const { todos } = useContext(AppContext);
  return (
    <div className="flex flex-col h-[500px] overflow-auto mt-4 mb-8">
      {/* Render List data */}
      {todos?.map((value, index) => (
        // binding data to component
        <Task
          key={value.id}
          id={value.id}
          status={value.status}
          title={value.title}
        />
      ))}
    </div>
  );
};

export default TaskList;
