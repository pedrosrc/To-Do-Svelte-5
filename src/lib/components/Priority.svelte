<script lang="ts">
  import { type TaskProps } from "$lib";
  
  let { priority }: TaskProps = $props();

  const getDotClasses = (index: number) => {
    if (priority === "low" && index === 0) return "bg-neutral-blue";
    if (priority === "mid" && index <= 1) return "bg-neutral-yellow";
    if (priority === "high") return "bg-neutral-red";
    return "bg-gray-300";
  }

</script>
<div class="flex gap-2">
  {#each Array(3) as _, index}
    <div
      class={`w-6 h-6 rounded-full ${getDotClasses(index)}`}
    ></div>
  {/each}
</div>