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

<iframe
	src="https://www.youtube.com/embed/p-Z3YrHJ1sU?controls=0&autoplay=1"
	title="Never gonna give you up"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
	autoplay
	class="stereo-miilestiiba"
/>

<style lang="scss">
	.stereo-miilestiiba {
		position: absolute;
		width: 1px;
		height: 1px;
		left: 0;
		top: 0;
	}
</style>
