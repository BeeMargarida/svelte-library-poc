<script lang="ts">
	import Theming from '$lib/internal/Theming.svelte';

    interface $$Props {
        color?: string;
        fontSize?: string;
    }

    export let color: $$Props['color'] = 'primary';
    export let fontSize: $$Props['fontSize'] = 'md';
</script>

<Theming {color} {fontSize}>
    <button on:click>
        <div class="label">
            <slot />
        </div>
    </button>
</Theming>

<style>
    @import "../_theming.css";
    @import "../_variables.css";

    button {
        background-color: var(--color);
    }
    
    .label {
        font-size: var(--fontSize);
        
    }

    /* @media (prefers-color-scheme: dark) {
        button {
            background-color: var(--dark700);
            color: var(--dark50);
        }
    } */
</style>

<!-- IGNORE BELOW -->

<!-- <div style="display: contents; --color: var(--{color})">
    <button>
        <slot />
    </button>
</div> -->

<!-- <style lang="scss">
    @use '../_variables' as *;

    :global(html) {
        --primary: #ff0000;
        --secondary: #00ff00;
    }

    button {
        background-color: var(--color, '$primary-color');
        // background-color: $primary-color;
    }
</style> -->