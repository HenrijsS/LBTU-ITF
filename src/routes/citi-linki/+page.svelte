<script lang="ts">
	type link = {
		href: string;
		title: string;
	};

	const links: link[] = [
		{
			href: "https://roundcube.llu.lv/",
			title: "E-Pasts",
		},
		{
			href: "https://estudijas.llu.lv",
			title: "E-Studijas",
		},
		{
			href: "https://lais.llu.lv/pls/pub/!pub_switcher.main?au=G&page=$1",
			title: "LAIS",
		},
		{
			href: "https://mans.llu.lv",
			title: "Mans LLU",
		},
		{
			href: "https://itf.llu.lv",
			title: "LLU ITF",
		},
	];
</script>

<svelte:head>
	<title>Citi Linki</title>
</svelte:head>

<div class="wrapper">
	<h1>Noderīgi linki vispārējai informācijai</h1>

	<ul class="linkList">
		{#each links as link}
			<li class="my-2">
				<a href={link.href} target="_blank">{link.title}</a>
			</li>
		{/each}
	</ul>
</div>
