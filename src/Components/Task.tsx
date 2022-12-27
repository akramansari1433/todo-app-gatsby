import React from "react";

type TaskProps = {
   task: {
      id: number;
      task: string;
      completed: boolean;
   };
};
const uri =
   "https://postgrest-worker-example.akramansari1433.workers.dev/tasks";

const handleMarkCompleted = async (id: number) => {
   await fetch(`${uri}/update/${id}`, {
      method: "POST",
   })
      .then((response) => response.json())
      .then((data) => data && alert(data.message || data.error))
      .catch((error) => console.log(error));
   location.reload();
};

const handleDelete = async (id: number) => {
   await fetch(`${uri}/delete/${id}`, {
      method: "GET",
   })
      .then((response) => response.json())
      .then((data) => data && alert(data.message || data.error))
      .catch((error) => console.log(error));
   location.reload();
};

export default function Task({ task }: TaskProps) {
   return (
      <div className="flex items-center justify-between w-96 border rounded p-2 mx-3 my-2">
         <p className="mr-3">{task.task}</p>
         <div>
            {task.completed ? (
               <button
                  disabled
                  className="w-40 bg-green-700  text-white rounded p-1 mx-1"
               >
                  Completed
               </button>
            ) : (
               <button
                  className="w-40 bg-green-700 hover:bg-green-900 text-white rounded p-1 mx-1"
                  onClick={() => handleMarkCompleted(task.id)}
               >
                  Mark Complete
               </button>
            )}

            <button
               className="bg-red-400 hover:bg-red-500 text-black rounded p-1 mx-1"
               onClick={() => handleDelete(task.id)}
            >
               Delete
            </button>
         </div>
      </div>
   );
}
