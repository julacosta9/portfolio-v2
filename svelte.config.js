import adapter from '@sveltejs/adapter-auto';
import { default as preprocess, default as sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    }
  },
  preprocess: [
    sveltePreprocess(),
    preprocess({
      postcss: true
    })
  ]
};

export default config;
