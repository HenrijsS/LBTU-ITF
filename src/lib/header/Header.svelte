<script lang="ts">
	import { page } from "$app/stores";
	import logo from "./itf_logo.svg";
</script>

<header class="flex w-full shadow-lg h-[50px]">
	<a href="/">
		<img src={logo} alt="SvelteKit" class="h-[50px]" />
	</a>

	<nav>
		<ul class="flex">
			<li class:active={$page.path === "/"}>
				<a sveltekit:prefetch href="/"> Sākums </a>
			</li>
			<li class:active={$page.path === "/Apraksts"}>
				<a sveltekit:prefetch href="/sesija">Sesija</a>
			</li>
			<li class:active={$page.path === "/Apraksts"}>
				<a sveltekit:prefetch href="/itia">ITIA</a>
			</li>
			<li class:active={$page.path === "/Apraksts"}>
				<a sveltekit:prefetch href="/dvdz">DVDZ</a>
			</li>
			<li class:active={$page.path === "/citi-linki"}>
				<a sveltekit:prefetch href="/citi-linki">Citi linki</a>
			</li>
			<li class:active={$page.path === "/Apraksts"}>
				<a sveltekit:prefetch href="/Apraksts">Apraksts</a>
			</li>
		</ul>
	</nav>

	<a href="/" class="opacity-0">
		<img src={logo} alt="SvelteKit" class="h-[50px]" />
	</a>
</header>

<style lang="scss">
	nav {
		@apply flex flex-1 justify-center items-center;

		ul {
			@apply flex;

			li {
				@apply mx-2;

				a {
					@apply text-xl;
				}
			}
		}
	}
</style>
