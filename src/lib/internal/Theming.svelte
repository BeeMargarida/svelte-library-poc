<script lang="ts">
    interface $$Props {
        color?: string;
        size?: string;
        fontSize?: string;
        fontFamily?: string;
        lineHeight?: string;
    }

    export let color: $$Props['color'];
    export let size: $$Props['size'];
    export let fontSize: $$Props['fontSize'];
    export let fontFamily: $$Props['fontFamily'];
    export let lineHeight: $$Props['lineHeight'];

    // @TODO: should also support base values, not only variables
    // @TODO: how to apply variants?
    // @TODO: how to change color shades with changes of theme
    $: styleArray = [
        'display: contents',
        `--color: var(--${color})`,
        `--size: var(--size-${size})`,
        `--fontSize: var(--fontSize-${fontSize})`,
        `--fontFamily: var(--fontFamily-${fontFamily})`,
        `--lineHeight: var(--lineHeight-${lineHeight})`,
    ]
    $: styleString = styleArray.join(';');
</script>

<div style={styleString}>
    <slot />
</div>