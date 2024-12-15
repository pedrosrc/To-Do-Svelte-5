<script lang="ts">
  import Priority from "./Priority.svelte";
  import { type TaskProps } from "$lib";
 
  let {title, priority, project}: TaskProps = $props();
</script>

<div class="flex flex-col p-2 gap-3 bg-neutral rounded-lg">
  <div class="flex justify-between">
    <h2 class="font-bold">{title}</h2>
    <div class="flex gap-2">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-regular fa-circle-check"></i>
    </div>
  </div>
  
  <div class="flex justify-between items-center">
    <Priority {priority} />
    <span class="text-neutral-blue">{project}</span>
  </div>
</div>
