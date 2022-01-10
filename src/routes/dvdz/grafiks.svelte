<script lang="ts">
	import Schedule from "$lib/components/Schedule.svelte";

	let grupa: number = 1;
</script>

<svelte:head>
	<title>ITF - DVDZ - Grafiks</title>
</svelte:head>

<h1>DVDZ {grupa}. Grupas - Grafiks</h1>

<Schedule kurss="dvdz" bind:grupa />
