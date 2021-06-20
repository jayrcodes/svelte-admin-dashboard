<script lang="ts">
  export let icon: string;
  export let size: string = '1.2rem';
  $: style = 'font-size: ' + size;
</script>

<button
  on:click
  on:blur
  class="cursor-pointer flex items-center focus:outline-none"
>
  <ion-icon name={icon} {style} />
</button>

<style lang="scss">
</style>
