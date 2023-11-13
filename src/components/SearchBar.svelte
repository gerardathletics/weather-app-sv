<!-- SearchBar.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let city = '';

    function search() {
        dispatch('search', city);
    }
</script>

<input bind:value={city} type="text" placeholder="Enter city name" />
<button on:click={search}>Search</button>

<style>
    input {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        margin-right: 10px;
    }

    button {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        background: #46be3e;
        color: #fff;
        cursor: pointer;
    }

    button:hover {
        background: #a6cca3;
    }
</style>
