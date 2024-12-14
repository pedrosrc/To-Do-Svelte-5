<script lang="ts">
  import { type Props } from "$lib";
  import { createTask } from "$lib/stores/tasksControll";

	let data: Props = { 
    id: 0,
		title: '', 
		priority: '',
		project: '',
		done: false
	};

  function handleSubmit() {
    createTask(data)
  }
	
	const values:  { label: string, value: string }[] = [
		{ label: 'Low', value: 'low' },
		{ label: 'Mid', value: 'mid' },
		{ label: 'High', value: 'high' }
	];
</script>

<form on:submit={handleSubmit} class="flex flex-col p-4 gap-3 bg-neutral rounded-lg">
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
	<button class="bg-dark-blue rounded-full p-2 text-center text-white" type="submit">Create</button>
</form>