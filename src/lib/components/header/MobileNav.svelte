<script lang="ts">
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let navOpened: boolean;
</script>

<div
	id="mobileNav"
	class="md:hidden flex flex-col w-full h-[55px] fixed left-0 bottom-0 shadow-2xl shadow-primary z-30"
	data-sveltekit-prefetch
>
	<ul class="flex justify-around items-center w-full h-full bg-gray-800">
		<li>
			<a href="/">
				<i class="fa-solid fa-house" />
				<span>Sākums</span>
			</a>
		</li>
		<li>
			<a href="/sesija"
				><i class="fa-solid fa-book" />
				<span>Sesija</span>
			</a>
		</li>

		<li class="more-links">
			<div
				class="hamburger relative flex flex-col h-full w-[50px] justify-evenly overflow-hidden cursor-pointer"
				on:click={() => dispatch("openNav")}
				class:navOpened
			>
				<span />
				<span />
				<span />
			</div>
		</li>

		<li>
			<a href="/itia">
				<i class="fa-solid fa-laptop-code" />
				<span>ITIA</span>
			</a>
		</li>
		<li>
			<a href="/dvdz"
				><i class="fa-solid fa-server" />
				<span>DVDZ</span>
			</a>
		</li>
	</ul>
</div>

<style lang="scss">
	#mobileNav {
		li {
			@apply flex h-full flex-1;

			a,
			div {
				@apply w-full h-full flex flex-col justify-center items-center text-primary text-xl cursor-pointer;

				span {
					@apply text-center text-xs font-bold;
				}
			}

			&.more-links {
				@apply flex justify-center items-center w-[64px];

				.hamburger {
					@apply h-[45px] w-[50px] bg-primary rounded-lg;
					@apply text-gray-800 text-2xl;
					span {
						@apply bg-gray-800 w-3/5 h-[5px] rounded-lg absolute left-[20%];
						transition: 0.4s;

						&:first-child {
							top: 10px;
						}

						&:nth-child(2) {
							top: 20px;
						}

						&:nth-child(3) {
							top: 30px;
						}
					}

					&.navOpened {
						span {
							&:first-child {
								transform: rotate(45deg);
								top: 20px;
							}

							&:nth-child(2) {
								transform: translateX(100%);
								opacity: 0;
							}

							&:nth-child(3) {
								transform: rotate(-45deg);
								top: 20px;
							}
						}
					}
				}
			}
		}
	}
</style>
