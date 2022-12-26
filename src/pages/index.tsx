import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Task from "../Components/Task";
import AddTask from "../Components/AddTask";

type Task = {
   id: number;
   task: string;
   iscompleted: boolean;
   createdat: string;
};

const IndexPage: React.FC<PageProps> = () => {
   const [tasks, setTasks] = useState<Task[]>([]);
   const uri =
      "https://postgrest-worker-example.akramansari1433.workers.dev/tasks";

   useEffect(() => {
      (async () => {
         await fetch(uri)
            .then((response) => response.json())
            .then((data) => data && setTasks(data))
            .catch((error) => console.log(error));
      })();
   }, []);

   return (
      <div>
         <h1 className="text-5xl underline text-center p-5">Todo App</h1>
         <AddTask />
         <div className="flex flex-wrap justify-center items-center my-10">
            {tasks.map((task) => (
               <Task key={task.id} task={task} />
            ))}
         </div>
      </div>
   );
};

export default IndexPage;

export const Head: HeadFC = () => (
   <>
      <title>Home Page</title>;
      <meta name="description" content="Todo App"></meta>
   </>
);
