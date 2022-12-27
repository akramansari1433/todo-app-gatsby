import React, { useEffect, useState } from "react";

export default function AddTask() {
   const [task, setTask] = useState<string>();

   const uri =
      "https://postgrest-worker-example.akramansari1433.workers.dev/tasks";

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      await fetch(uri, {
         method: "POST",
         body: JSON.stringify({ task: task, priority: "medium" }),
      })
         .then((response) => response.json())
         .then((data) => data && alert(data.message || data.error))
         .catch((error) => console.log(error));
      e.target.reset();
      location.reload();
   };

   useEffect(() => {}, [handleSubmit]);

   return (
      <form onSubmit={handleSubmit} className="flex justify-center mt-3">
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
