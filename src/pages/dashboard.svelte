<script lang="ts">
  import { onMount } from 'svelte';
  import type { Post } from '../models/Post';
  import api from '../services/api';

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

<div class="bg-gray-200">
  <h1>Dashboard</h1>

  {#if loading}
    <h1>loading...</h1>
  {/if}

  {#each posts as post}
    <div class="bg-white shadow-xl m-4 rounded p-4">
      <h1>{post.title}</h1>
      <pre>{post.body}</pre>
    </div>
  {/each}
</div>

<style lang="scss">
</style>
