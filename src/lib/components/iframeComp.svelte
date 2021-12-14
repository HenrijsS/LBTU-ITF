<script lang="ts">
	import { fade } from "svelte/transition";

	export let isLoaded: boolean = false;
</script>

<div class="relative w-full flex flex-1 flex-col min-h-[500px]">
	{#if !isLoaded}
		<div
			transition:fade
			class="loader absolute left-0 top-0 w-full h-full z-[2] bg-black opacity-60 flex items-center justify-center"
		>
			<div class="loadingSpinner" />
		</div>
	{/if}
	<slot class="z-[1]" />
</div>

<style lang="scss">
	.loadingSpinner,
	.loadingSpinner:before,
	.loadingSpinner:after {
		background: #ffffff;
		-webkit-animation: spinnerAnimation 1s infinite ease-in-out;
		animation: spinnerAnimation 1s infinite ease-in-out;
		width: 1em;
		height: 4em;
	}
	.loadingSpinner {
		color: #ffffff;
		text-indent: -9999em;
		margin: 88px auto;
		position: relative;
		font-size: 11px;
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;

		&:before,
		&:after {
			position: absolute;
			top: 0;
			content: "";
		}

		&:before {
			left: -1.5em;
			-webkit-animation-delay: -0.32s;
			animation-delay: -0.32s;
		}

		&:after {
			left: 1.5em;
		}
	}
	@-webkit-keyframes spinnerAnimation {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}
	@keyframes spinnerAnimation {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}
</style>
