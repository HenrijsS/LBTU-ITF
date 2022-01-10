<script lang="ts">
	import Schedule from "$lib/components/Schedule.svelte";

	let grupa: number = 1;
</script>

<svelte:head>
	<title>ITF - ITIA - Grafiks</title>
</svelte:head>

<h1>ITIA {grupa}. Grupas - Grafiks</h1>

<Schedule kurss="itia" bind:grupa />
