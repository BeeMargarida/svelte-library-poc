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
