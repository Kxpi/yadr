import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: true,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/yadr" : ""
		},
		inlineStyleThreshold: 1024
	}
};

export default config;
