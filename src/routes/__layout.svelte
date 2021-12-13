<script lang="ts">
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { browser } from "$app/env";
	import Header from "$lib/header/Navigation.svelte";
	import "../app.scss";

	if (browser) {
		let doesWorship = window.localStorage.getItem("isGa4aDievs");
		if (!doesWorship) {
			let worWho = prompt("Kas ir tavs tētuks?");
			worWho !== "ga4adievs" ? goto("https://itf.llu.lv") : window.localStorage.setItem("isGa4aDievs", "true");
		}
	}
</script>

<Header />

<main style="background-image: URL('{$page.path === '/' ? 'index-bg.jpg' : ''}')" class:relative={$page.path === "/"}>
	{#if $page.path === "/"}
		<div class="overlay" />
	{/if}
	<div class="z-[1] flex-1 flex flex-col">
		<slot />
	</div>
</main>

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
