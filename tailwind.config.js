/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				'deep-blue': '#010026',
				blue: '#2CBCE9',
				red: '#DC4492',
				yellow: '#FDCC49',
				grey: '#ededed',
				'dark-grey': '#757575',
				'opaque-black': 'rgba(0,0,0,0.35)',
			},
			backgroundImage: theme => ({
				'gradient-rainbow':
					'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

				'gradient-rainblue':
					'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
			}),
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				opensans: ['Open Sans', 'sans-serif'],
			},
			content: {
				brush: "url('./public/pics/brush.png')",
				person1: "url('./public/pics/person-1.png')",
				person2: "url('./public/pics/person-2.png')",
				person3: "url('./public/pics/person-3.png')",
			},
		},
		screens: {
			xs: '356px',
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
