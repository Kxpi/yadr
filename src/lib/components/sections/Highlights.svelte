<script lang="ts">
	import { highlights } from '$lib/data/profile';
	import * as Card from '$lib/components/ui/card';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import Cloud from 'lucide-svelte/icons/cloud';
	import Shield from 'lucide-svelte/icons/shield';
	import GitBranch from 'lucide-svelte/icons/git-branch';
	import TrendingDown from 'lucide-svelte/icons/trending-down';

	const icons = [Cloud, Shield, GitBranch, TrendingDown];
</script>

<section id="highlights" class="py-20 px-6 bg-secondary/30">
	<div class="max-w-4xl mx-auto space-y-12">
		<ScrollReveal>
			<div class="text-center space-y-4">
				<h2 class="text-3xl font-bold">Key Highlights</h2>
				<div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
			</div>
		</ScrollReveal>

		<div class="grid sm:grid-cols-2 gap-6 auto-rows-fr">
			{#each highlights as highlight, index}
				{@const Icon = icons[index]}
				<ScrollReveal delay={index * 100} class="h-full">
					<Card.Root class="p-6 hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col">
						<div class="space-y-4 flex flex-col h-full">
							<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
								<Icon class="h-6 w-6 text-primary" />
							</div>
							<h3 class="text-lg font-semibold">{highlight.title}</h3>
							<p class="text-muted-foreground text-sm leading-relaxed flex-grow">
								{highlight.description}
							</p>
						</div>
					</Card.Root>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
