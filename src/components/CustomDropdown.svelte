<script lang="ts">
  import { goto } from '@roxi/routify';

  import CustomIconButton from './CustomIconButton.svelte';

  let show: boolean = false;

  function handleToggle(e) {
    show = !show;
    e.stopPropagation();
  }

  function handleLogout() {
    $goto('/login');
  }

  // Close on outside click
  window.onclick = function () {
    show = false;
  };
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative inline-block text-left">
  <div>
    <CustomIconButton icon="ellipsis-vertical" on:click={handleToggle} />
  </div>

  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div
    class="
      {show ? '' : 'hidden'}
      origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <button
        on:click={handleLogout}
        class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        role="menuitem"
        tabindex="-1"
        id="menu-item-3"
      >
        Sign out
      </button>
    </div>
  </div>
</div>
