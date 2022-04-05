<script lang="ts">
	export let link: string = "#";
</script>

<a class="btn shadow-lg shadow-primarySubtle" href={link} target="_blank">
	<slot />
</a>

<style lang="scss">
	.btn {
		background-color: var(--primary-color);
		@apply flex mx-auto py-2 px-3 text-white font-bold rounded-full text-xl;
		// background-color: #f58032b4;
	}
</style>
