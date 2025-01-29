<script lang="ts">
	import { onDestroy } from "svelte";
  import { type FormProps } from "$lib";
	import { toggleModal } from "$lib/stores/formControll";
	import { selectedTask } from "$lib/stores/formControll";
	import FaWindowClose from 'svelte-icons/fa/FaWindowClose.svelte'
	
  import { updateTask, createTask } from "$lib/stores/tasksControll";

	let data: FormProps = { 
		id: 0,
		title: '', 
		priority: '',
		project: '',
		done: false
	};

	const unsubscribe = selectedTask.subscribe((value) => {
    if (value) {
      data = { ...value }; 
    }
  });

  onDestroy(() => {
    unsubscribe(); 
  });

	$: isEditing = data.id !== 0;

	function handleSubmit(event: Event) {
		event.preventDefault(); 

		if (isEditing) {
      updateTask(data);
    } else {
      createTask(data);
    }
		
		resetForm();
		toggleModal();
	}

	function resetForm() {
    data = { 
      id: 0,
      title: '', 
      priority: '',
      project: '',
      done: false
    };
		selectedTask.set(null);
  }
	
	const values:  { label: string, value: string }[] = [
		{ label: 'Low', value: 'low' },
		{ label: 'Mid', value: 'mid' },
		{ label: 'High', value: 'high' }
	];
	
</script>
<div class="h-full w-full bg-black bg-opacity-50 fixed top-0 left-0 z-50">
	<form onsubmit={handleSubmit} class="flex flex-col p-4 gap-3 bg-neutral rounded-lg w-96 relative shadow-lg m-auto mt-12">
		<h1 class="text-center font-bold text-gray-900">{isEditing ? "Edit Task" : "Create Task"}</h1>
		<button onclick={toggleModal} aria-label="close modal" class="w-6 h-6 absolute top-4 right-4"><FaWindowClose /></button>
		<label class="flex items-center gap-2 text-lg font-medium text-gray-900">
			Task:
			<input name="task" type="text"  bind:value={data.title} class="text-blac shadow-md rounded-full border-none outline-none bg-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
		</label>
		<label class="flex items-center gap-2 text-lg font-medium text-gray-900">
			Priority:
			{#each values as value}
				<input
					type="radio"
					class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border bg-white transition-all"
					name="priority"
					value={value.value}
					bind:group={data.priority}
				> {value.label}
			{/each}
		</label>
		<label class="flex items-center gap-2 text-lg font-medium text-gray-900">
			Project:
			<input name="project" type="text" bind:value={data.project}  class="text-blac shadow-md rounded-full border-none outline-none bg-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
		</label>
		<button class="bg-dark-blue rounded-full p-2 text-center text-white" type="submit">{isEditing ? "Save" : "Create"}</button>
	</form>
</div>

