<script lang="ts">
	import { skills } from "$lib/data/profile";
	import { Badge } from "$lib/components/ui/badge";
	import ScrollReveal from "$lib/components/ScrollReveal.svelte";

	// Dynamically extract categories from skills while preserving order
	const categoryOrder = Array.from(new Set(skills.map((s) => s.category)));

	// Group skills by category
	const skillsByCategory = categoryOrder.map((category) => ({
		category,
		skills: skills.filter((s) => s.category === category)
	}));

	// Capitalize category labels for display
	function formatCategoryLabel(category: string): string {
		return category
			.split(/[-_\s]/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	}
</script>

<section id="skills" class="py-20 px-6 bg-secondary/30">
	<div class="max-w-4xl mx-auto space-y-12">
		<ScrollReveal>
			<div class="text-center space-y-4">
				<h2 class="text-3xl font-bold">Skills & Technologies</h2>
				<div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
			</div>
		</ScrollReveal>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each skillsByCategory as { category, skills: categorySkills }, index}
				<ScrollReveal delay={index * 50}>
					<div class="space-y-3">
						<h3 class="text-sm font-medium text-muted-foreground uppercase tracking-wide">
							{formatCategoryLabel(category)}
						</h3>
						<div class="flex flex-wrap gap-2">
							{#each categorySkills as skill}
								<Badge
									variant="outline"
									class="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
								>
									{skill.name}
								</Badge>
							{/each}
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
