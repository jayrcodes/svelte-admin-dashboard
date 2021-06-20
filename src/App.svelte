<script lang="ts">
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';

  import to from 'await-to-js';
  import _ from 'lodash';
  import Case from 'case';

  window.$async = to;
  window._ = _;
  window.$case = Case;
</script>

<Router {routes} />

<style global lang="postcss">
  :global(:root) {
    --color-primary: #3498db;
    --color-secondary: #ecc94b;
  }

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body {
    padding: 0;
  }
</style>
