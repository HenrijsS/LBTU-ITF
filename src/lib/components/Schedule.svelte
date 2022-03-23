<script lang="ts">
	import { onMount } from "svelte";
	import IframeComp from "$lib/components/iframeComp.svelte";

	export let kurss: string = "itia";
	export let grupa: number = 1;

	let src: string = "https://google.com";
	let iframe: HTMLIFrameElement;
	let isLoaded: boolean = false;

	$: switch (kurss) {
		case "itia":
			if (grupa == 1) {
				src =
					"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRiga&mode=WEEK&showTz=0&showCalendars=0&showPrint=0&showDate=1&showNav=1&showTitle=0&src=bWVzcGU3M2xuZmNkdDBxZGdqYW5yYjJuczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4";
			} else {
				src =
					"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRiga&mode=WEEK&showTz=0&showCalendars=0&showPrint=0&showDate=1&showNav=1&showTitle=0&src=amh0c2kycjlzOWZoZ3BjMHZibGgwdjV1Y29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E";
			}
			break;
		case "dvdz":
			if (grupa == 1) {
				src =
					"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRiga&mode=WEEK&hl=lv&showTitle=0&showPrint=0&showCalendars=0&showTz=0&src=NWNqaTduc3ZuMXF2aXJmbnJvZGF2aHRvOWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%238E24AA";
			} else {
				src =
					"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRiga&mode=WEEK&hl=lv&showTitle=0&showPrint=0&showCalendars=0&showTz=0&src=NDVsN2dtOTJscnFva3MzM2dibGlwbGZlczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5";
			}
			break;
		case "sesija":
			src =
				"https://calendar.google.com/calendar/embed?src=rvnv6fm328su3k3b1u1t4e6uk4%40group.calendar.google.com&ctz=Europe%2FRiga";
			break;
		case "kontroldarbi":
			src =
				"https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRiga&showTitle=0&showTabs=1&showCalendars=0&mode=WEEK&src=cDJzZXVtczVwdDlncWI2YzZwNWw0cHZmaGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D81B60";
			break;
	}
	onMount(() => {
		iframe.onload = () => (isLoaded = true);
	});

	const changeGroup = (group: number) => {
		if (grupa === group) return;
		grupa = group;
		isLoaded = false;
		iframe.onload = () => {
			isLoaded = true;
		};
	};
</script>

{#if kurss === "itia" || kurss === "dvdz"}
	<div class="groupSelector flex w-full">
		<div on:click={() => changeGroup(1)} class="groupBtn bg-red-500">1. Grupa</div>
		<div on:click={() => changeGroup(2)} class="groupBtn bg-green-500">2. Grupa</div>
	</div>
{/if}

<IframeComp {isLoaded}>
	<iframe bind:this={iframe} {src} frameborder="0" title={kurss} class="w-full h-full flex-1" />
</IframeComp>

<style lang="scss">
	.groupSelector {
		.groupBtn {
			@apply flex flex-1 justify-center items-center cursor-pointer py-2 transition-all duration-200;

			&:hover {
				@apply transform scale-105 shadow-xl;
			}
		}
	}
</style>
