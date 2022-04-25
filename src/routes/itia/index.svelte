<svelte:head>
	<title>ITF - ITIA</title>
</svelte:head>

<h1 class="px-2">Informācijas Tehnoloģijas Ilgstpējīgai Attīstībai</h1>

<ul class="linkList">
	<li>
		<a sveltekit:prefetch href="/itia/grafiks">Grafiks</a>
	</li>
</ul>

<h1 class="mb-5 px-2 font-bold">2. Semestra nokārtošana - ITIA</h1>
<div class="container px-4 mx-auto">
	<ul id="nokartosana">
		<li>
			<span class="font-bold">Datoruzbūve</span>
			<ul>
				<li>Izpildītas visas lekcijas</li>
				<li>Izpildīti visi praktiskie darbi</li>
				<li>
					Veiksmīgi aizstāvēts praktiskais noslēguma pārbaudes darbs ļauj studentam kārtot gala eksāmenu testa formā
					e-studiju vidē.
				</li>
				<li>
					Eksāmenu kārto katras grupas ietvaros esošie visi studenti vienā laikā, pirms tam savstarpēji un ar
					pasniedzēju saskaņojot eksāmena norises dienu, laiku un vietu sesijas ietvaros.
				</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Lietišķa saskarsme</span>
			<ul>
				<li>Hzn</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Datu bāzes</span>
			<ul>
				<li>Gala darbs 50%</li>
				<li>2 praktiskais KD un 1 teorijas KD kopā 50%</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Matemātika</span>
			<ul>
				<li>Visi KD sekmīgi uzrakstīti</li>
				<li>Eksāmens tikai tiem, kas nemāk pareizi nodot mājasdarbu</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Multimēdiju tehnolõģijas</span>
			<ul>
				<li>Izpildīti un ieskaitīti visi praktiņi</li>
				<li>Gala noslēguma tests</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Operētājsistēmas</span>
			<ul>
				<li>Izpildīti visi praktiskie darbi</li>
				<li>Apmeklējums - 10%</li>
				<li>1.Praktiskais KD - 20%</li>
				<li>2.Praktiskais KD - 20%</li>
				<li>Teorijas KD - 30%</li>
				<li>Patstāvīgais darbs (Referāts) - 20%</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Programmēšana</span>
			<ul>
				<li>Izpildīti visi praktiskie darbi</li>
				<li>Eksāmens</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">WWW Tehno-loģijas</span>
			<ul>
				<li>Izpildīti visi praktiskie darbi – 50%</li>
				<li>2 Kontroldarbi – 20%</li>
				<li>Eksāmens – 30%</li>
			</ul>
		</li>
	</ul>
</div>

<style lang="scss">
	#nokartosana {
		@apply text-white;
		list-style: circle;

		& > li {
			@apply flex flex-wrap mb-5;

			&::before {
				content: "●";
				margin-right: 15px;
			}

			span {
				@apply text-xl;
			}

			& > ul {
				@apply w-full;

				li {
					padding-left: 25px;
					&::before {
						content: "--";
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
