<script lang="ts">
	import ITF_Logo from "$lib/lv_logo.svg";
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>LLU-ITF 1. Kursa Shortcuti</title>
</svelte:head>

<!-- <img class="w-[350px] mx-auto mt-auto px-5" src={ITF_Logo} alt="LLU Informācijas Fakultātes Logotips" width="350" />
<h1 class="font-bold text-[42px] sm:text-[64px] mx-auto mb-auto text-white px-5">LLU-ITF Īsceļi uz informāciju</h1> -->

<iframe
	src="https://docs.google.com/forms/d/e/1FAIpQLScW7AIyS5lOJkvuo3Z3lIcBUaLOYtdPCPqi_TS4e6T5SCwSig/viewform?embedded=true"
	width="100%"
	height="700"
	frameborder="0"
	marginheight="0"
	marginwidth="0"
	scrolling="no"
	title="Aptauja"
	class="overflow-y-hidden"
/>

<img src="/img/itf_dienas.jpg" alt="ITF Dienas LLU - 2022" class="lg:max-w-[80%] max-w-full mx-auto" />

<div class="flex flex-wrap justify-center gap-5">
	<Button link="https://www.instagram.com/p/CbsMYUVgThE/" blank={true}>Vairāk info</Button>
	<Button link="http://ej.uz/ITF_22" blank={true}>Reģistrēties</Button>
</div>
