<script lang="ts">
  import { isActive, url } from '@roxi/routify';
  import CustomIconButton from '../components/CustomIconButton.svelte';
  import CustomDropdown from './CustomDropdown.svelte';

  let showSidebar: boolean = true;
  const links = [
    ['./dashboard', 'Dashboard'],
    ['./products', 'Products'],
    ['./stocks', 'Stocks'],
  ];

  function handleSidebarToggle() {
    showSidebar = !showSidebar;
  }
</script>

<div class="bg-gray-100 flex">
  <div
    class="sidebar {showSidebar ? '' : 'sidebar--hidden'} shadow-md bg-white"
  >
    <div class="company-logo flex justify-center">
      <img src="https://logodix.com/logo/2004164.png" alt="Company Logo" />
    </div>
    <div class="flex flex-col">
      {#each links as [path, name]}
        <a
          href={$url(path)}
          class:active={$isActive(path)}
          class="sidebar-item p-4 cursor-pointer"
        >
          {name}
        </a>
      {/each}
    </div>
  </div>
  <div class="flex-1">
    <nav
      class="top-nav 
      {showSidebar ? '' : 'top-nav--stretch'} 
        bg-white flex items-center p-4 shadow-md justify-between"
    >
      <CustomIconButton icon="menu-sharp" on:click={handleSidebarToggle} />
      <CustomDropdown />
    </nav>
    <div
      class="content 
      {showSidebar ? '' : 'content--stretch'} 
      p-4"
    >
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  $top-nav-height: 56px;
  $sidebar-width: 300px;
  $transition-duration: 0.3s;
  $primary: #3498db;

  .sidebar {
    position: fixed;
    z-index: 2;
    width: $sidebar-width;
    height: 100vh;
    margin-left: 0;
    transition: margin-left $transition-duration;

    &--hidden {
      margin-left: -$sidebar-width;
    }

    &-item.active {
      background: $primary;
      color: #fff;
    }
  }
  .top-nav {
    height: $top-nav-height;
    position: fixed;
    z-index: 1;
    right: 0;
    left: $sidebar-width;
    transition: left $transition-duration;

    &--stretch {
      left: 0;
    }
  }
  .content {
    margin-top: $top-nav-height;
    height: calc(100vh - #{$top-nav-height});
    overflow-y: auto;
    margin-left: $sidebar-width;
    transition: margin-left $transition-duration;

    &--stretch {
      margin-left: 0;
    }
  }
  .company-logo {
    img {
      height: 170px;
    }
  }
</style>
