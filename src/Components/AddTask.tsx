import React, { useState } from "react";

type AddTaskProps = {
   handleAddTask: (e: React.FormEvent<HTMLFormElement>, task: string) => void;
};

export default function AddTask({ handleAddTask }: AddTaskProps) {
   const [task, setTask] = useState<string>("");
   return (
      <form
         onSubmit={(e) => {
            handleAddTask(e, task);
            e.currentTarget.reset();
         }}
         className="flex justify-center mt-3"
      >
         <input
            type="text"
            className="rounded p-1"
            required
            placeholder="Enter task name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setTask(e.target.value)
            }
         />
         <button
            type="submit"
            className="bg-black hover:bg-blue-700 text-white rounded p-1 mx-2"
         >
            Add Task
         </button>
      </form>
   );
}
