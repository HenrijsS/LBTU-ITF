<script lang="ts">
	import { onMount } from "svelte";
	import IframeComp from "$lib/components/iframeComp.svelte";

	let src: string =
		"https://calendar.google.com/calendar/embed?src=rvnv6fm328su3k3b1u1t4e6uk4%40group.calendar.google.com&ctz=Europe%2FRiga";
	let iframe: HTMLIFrameElement;
	let isLoaded: boolean = false;

	onMount(() => {
		iframe.onload = () => (isLoaded = true);
	});
</script>

<h1>Sesijas grafiks</h1>

<!-- svelte-ignore a11y-missing-attribute -->
<IframeComp {isLoaded}>
	<iframe bind:this={iframe} {src} frameborder="0" class="w-full h-full flex-1" />
</IframeComp>
