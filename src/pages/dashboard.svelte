<script lang="ts">
  import api from '../services/api';
  import { onMount } from 'svelte';
  import CustomTable from '../components/CustomTable.svelte';
  import CustomSidebar from '../components/CustomSidebar.svelte';
  import type { Post } from '../models/Post';

  let posts: Post[] = [];
  let loading = false;
  let columns = ['id', 'title', 'body'];
  let sortColumn = null;
  let sortDirection = null;

  async function getList() {
    loading = true;
    let [err, res] = await window.$async(api.get('/posts'));
    posts = res?.data;
    loading = false;
  }

  onMount(() => {
    getList();
  });
</script>

<CustomSidebar>
  <p class="text-xl mb-4 text-primary">Dashboard</p>

  {#if loading}
    <h1>loading...</h1>
  {:else}
    <CustomTable items={posts} {columns} {sortColumn} {sortDirection} />
  {/if}
</CustomSidebar>

<style lang="scss">
</style>
