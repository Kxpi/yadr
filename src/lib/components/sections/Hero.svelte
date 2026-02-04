<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { Button } from '$lib/components/ui/button';
	import { base } from '$app/paths';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Mail from 'lucide-svelte/icons/mail';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
</script>

<section id="hero" class="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative">
	<div class="max-w-3xl text-center space-y-6">
		<!-- Profile Photo -->
		<div class="flex justify-center mb-8">
			<div class="relative group">
				<div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-accent rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-800"></div>
				<img 
					src="{base}/profile.jpg" 
					alt={profile.name} 
					class="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover shadow-xl"
					loading="eager"
				/>
			</div>
		</div>

		<div class="space-y-2">
			<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
				{profile.name}
			</h1>
		</div>
		
		<h2 class="text-xl sm:text-2xl text-muted-foreground font-medium">
			{profile.title}
		</h2>
		
		<p class="text-muted-foreground max-w-xl mx-auto">
			{profile.tagline}
		</p>

		<div class="flex items-center justify-center gap-4 pt-4">
			<Button variant="outline" size="icon" href={profile.links.github} target="_blank" rel="noopener noreferrer">
				<Github class="h-5 w-5" />
				<span class="sr-only">GitHub</span>
			</Button>
			<Button variant="outline" size="icon" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
				<Linkedin class="h-5 w-5" />
				<span class="sr-only">LinkedIn</span>
			</Button>
			<Button variant="outline" size="icon" href="#contact">
				<Mail class="h-5 w-5" />
				<span class="sr-only">Contact</span>
			</Button>
		</div>

		<div class="pt-8">
			<Button href="#about" variant="default" size="lg">
				View My Work
				<ChevronDown class="ml-2 h-4 w-4" />
			</Button>
		</div>
	</div>

	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<ChevronDown class="h-6 w-6 text-muted-foreground" />
	</div>
</section>
