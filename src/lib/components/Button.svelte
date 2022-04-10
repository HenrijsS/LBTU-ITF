<script lang="ts">
	export let link: string = "#";
	export let blank: boolean = false;
</script>

<a class="btn" href={link} target={blank ? "_blank" : ""}>
	<slot />
</a>

<style lang="scss">
	.btn {
		background-color: var(--primary-color);
		@apply flex py-2 px-3 my-4 text-white font-bold rounded-full text-xl;
		// background-color: #f58032b4;
		box-shadow: 3px 5px 9px 0px #f58032a2;
	}
</style>
