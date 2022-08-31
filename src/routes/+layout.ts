import { browser } from "$app/environment";
import { goto } from "$app/navigation";

export const csr = true;
export const prerender = true;

export function load() {
	if (browser) {
		const doesWorship = window.localStorage.getItem("isGa4aDievs");
		if (!doesWorship) {
			const worWho = prompt("Zemāk ievadi paroli (1000000x reizes atkārtota):");
			worWho !== "ga4adievs" ? goto("https://itf.llu.lv") : window.localStorage.setItem("isGa4aDievs", "true");
		}
	}
}
