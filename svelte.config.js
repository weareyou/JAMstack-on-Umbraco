import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    preserve: ['ld+json'],
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: adapter(),

    // hydrate the <div id="app"> element in src/app.html
    target: '#app',
    trailingSlash: 'never',
    // todo: check if this works, because we're rendering statically
    csp: {
      directives: {
        'default-src': ['self'],
        'connect-src': ['*'],
      },
    },
  },
};

export default config;
