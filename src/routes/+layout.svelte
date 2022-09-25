<script lang="ts">
	import { page } from "$app/stores";

	import Header from "$lib/components/header/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "../app.scss";
</script>

<Header />

<main
	style="background-image: URL('{$page.url.pathname === '/' ? 'index-bg.jpg' : ''}')"
	class="flex flex-col flex-1 bg-cover bg-center overflow-x-hidden"
	class:relative={$page.url.pathname === "/"}
>
	{#if $page.url.pathname === "/"}
		<div class="absolute top-0 left-0 w-full h-full z-0 bg-black bg-opacity-70" />
	{/if}
	<div class="z-[1] flex-1 flex flex-col">
		<slot />
	</div>
</main>
<Footer />
