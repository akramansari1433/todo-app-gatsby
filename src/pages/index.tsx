import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Task from "../Components/Task";
import AddTask from "../Components/AddTask";
import axios from "axios";

type Task = {
   id: number;
   task: string;
   iscompleted: boolean;
   createdat: string;
};

const IndexPage: React.FC<PageProps> = () => {
   const [tasks, setTasks] = useState<Task[]>([]);
   useEffect(() => {
      (async () => {
         await axios
            .get(
               "https://postgrest-worker-example.akramansari1433.workers.dev/tasks"
            )
            .then((response) => {
               if (response.data) setTasks(response.data);
            })
            .catch((err) => {
               console.log(err);
            });
      })();
   }, []);

   return (
      <div>
         <h1 className="text-5xl underline text-center p-5">Todo App</h1>
         <AddTask />
         <div className="flex flex-col justify-center items-center my-10">
            {tasks.map((task) => (
               <Task key={task.id} task={task} />
            ))}
         </div>
      </div>
   );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
