<div><slot /></div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: darkgrey;
        display: grid;
        place-content: center;
        min-height: 100vh;
    }

    div {
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
</style>
