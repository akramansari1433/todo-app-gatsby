import React from "react";

type TaskProps = {
   task: {
      id: number;
      task: string;
      completed: boolean;
   };
   handleDelete: (id: number) => void;
   handleMarkCompleted: (id: number) => void;
};

export default function Task({
   task,
   handleDelete,
   handleMarkCompleted,
}: TaskProps) {
   return (
      <div className="flex items-center justify-between w-96 border rounded p-2 m-3">
         <p className="break-all">{task.task}</p>
         <div>
            {task.completed ? (
               <button
                  disabled
                  className="bg-green-700  text-white rounded p-1 m-1"
               >
                  Completed
               </button>
            ) : (
               <button
                  className="bg-green-700 hover:bg-green-900 text-white rounded p-1 m-1"
                  onClick={() => handleMarkCompleted(task.id)}
               >
                  Mark Complete
               </button>
            )}

            <button
               className="bg-red-400 hover:bg-red-500 text-black rounded p-1 m-1"
               onClick={() => handleDelete(task.id)}
            >
               Delete
            </button>
         </div>
      </div>
   );
}
