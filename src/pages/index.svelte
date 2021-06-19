<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '@roxi/routify';

  onMount(() => {
    setTimeout(() => {
      $goto('/login');
    }, 1000);
  });
</script>

<div>
  <h1>Loading...</h1>
</div>

<style>
</style>
