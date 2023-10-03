<script lang="ts">
	import { Button, toggleTheme } from '$lib';
</script>

<Button on:click={toggleTheme}>
	Switch themes
</Button>

<Button>Hi!</Button>
<Button variant="light">Hi!</Button>
<Button color={'red'} size="xl">Hi!</Button>
<Button compact>Hi!</Button>