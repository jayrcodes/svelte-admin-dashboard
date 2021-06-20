<script lang="ts">
  import CustomIconButton from './CustomIconButton.svelte';

  export let columns: any[];
  export let items: any[];
  export let sortColumn: string;
  export let sortDirection: string;

  function handleSort(column) {
    sortColumn = column;

    if (sortDirection === null) {
      sortDirection = 'asc';
      return;
    }

    let direction = {
      asc: 'desc',
      desc: null,
    };

    sortDirection = direction[sortDirection];

    if (sortDirection === null) {
      sortColumn = null;
    }
  }
</script>

<div class="p-2 rounded shadow-md bg-white">
  <table>
    <thead>
      <tr>
        {#each columns as column}
          <th>
            <div
              class="flex items-center p-2"
              on:click={() => handleSort(column)}
            >
              <p class="mr-4 capitalize">{column}</p>
              {#if column === sortColumn && sortDirection !== null}
                <div class={'column--' + sortDirection}>
                  <CustomIconButton icon="chevron-up" size="0.8rem" />
                </div>
              {/if}
            </div>
          </th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each items as item}
        <tr>
          {#each columns as column}
            <td>{item[column]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  .column {
    &--desc {
      transform: rotate(180deg);
    }
  }
  table {
    tr {
      th {
        cursor: pointer;
        user-select: none;
        text-align: left;

        div * {
          pointer-events: none; // prevent child from being clicked
        }
      }
    }
  }
</style>
