import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			prependData: `@import './src/lib/app.scss';`
	// 			// additionalData: '@use "src/lib/variables.scss" as *;'
	// 		}
	// 	}
	// }
});
