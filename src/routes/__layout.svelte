<script lang="ts">
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/env";

	import Header from "$lib/components/header/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "../app.scss";

	if (browser) {
		let doesWorship = window.localStorage.getItem("isGa4aDievs");
		if (!doesWorship) {
			let worWho = prompt("Zemāk ievadi paroli (1000000x reizes atkārtota):");
			worWho !== "ga4adievs" ? goto("https://itf.llu.lv") : window.localStorage.setItem("isGa4aDievs", "true");
		}
	}
</script>

<Header />

<!-- <main
	style="background-image: URL('{$page.url.pathname === '/' ? 'index-bg.jpg' : ''}')"
	class:relative={$page.url.pathname === "/"}
>
	{#if $page.url.pathname === "/"}
		<div class="overlay" />
	{/if} -->
<main>
	<div class="z-[1] flex-1 flex flex-col">
		<slot />
	</div>
</main>

<Footer />

<style lang="scss">
	main {
		@apply flex flex-col flex-1 bg-cover bg-center overflow-x-hidden;

		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 0;
		}
	}
</style>
