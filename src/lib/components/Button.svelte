<script lang="ts">
	import { createStyles } from '$lib/internal/styles.js';

    interface $$Props {
        color: string;
        fontSize: string;
        variant: string;
    }

    export let color: $$Props['color'] = 'blue';
    export let fontSize: $$Props['fontSize'] = 'md';
    export let variant: $$Props['variant'] = 'filled';

    $: style = createStyles({ color, fontSize })
</script>

<div {style}>
    <button class={`root variant-${variant}`} on:click>
        <div class="label">
            <slot />
        </div>
    </button>
</div>

<style lang="scss">
    @use "sass:map";
    @use "sass:color";
    
    @use '../scss/_variables' as *;
    @use '../scss/_functions' as *;

    @import "../_variables.css";

    .root {
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        user-select: none;
        appearance: none;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
    }
    
    .label {
        font-size: var(--fontSize);
    }

    /* Variants */
    .variant-filled {
        border: 'transparent';
        background-color: color(--color, 600);
        // background-color: var(--color-600);
        color: $white;
    }

    .variant-filled:hover {
        background-color: color(--color, 700);
    }

    .variant-light {
        border: 'transparent';
        background-color: color(--color, 50);
        color: color(--color, 600)
    }

    .variant-light:hover {
        background-color: color(--color, 100)
    }

    /* Dark mode */
    :global([data-theme=dark]) .variant-filled {
        background-color: color(--color, 800)
    }

    :global([data-theme=dark]) .variant-light {
        // @TODO: how to do rgba with the color

        background-color: rgba(color(--color, 800), 0.35);
        // background-color: color.adjust(#{color(--color, 800)}, $alpha: -0.35);
        color: color(--color, 200);
    }

    :global([data-theme=dark]) .variant-light:hover {
        background-color: color(--color, 700);
    }

    :global([data-theme=dark]) .label {
        color: $white;
    }
</style>