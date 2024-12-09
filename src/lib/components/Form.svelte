<script lang="ts">

	interface Props {
		title: string, 
		priority: string;
		project: string;
	}

	let data: Props = { 
		title: '', 
		priority: '',
		project: '',
	};
	
	const values:  { label: string, value: string }[] = [
		{ label: 'Low', value: 'low' },
		{ label: 'Mid', value: 'mid' },
		{ label: 'High', value: 'high' }
	];
	let selected = values[1];

</script>

<form method="POST" class="flex flex-col p-4 gap-3 bg-neutral rounded-lg">
	<label class="flex items-center gap-2 text-lg font-medium text-gray-900">
		Task:
		<input name="task" type="text" value={data.title} class="text-blac shadow-md rounded-full border-none outline-none bg-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
	</label>
	<label class="flex items-center gap-2 text-lg font-medium text-gray-900">
		Priority:
		{#each values as value}
			<input
				type="radio"
				bind:group={selected}
				class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border bg-white border-red-600 checked:border-red-600 transition-all"
				name="priority"
				value={data.priority}
			> {value.label}
		{/each}
	</label>
	<label class="flex items-center gap-2 text-lg font-medium text-gray-900">
		Project:
		<input name="project" type="text" value={data.project}  class="text-blac shadow-md rounded-full border-none outline-none bg-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
	</label>
	<button type="submit">Create</button>
</form>