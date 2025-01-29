<script lang="ts">
  import FaCheckDouble from 'svelte-icons/fa/FaCheckDouble.svelte'
  import Task from "./Task.svelte";
  import { type FormProps } from "$lib";
  import { onMount } from 'svelte';
  import { tasks, getAllTasks } from "$lib/stores/tasksControll";
  
  let tasksDone: FormProps[] = $state([]);

  onMount(() => {
    getAllTasks();
  });

  $effect(() => {
    tasks.subscribe(value => {
      tasksDone = value.filter(task => task.done === true);
    });
  });
 
</script>
<div class="bg-neutral-purple rounded-lg flex flex-col justify-start gap-3 w-96 p-4 mt-12 shadow-lg">
  <div class="flex items-center gap-2">
    <div class="w-4 h-4"><FaCheckDouble /></div>
    <h2 class="font-bold">Done</h2>
  </div>

  {#if tasksDone.length === 0}
    <p class="text-neutral-blue">No tasks done yet</p>
  {:else}
    {#each tasksDone as task }
      <Task id={task.id} title={task.title} priority={task.priority} project={task.project} done={task.done}/>   
    {/each}
  {/if}
</div>
