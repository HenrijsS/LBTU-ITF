<script lang="ts">
	import ITF_Logo from "$lib/lv_logo.svg";
</script>

<svelte:head>
	<title>LBTU-ITF 2. Kursa Dashboard</title>
</svelte:head>

<div class="container my-auto flex-col-center">
	<img class="w-[350px] mx-auto mt-auto px-5" src={ITF_Logo} alt="LBTU Informācijas Fakultātes Logotips" width="350" />
	<h1 class="font-bold text-[42px] sm:text-[64px] mx-auto mb-auto text-white px-5">Grafiki</h1>
	<div class="flex gap-8 mt-4">
		<a href="/itia/grafiks" class="mx-auto btn btn-primary btn-lg mt-6">
			<i class="fa-solid fa-calendar-day mr-2" /> ITIA
		</a>
		<a href="/dvdz/grafiks" class="mx-auto btn btn-primary btn-lg mt-6">
			<i class="fa-solid fa-calendar-day mr-2" /> DVDZ
		</a>
	</div>
</div>
