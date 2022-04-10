module.exports = {
	content: ["src/**/*.svelte"],

	// or 'media' or 'class'
	darkMode: "media",

	theme: {
		extend: {
			colors: {
				primary: "#f57f32",
				primarySubtle: "#f58032a2",
			},
			shadow: {
				primary: "10px 10px 48px -13px rgba(245,127,50,1)",
			},
		},
	},

	variants: {
		extend: {},
	},

	plugins: [],
	mode: "jit",
};
