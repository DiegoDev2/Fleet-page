/** @type {import('tailwindcss').Config} */
import tailwindAnimation from 'tailwindcss-animated'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		theme: {
		  extend: {
			colors: {
			  'custom-bg': 'hsla(0,100%,50%,1)',
			  'custom-grad1': 'hsla(28,100%,74%,1)',
			  'custom-grad2': 'hsla(189,100%,56%,1)',
			  'custom-grad3': 'hsla(355,100%,93%,1)',
			  'custom-grad4': 'hsla(340,100%,76%,1)',
			  'custom-grad5': 'hsla(22,100%,77%,1)',
			},
			backgroundImage: {
			  'custom-gradient': 'radial-gradient(at 40% 20%, var(--tw-gradient-stops, hsla(28,100%,74%,1)) 0px, transparent 50%), radial-gradient(at 80% 0%, var(--tw-gradient-stops, hsla(189,100%,56%,1)) 0px, transparent 50%), radial-gradient(at 0% 50%, var(--tw-gradient-stops, hsla(355,100%,93%,1)) 0px, transparent 50%), radial-gradient(at 80% 50%, var(--tw-gradient-stops, hsla(340,100%,76%,1)) 0px, transparent 50%), radial-gradient(at 0% 100%, var(--tw-gradient-stops, hsla(22,100%,77%,1)) 0px, transparent 50%)',
			},
		  },
		},
	plugins: [tailwindAnimation],
}
