<script lang="ts">
    import { setContext } from "svelte";
    import { theme, toggleTheme } from "./theme.js";
    
    setContext('theme', {
        theme: theme,
        toggle: toggleTheme
    });
</script>

<div>
    <slot />
</div>

<style lang="scss">
    @use "../scss/_variables" as *;

    :root {
        background-color: $white;
        color: $black;
    }

    :root[data-theme=dark] {
        background-color: $dark700;
        color: $dark50;
    }

    // @media (prefers-color-scheme: dark) {
    //     :root {
    //         background-color: $dark700;
    //         color: $dark50;
    //     }
    // }
</style>