<script lang="ts">
	import { onMount } from "svelte";
	import IframeComp from "$lib/components/iframeComp.svelte";

	let src: string =
		"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRiga&mode=AGENDA&showPrint=0&showTitle=0&hl=lv&src=cnZudjZmbTMyOHN1M2szYjF1MXQ0ZTZ1azRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%238E24AA";
	let iframe: HTMLIFrameElement;
	let isLoaded: boolean = false;

	onMount(() => {
		iframe.onload = () => (isLoaded = true);
	});
</script>

<svelte:head>
	<title>Sesijas grafiks</title>
</svelte:head>

<h1>Sesijas grafiks</h1>

<!-- svelte-ignore a11y-missing-attribute -->
<IframeComp {isLoaded}>
	<iframe bind:this={iframe} {src} frameborder="0" class="w-full h-full flex-1" />
</IframeComp>
