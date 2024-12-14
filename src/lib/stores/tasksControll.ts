import { writable } from "svelte/store";
import { type Props } from "$lib"

type TaskList = Props[];

export const task = writable({});
export const tasks = writable([]);

export const getAllTasks = async (): Promise<TaskList | []> => {
  const myList = localStorage.getItem("@to-do");
  return myList ? await JSON.parse(myList) : [];
}

export const createTask = async (task: Props): Promise<boolean> => {
  const myList: string | null = localStorage.getItem("@to-do");
  let tasks: TaskList = JSON.parse(myList || "[]") as TaskList;
  task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push(task);
  localStorage.setItem("@to-do", JSON.stringify(tasks));
  return true
}