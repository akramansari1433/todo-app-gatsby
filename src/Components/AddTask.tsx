import React from "react";

export default function AddTask() {
   return (
      <form action="" className="flex justify-center mt-3">
         <input type="text" className="rounded" />
         <button className="bg-blue-500 hover:bg-blue-700 text-white rounded p-1 mx-2">
            Add Task
         </button>
      </form>
   );
}
