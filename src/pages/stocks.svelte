<script lang="ts">
  import type { Post } from '../models/Post';
  import api from '../services/api';
  import CustomSidebar from '../components/CustomSidebar.svelte';
  import { onMount } from 'svelte';

  let posts: Post[] = [];
  let loading = false;

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
  <p class="text-xl mb-4">Stocks</p>

  {#if loading}
    <h1>loading...</h1>
  {/if}

  {#each posts as post}
    <div class="bg-white shadow-xl rounded p-4 mb-4">
      <h1>{post.title}</h1>
      <pre>{post.body}</pre>
    </div>
  {/each}
</CustomSidebar>

<style>
</style>
