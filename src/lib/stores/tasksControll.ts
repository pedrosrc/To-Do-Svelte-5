import { writable } from "svelte/store";
import { type FormProps } from "$lib"

type TaskList = FormProps[];

export const tasks = writable<TaskList>([]);

export const getAllTasks = (): void => {
  const myList = localStorage.getItem('@to-do');
  tasks.set(myList ? JSON.parse(myList) : []);
};

export const createTask = async (task: FormProps): Promise<void> => {
  try{
    tasks.update(currentTasks => {
      task.id = currentTasks.length > 0 ? currentTasks[currentTasks.length - 1].id + 1 : 1;
      const updatedTasks = [...currentTasks, task];
      localStorage.setItem("@to-do", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  } catch (error){
    console.error('Erro ao criar tarefa:', error);
  }
};

export const updateTask = async (taskEdit: FormProps): Promise<void> => {
  try{
    tasks.update(currentTasks => {
      const updatedTasks = currentTasks.map(task => {
        if (task.id === taskEdit.id) {task = taskEdit;}
        return task;
      })
      localStorage.setItem("@to-do", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  } catch (error){
    console.error('Erro ao  a tarefa:', error);
  }
};


export const setDoneTask = async (taskId: number): Promise<void> => {
  try{
    tasks.update(currentTasks => {
      const updatedTasks = currentTasks.map(task => {
        if (task.id === taskId) {task.done = !task.done;}
        return task;
      })
      localStorage.setItem("@to-do", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  } catch (error){
    console.error('Erro ao  a tarefa:', error);
  }
};

export const deleteTask = async (taskId: number): Promise<void> => {
  try{
    tasks.update(currentTasks => {
      const updatedTasks = currentTasks.filter(task => task.id !== taskId);
      localStorage.setItem("@to-do", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  } catch (error){
    console.error('Erro ao remover a tarefa:', error);
  }
};