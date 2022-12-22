import React from "react";

export default function Task() {
   return (
      <div className="flex items-center w-100 border rounded p-3 my-2">
         <p className="mr-3">Task1</p>
         <button className="bg-green-700 hover:bg-blue-900 text-white rounded p-1 mx-1">
            Mark Complete
         </button>
         <button className="bg-red-400 hover:bg-red-500 text-black rounded p-1 mx-1">
            Delete
         </button>
      </div>
   );
}
