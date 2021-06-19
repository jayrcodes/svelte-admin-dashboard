<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
</script>

<Router {routes} />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    padding: 0;
  }
</style>
