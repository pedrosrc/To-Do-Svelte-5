<script lang="ts">
  import FaClipboardList from 'svelte-icons/fa/FaClipboardList.svelte'
  import FaPlusSquare from 'svelte-icons/fa/FaPlusSquare.svelte'

  import Task from "$lib/components/Task.svelte";
  import { type FormProps } from "$lib";
  import { onMount } from 'svelte';
  import { tasks, getAllTasks } from "$lib/stores/tasksControll";
  import { toggleModal } from "$lib/stores/formControll";
  
  let tasksToDo: FormProps[] = $state([]);

  onMount(() => {
    getAllTasks();
  });

  $effect(() => {
    tasks.subscribe(value => {
      tasksToDo = value.filter(task => task.done === false);
    });
  });
</script>

<div class="bg-neutral-purple rounded-lg flex flex-col justify-start gap-3 w-96 p-4 mt-12 shadow-lg">
  <div class="flex items-center justify-between px-2">
    <div class="flex items-center gap-2">
      <div class="w-4 h-4"><FaClipboardList/></div>
      <h2 class="font-bold">To-Do</h2>
    </div>
    <button aria-label="open modal" onclick={toggleModal} class="w-6 h-6 text-blue-600">
      <FaPlusSquare/>
    </button>
  </div>
  {#each tasksToDo as task }
    <Task id={task.id} title={task.title} priority={task.priority} project={task.project} done={task.done}/>   
  {/each}
</div>