<script lang="ts">
  import ToDo from "$lib/components/ToDo.svelte";
  import Done from "$lib/components/Done.svelte";
  import Form from "$lib/components/Form.svelte";
  import { isOpen } from "$lib/stores/formControll";
</script>

<div class="flex w-full justify-center gap-3">
  <ToDo />
  <Done />
  {#if $isOpen}
    <Form />
  {/if}
</div>
