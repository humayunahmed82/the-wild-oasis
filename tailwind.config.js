/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sono: ["'Sono', monospace;"],
			},
			boxShadow: {
				"custom-1": "0 1px 2px rgba(0, 0, 0, 0.04)",
				"custom-2": "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
				"custom-3": "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
			},
			animation: {
				spinner: "spinner 1s linear infinite",
			},
			keyframes: {
				spinner: {
					to: {
						transform: "rotate(1turn)",
					},
				},
			},
			backgroundImage: {
				"radial-gradient":
					"radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, var(--color-brand-600))",
			},
		},
	},
	plugins: [],
};
