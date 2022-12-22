import React from "react";

type TaskProps = {
   task: {
      id: number;
      task: string;
      iscompleted: boolean;
      createdat: string;
   };
};

export default function Task({ task }: TaskProps) {
   return (
      <div className="flex items-center w-100 border rounded p-3 my-2">
         <p className="mr-3">{task.task}</p>
         {task.iscompleted ? (
            <button
               disabled
               className="bg-green-700  text-white rounded p-1 mx-1"
            >
               Completed
            </button>
         ) : (
            <button className="bg-green-700 hover:bg-green-900 text-white rounded p-1 mx-1">
               Mark Complete
            </button>
         )}

         <button className="bg-red-400 hover:bg-red-500 text-black rounded p-1 mx-1">
            Delete
         </button>
      </div>
   );
}
