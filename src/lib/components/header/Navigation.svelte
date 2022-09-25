<script lang="ts">
	import { page } from "$app/stores";

	import MobileNav from "./MobileNav.svelte";
	import logo from "./itf_logo.svg";

	let navOpened: boolean = false;
	let hideNav = false;
	let pageLog: string = $page.url.pathname;

	$: if (pageLog !== $page.url.pathname) {
		pageLog = $page.url.pathname;
		navOpened = false;
	}
</script>

<header class="flex w-full shadow-lg h-[50px] bg-gray-800 sticky z-20 top-0" class:hideNav>
	<a href="/">
		<img src={logo} alt="SvelteKit" class="h-[50px]" height="50" />
	</a>
	<nav data-sveltekit-prefetch>
		<ul class="flex" class:navOpened>
			<li class:active={$page.url.pathname === "/"}>
				<a href="/"> Sākums </a>
			</li>
			<li class:active={$page.url.pathname.includes("/itia")}>
				<a href="/itia">ITIA</a>
				<!-- <ul class="dropdown">
					<li class:active={$page.url.pathname === "/itia/grafiks"}>
						<a href="/itia/grafiks">Grafiks</a>
					</li>
				</ul> -->
			</li>
			<li class:active={$page.url.pathname.includes("/dvdz")}>
				<a href="/dvdz">DVDZ</a>
				<ul class="dropdown">
					<li class:active={$page.url.pathname === "/dvdz/grafiks"}>
						<a href="/dvdz/grafiks">Grafiks</a>
					</li>
				</ul>
			</li>
			<li class:active={$page.url.pathname === "/citi-linki"}>
				<a href="/citi-linki">Citi linki</a>
			</li>
			<li class:active={$page.url.pathname === "/privatuma-politika"}>
				<a href="/privatuma-politika">Privātuma politika</a>
			</li>
		</ul>
	</nav>

	<span class="md:hidden text-gray-800 dark:text-white font-bold m-auto">LBTU-ITF-2</span>

	<div class="h-[50px] w-[50px]" />
</header>

<MobileNav on:openNav={() => (navOpened = !navOpened)} {navOpened} />

<style lang="scss">
	header.hideNav {
		height: 0;

		& > a {
			display: none;
		}
	}

	nav {
		@apply flex flex-1 h-full justify-center items-center z-10;

		ul {
			@apply flex h-full;

			& > li {
				@apply mx-2 relative h-full flex flex-col items-center justify-center;

				a {
					@apply text-xl transition-colors;
				}

				&.active,
				&:hover {
					& > a {
						color: var(--accent-hover);
					}
				}

				&:hover {
					& > ul.dropdown {
						transform: scaleY(1);
					}
				}

				& > ul.dropdown {
					@apply absolute top-[100%] z-10 bg-white dark:bg-gray-800 shadow-2xl rounded-b-xl;
					transform: scaleY(0);
					transform-origin: top;
					transition: 0.2s;

					@media (max-width: 768px) {
						@apply dark:bg-gray-700 h-auto;
					}
				}
			}
		}
	}

	@media (max-width: 768px) {
		nav {
			flex: 0;

			& > ul {
				@apply absolute top-[50px] pt-10 left-0 w-full h-auto bg-gray-800 z-10 flex-col justify-start;
				min-height: calc(100vh - 50px);
				transform: translateX(-100%);
				transition: 0.4s;

				&.navOpened {
					transform: translateX(0);
				}

				li {
					@apply h-auto my-5;

					a {
						@apply text-2xl;
					}
				}
			}
		}

		header.hideNav {
			nav > ul {
				@apply top-0;
			}
		}
	}
</style>
