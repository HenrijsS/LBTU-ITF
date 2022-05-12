<svelte:head>
	<title>ITF - DVDZ</title>
</svelte:head>

<h1 class="px-2">Datorvadība un Datorzinātne</h1>

<ul class="linkList">
	<li>
		<a sveltekit:prefetch href="/dvdz/grafiks">Grafiks</a>
	</li>
</ul>

<h1 class="mb-5 px-2 font-bold">2. Semestra nokārtošana - DVDZ</h1>
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
			<span class="font-bold">Datorgrafika</span>
			<ul>
				<li>
					Izveidot un nokārtot <a href="https://estudijas.llu.lv/course/view.php?id=2139" target="_blank">gala darbu</a>
				</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Datu bāzes</span>
			<ul>
				<li>Gala darbs 50%</li>
				<li>1 Praktiskais KD (25%) un 1 Teorijas KD (25%) kopā 50%</li>
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
				<li>Izpildīti visi praktiskie darbi (40%)</li>
				<li>Eksāmens (60%)</li>
			</ul>
		</li>
		<li>
			<span class="font-bold">Datorvadības uzdevumi ražošanā</span>
			<ul>
				<li>Praktiskie 4 x 15p (iesniegti laikā) / 4 x 5p (iesniegti ar kavēšanu)</li>
				<li>Eseja (brīvas izvēles) 20p</li>
				<li>Apmeklējums 20p (teica, ka varbūt neskatīsies)</li>
			</ul>
		</li>
	</ul>
</div>

<style lang="scss">
	#nokartosana {
		@apply dark:text-white;
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
