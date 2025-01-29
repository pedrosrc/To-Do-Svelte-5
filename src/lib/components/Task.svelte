<script lang="ts">
  import FaCheckDouble from 'svelte-icons/fa/FaCheckDouble.svelte'
  import FaList from 'svelte-icons/fa/FaList.svelte'
  import FaWindowClose from 'svelte-icons/fa/FaWindowClose.svelte'

  import { deleteTask, setDoneTask } from "$lib/stores/tasksControll";
  import { selectedTask } from "$lib/stores/formControll";
  import { toggleModal } from "$lib/stores/formControll";

  import Priority from "./Priority.svelte";
  import { type FormProps } from "$lib";

  let expanded = $state(false);
  
  let {id, title, priority, project, done}: FormProps = $props();

  function toggleOptions() {
    expanded = !expanded;
  }

  function editTask() {
    selectedTask.set({ id, title, priority, project, done });
    toggleModal(); 
    toggleOptions();
  }
</script>

<div class="flex flex-row justify-between p-4 bg-neutral rounded-lg">
  <div class="flex flex-col gap-2">
    <div class="flex flex-col">
      <h2 class="font-bold text-lg">{title}</h2>
      <span class="text-neutral-blue">{project}</span>
    </div>
    <Priority {priority} />
  </div>

  <div class="flex flex-col justify-between">
    <div class="flex relative">
      {#if expanded}
        <div class="flex justify-between w-36 absolute -right-1 -top-2 gap-2 bg-white p-2 rounded-lg">
          <div class="flex flex-col items-start">
            <button onclick={editTask}>Edit</button>
            <button onclick={async () => await deleteTask(id)}>Delete</button>
          </div>
          <button onclick={toggleOptions} class="w-4 h-4" aria-label="options">
            <FaWindowClose />
          </button>
        </div>
      {/if}

      <button onclick={toggleOptions} class="w-4 h-4" aria-label="options">
        <FaList />
      </button>
    </div>
    <button onclick={async () => await setDoneTask(id)} aria-label="done" class="w-4 h-4 {done ? "rounded-full text-blue-600" : ""}">
      <FaCheckDouble />
    </button>
  </div>
  
</div>
