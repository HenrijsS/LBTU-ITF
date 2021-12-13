<script lang="ts">
	export let kurss = "itia";
	let grupa = 1;
	let src = "https://google.com";

	switch (kurss) {
		case "itia":
			src =
				"https://docs.google.com/spreadsheets/d/e/2PACX-1vRcMPXMEfBxZ1X-Uu9batXr_PLluWFCrLJJP77YGE4M4h6uT9imng7wxexvv32UpaUOe4XMQ13HIDkp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false;chrome=false";
			break;
		case "sesija":
			src =
				"https://calendar.google.com/calendar/embed?src=rvnv6fm328su3k3b1u1t4e6uk4%40group.calendar.google.com&ctz=Europe%2FRiga";
			break;
	}
</script>

<div class="groupSelector flex w-full">
	<div class="groupBtn bg-red-500">1. Grupa</div>
	<div class="groupBtn bg-green-500">2. Grupa</div>
</div>

<iframe {src} frameborder="0" title={kurss} class="w-full h-full flex-1" />

<style lang="scss">
	.groupSelector {
		.groupBtn {
			@apply flex flex-1 justify-center items-center cursor-pointer py-2 transition-all duration-200;

			&:hover {
				@apply transform scale-105 shadow-xl;
			}
		}
	}
</style>
