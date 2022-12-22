import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Task from "../Components/Task";
import AddTask from "../Components/AddTask";

const IndexPage: React.FC<PageProps> = () => {
   useEffect(() => {
      (async () => {
         await fetch(
            "https://postgrest-worker-example.akramansari1433.workers.dev/tasks"
         )
            .then((response) => {
               return response.json();
            })
            .then((data) => console.log(data))
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
            <Task />
            <Task />
            <Task />
            <Task />
         </div>
      </div>
   );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
