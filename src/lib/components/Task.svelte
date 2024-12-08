<script lang="ts">
  import Priority from "./Priority.svelte";
  export let title: string;
  export let priority: string;
  export let project: string;
</script>

<div class="flex flex-col p-2 gap-3 bg-neutral rounded-lg">
  <h2 class="font-bold">{title}</h2>
  <div class="flex justify-between items-center">
    <Priority {priority} />
    <span class="text-neutral-blue">{project}</span>
  </div>
</div>
