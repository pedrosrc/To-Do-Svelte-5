<script>
  import Task from "$lib/components/Task.svelte";
  import Done from "$lib/components/Done.svelte";
</script>

<div class="flex w-full justify-center gap-3">
  <div class="bg-neutral-purple rounded-lg flex flex-col justify-start gap-3 w-96 p-4 mt-12 shadow-lg">
    <h2 class="font-bold">To-Do</h2>
    <Task title={'Hello World'} priority={'mid'} project={'Real'}/>
  </div>
  <Done />
</div>
