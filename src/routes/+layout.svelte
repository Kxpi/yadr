<script lang="ts">
	import '../app.css';
	import { siteConfig } from '$lib/config';
	import { profile } from '$lib/data/profile';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteConfig.title}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="author" content={profile.name} />
	<meta property="og:title" content={siteConfig.title} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteConfig.url} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={siteConfig.title} />
	<meta name="twitter:description" content={siteConfig.description} />
</svelte:head>

{@render children()}
