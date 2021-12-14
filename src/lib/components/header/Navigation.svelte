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
			<li class:active={$page.path === "/sesija"}>
				<a sveltekit:prefetch href="/sesija">Sesija</a>
			</li>
			<li class:active={$page.path === "/itia"}>
				<a sveltekit:prefetch href="/itia">ITIA</a>
				<ul class="dropdown">
					<li class:active={$page.path === "/itia/grafiks"}>
						<a sveltekit:prefetch href="/itia/grafiks">Grafiks</a>
					</li>
				</ul>
			</li>
			<li class:active={$page.path === "/dvdz"}>
				<a sveltekit:prefetch href="/dvdz">DVDZ</a>
			</li>
			<li class:active={$page.path === "/citi-linki"}>
				<a sveltekit:prefetch href="/citi-linki">Citi linki</a>
			</li>
			<li class:active={$page.path === "/apraksts"}>
				<a sveltekit:prefetch href="/apraksts">Apraksts</a>
			</li>
		</ul>
	</nav>

	<a href="/" class="opacity-0">
		<img src={logo} alt="SvelteKit" class="h-[50px]" />
	</a>
</header>

<style lang="scss">
	nav {
		@apply flex flex-1 h-full justify-center items-center;

		ul {
			@apply flex h-full;

			&>li {
				@apply mx-2 relative h-full flex items-center justify-center;

				a {
					@apply text-xl transition-colors;
				}

				&.active,
				&:hover {
					&>a {
						color: var(--accent-hover);
					}

					&>ul.dropdown {
						transform: scaleY(1);
					}
				}

				& > ul.dropdown {
					@apply absolute top-[100%] z-10 bg-white shadow-2xl rounded-b-xl;
					transform: scaleY(0);
					transform-origin: top;
					transition: 0.4s;
				}
			}
		}
	}
</style>
