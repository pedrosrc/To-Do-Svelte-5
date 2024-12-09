<script>
  import Task from "./Task.svelte";
</script>
<div class="bg-neutral-purple rounded-lg flex flex-col justify-start gap-3 w-96 p-4 mt-12 shadow-lg">
  <div class="flex items-center gap-2">
    <i class="fa-solid fa-check-double"></i>
    <h2 class="font-bold">Done</h2>
  </div>
  <Task title={"Hello World"} priority={"mid"} project={"Real"} />
</div>
