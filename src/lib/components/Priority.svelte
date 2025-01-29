<script lang="ts">
  let { priority }= $props();

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
      class={`w-4 h-4 rounded-full ${getDotClasses(index)}`}
    ></div>
  {/each}
</div>