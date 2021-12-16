<script lang="ts">
	import { page } from "$app/stores";
	import logo from "./itf_logo.svg";

	let navOpened: boolean = false;
</script>

<header class="flex w-full shadow-lg h-[50px] dark:bg-gray-800">
	<a href="/">
		<img src={logo} alt="SvelteKit" class="h-[50px]" />
	</a>

	<nav>
		<ul class="flex" class:navOpened>
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
				<ul class="dropdown">
					<li class:active={$page.path === "/dvdz/grafiks"}>
						<a sveltekit:prefetch href="/dvdz/grafiks">Grafiks</a>
					</li>
				</ul>
			</li>
			<li class:active={$page.path === "/citi-linki"}>
				<a sveltekit:prefetch href="/citi-linki">Citi linki</a>
			</li>
			<li class:active={$page.path === "/apraksts"}>
				<a sveltekit:prefetch href="/apraksts">Apraksts</a>
			</li>
		</ul>
	</nav>

	<div
		class="hamburger relative flex flex-col h-full w-[50px] justify-evenly overflow-hidden cursor-pointer"
		on:click={() => (window.innerWidth <= 768 ? (navOpened = !navOpened) : "")}
		class:navOpened
	>
		<span />
		<span />
		<span />
	</div>
</header>

<style lang="scss">
	nav {
		@apply flex flex-1 h-full justify-center items-center;

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

	.hamburger {
		opacity: 0;
		user-select: none;

		@media (max-width: 768px) {
			opacity: 1;
			user-select: unset;
		}

		span {
			width: 80%;
			height: 3px;
			background-color: var(--primary-color);
			border-radius: 25px;
			position: absolute;
			left: 10%;
			transition: 0.4s;

			&:first-child {
				top: 10px;
			}

			&:nth-child(2) {
				top: 23px;
			}

			&:nth-child(3) {
				top: 36px;
			}
		}

		&.navOpened {
			span {
				&:first-child {
					transform: rotate(45deg);
					top: 23px;
				}

				&:nth-child(2) {
					transform: translateX(100%);
					opacity: 0;
				}

				&:nth-child(3) {
					transform: rotate(-45deg);
					top: 23px;
				}
			}
		}
	}

	@media (max-width: 768px) {
		nav > ul {
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
</style>
