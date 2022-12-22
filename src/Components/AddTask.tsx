import axios from "axios";
import React, { useState } from "react";

export default function AddTask() {
   const [task, setTask] = useState<string>();

   const handleSubmit = (e: any) => {
      e.preventDefault();
      axios
         .post(
            "https://postgrest-worker-example.akramansari1433.workers.dev/tasks",
            { task: task, priority: "medium" }
         )
         .then((response) => {
            console.log(response);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <form onSubmit={handleSubmit} className="flex justify-center mt-3">
         <input
            type="text"
            className="rounded"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setTask(e.target.value)
            }
         />
         <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white rounded p-1 mx-2"
         >
            Add Task
         </button>
      </form>
   );
}
