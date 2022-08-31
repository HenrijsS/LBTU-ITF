module.exports = {
	content: [ "src/**/*.svelte" ],

	// or 'media' or 'class'
	darkMode: "media",

	theme: {
		container: {
			center: true
		},
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

	plugins: [
		require('daisyui')
	],

	daisyui: {
		themes: [
			{
				halloween: {
					"primary": "#f57f32",
					"secondary": "#6D3A9C",
					"accent": "#51A800",
					"neutral": "#1B1D1D",
					"base-100": "#212121",
					"info": "#2463EB",
					"success": "#16A249",
					"warning": "#DB7706",
					"error": "#DC2828",
				},
			},
		],
	},
};
