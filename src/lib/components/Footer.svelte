<script lang="ts">
	import { onMount } from "svelte";
	// fetch varda dienas from $lib/varda_dienas.json
	let vardaDiena: string;
	const d = new Date();

	onMount(async () => {
		let res = await fetch(`/varda_dienas.json`);
		let vardaDienas = await res.json();
		const month = d.getMonth();
		const day = d.getDate();
		vardaDiena = vardaDienas[month][day - 1];
	});
</script>

<footer class="flex justify-center align-center w-full py-2 dark:text-white text-center">
	Šodien vārda dienu svin: {vardaDiena}
</footer>

<style lang="scss">
	@media (max-width: 768px) {
		footer {
			padding-bottom: 70px;
		}
	}
</style>
