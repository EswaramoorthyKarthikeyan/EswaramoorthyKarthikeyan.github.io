import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	root: '.',
	build: {
		assetsDir: './',
		outDir: 'dist',
		emptyOutDir: true
	},
	server: {
		open: true
	}
});
