<script>
	// import '$lib/app.scss';
	import { onMount } from 'svelte';
	import { ThemeContext, setupThemeToggle } from '$lib';

	onMount(() => {
		setupThemeToggle();
	});
</script>

<ThemeContext>
	<slot />
</ThemeContext>
