<script lang="ts">
  import Task from "$lib/components/Task.svelte";
  import Done from "$lib/components/Done.svelte";
  import Form from "$lib/components/Form.svelte";
  import { type Props } from "$lib";
  import { getAllTasks } from "$lib/stores/tasksControll";
  import { onMount } from "svelte";
  let tasks: Props[] = []

  onMount(()=>{
    (async () => {
      const response = await getAllTasks();
      tasks = response ?? [];
    })()
  })

</script>

<div class="flex w-full justify-center gap-3">
  <div class="bg-neutral-purple rounded-lg flex flex-col justify-start gap-3 w-96 p-4 mt-12 shadow-lg">
    <div>
      <Form/>
    </div>
    <div class="flex items-center gap-2">
      <i class="fa-regular fa-clipboard"></i>
      <h2 class="font-bold">To-Do</h2>
    </div>
    {#each tasks as task }
      <Task title={task.title} priority={task.priority} project={task.project}/>   
    {/each}
    
  </div>
  <Done />
</div>
