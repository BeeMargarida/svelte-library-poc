<script lang="ts">
	import { Button, toggleTheme } from '$lib';
</script>

<Button color={'white'} on:click={toggleTheme}>
	Switch themes
</Button>

<!-- <Button --color={"var(--primary)"}>Hi!</Button> -->
<Button color={'primary'}>Hi!</Button>
<Button color={'dark300'}>Hi!</Button>
<Button color={'red300'} fontSize="xl">Hi!</Button>
