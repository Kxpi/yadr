<script lang="ts">
	import Navigation from "$lib/components/sections/Navigation.svelte";
	import Hero from "$lib/components/sections/Hero.svelte";
	import About from "$lib/components/sections/About.svelte";
	import Skills from "$lib/components/sections/Skills.svelte";
	import Experience from "$lib/components/sections/Experience.svelte";
	import Highlights from "$lib/components/sections/Highlights.svelte";
	import Contact from "$lib/components/sections/Contact.svelte";
	import Footer from "$lib/components/sections/Footer.svelte";
</script>

<Navigation />

<main>
	<Hero />
	<About />
	<Skills />
	<Experience />
	<Highlights />
	<Contact />
</main>

<Footer />
