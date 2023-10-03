<script lang="ts">
	import { createStyles, mapSizeVariable, variantVariables } from '$lib/internal/styles.js';

    interface $$Props {
        color: string;
        size: string;
        radius: string;
        variant: string;
        compact: boolean;
        disabled: boolean;
        loading: boolean;
        fullSize: boolean;
    }

    export let color: $$Props['color'] = 'blue';
    export let size: $$Props['size'] = 'md';
    export let radius: $$Props['radius'] = 'sm';
    export let variant: $$Props['variant'] = 'filled';
    export let compact: $$Props['compact'] = false;
    export let disabled: $$Props['disabled'] = false;
    export let loading: $$Props['loading'] = false;
    export let fullSize: $$Props['fullSize'] = false;

    $: properties = [
        ...variantVariables(variant, color),
        `--height: ${mapSizeVariable(size, compact ? 'height-compact': 'height')}`,
        `--padding-x: ${mapSizeVariable(size, compact ? 'padding-x-compact': 'padding-x')}`,
        `--fontSize: ${mapSizeVariable(size, 'fontSize')}`,
        `--radius: ${mapSizeVariable(radius, 'radius')}`,
        `--width: ${fullSize ? '100%' : 'fit-content'}` 
    ]

    // $: style = createStyles({ color, size, variant });
    $: style = properties.join(';');
</script>

<div {style}>
    <button class={`root variant-${variant}`} class:loading class:compact on:click {disabled}>
        <div class="label">
            <slot />
        </div>
    </button>
</div>

<style>
    @import "$lib/index.css";

    * {
        /* @TODO: use rem */
        --height-xs: 30px;
        --height-sm: 36px;
        --height-md: 42px;
        --height-lg: 50px;
        --height-xl: 60px;

        --height-compact-xs: 22px;
        --height-compact-sm: 26px;
        --height-compact-md: 30px;
        --height-compact-lg: 34px;
        --height-compact-xl: 40px;

        --padding-x-xs: 14px;
        --padding-x-sm: 18px;
        --padding-x-md: 22px;
        --padding-x-lg: 26px;
        --padding-x-xl: 32px;

        --padding-x-compact-xs: 7px;
        --padding-x-compact-sm: 8px;
        --padding-x-compact-md: 10px;
        --padding-x-compact-lg: 12px;
        --padding-x-compact-xl: 14px;
    }
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
        background-color: var(--variant-background);
        color: var(--variant-color);
        border: var(--variant-border);
        border-radius: var(--radius);
        padding: 0px var(--padding-x);
        height: var(--height);
        font-family: var(--fontFamily-standard);
        font-weight: var(--fontWeight-bold);
        font-size: var(--fontSize);
        line-height: 1;
        flex-grow: 0;
        width: var(--width);
    }

    .root:hover {
        background-color: var(--variant-hover);
    }

    .root:disabled {
        pointer-events: 'none';
        border-color: 'transparent';
        background-color: var(--gray200);
        color: var(--gray500);
        cursor: 'not-allowed';
    }

    .root:active {
        transform: 'translateY(1px)'
    }

    .root.loading {
        pointer-events: none;
    }

    .root.loading::before {
        content: '""';
        position: absolute;
        inset: -1;
        background-color: var(--white05);
        border-radius: var(--radius);
        cursor: 'not-allowed';
    }

    .label {
        font-size: var(--fontSize);
    }

</style>

<!--
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
-->