import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Task from "../Components/Task";
import AddTask from "../Components/AddTask";

type Task = {
   id: number;
   task: string;
   completed: boolean;
};

export const uri =
   "https://postgrest-worker-example.akramansari1433.workers.dev/tasks";

const IndexPage: React.FC<PageProps> = () => {
   const [tasks, setTasks] = useState<Task[]>([]);

   const getTasks = async () => {
      await fetch(uri)
         .then((response) => response.json())
         .then((data) => data && setTasks(data))
         .catch((error) => console.log(error));
   };

   const handleAddTask = async (
      e: React.FormEvent<HTMLFormElement>,
      task: string
   ) => {
      e.preventDefault();
      await fetch(uri, {
         method: "POST",
         body: JSON.stringify({ task: task }),
      })
         .then((response) => response.json())
         .then((data) => {
            if (data) {
               getTasks();
            }
         })
         .catch((error) => console.log(error));
   };

   const handleMarkCompleted = async (id: number) => {
      await fetch(`${uri}/update/${id}`, {
         method: "POST",
      })
         .then((response) => response.json())
         .then((data) => {
            if (data) {
               getTasks();
            }
         })
         .catch((error) => console.log(error));
   };

   const handleDelete = async (id: number) => {
      await fetch(`${uri}/delete/${id}`, {
         method: "GET",
      })
         .then((response) => response.json())
         .then((data) => {
            if (data) {
               getTasks();
            }
         })
         .catch((error) => console.log(error));
   };

   useEffect(() => {
      getTasks();
   }, []);

   return (
      <div>
         <h1 className="text-5xl underline text-center p-5">Todo App</h1>
         <AddTask handleAddTask={handleAddTask} />
         <div className="flex flex-col justify-center items-center my-10">
            {tasks.map((task) => (
               <Task
                  key={task.id}
                  task={task}
                  handleMarkCompleted={handleMarkCompleted}
                  handleDelete={handleDelete}
               />
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
