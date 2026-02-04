<script lang="ts">
	import { profile, education, certifications } from "$lib/data/profile";
	import { Badge } from "$lib/components/ui/badge";
	import ScrollReveal from "$lib/components/ScrollReveal.svelte";
	import MapPin from "lucide-svelte/icons/map-pin";
	import GraduationCap from "lucide-svelte/icons/graduation-cap";
	import Award from "lucide-svelte/icons/award";
</script>

<section id="about" class="py-20 px-6">
	<div class="max-w-4xl mx-auto space-y-12">
		<ScrollReveal>
			<div class="text-center space-y-4">
				<h2 class="text-3xl font-bold">About Me</h2>
				<div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<div class="space-y-6">
				<p class="text-lg text-muted-foreground leading-relaxed">
					{profile.summary}
				</p>

				<div class="flex items-center gap-2 text-muted-foreground">
					<MapPin class="h-4 w-4" />
					<span>{profile.location}</span>
				</div>
			</div>
		</ScrollReveal>

		<div class="grid sm:grid-cols-2 gap-8">
			<ScrollReveal delay={200}>
				<div class="space-y-4">
					<div class="flex items-center gap-2">
						<GraduationCap class="h-5 w-5 text-primary" />
						<h3 class="font-semibold">Education</h3>
					</div>
					<div class="pl-7 space-y-1">
						<p class="font-medium">{education.degree} in {education.field}</p>
						<p class="text-muted-foreground">{education.institution}</p>
						<p class="text-sm text-muted-foreground">{education.period}</p>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={300}>
				<div class="space-y-4">
					<div class="flex items-center gap-2">
						<Award class="h-5 w-5 text-primary" />
						<h3 class="font-semibold">Certifications</h3>
					</div>
					<div class="pl-7 space-y-2">
						{#each certifications as cert}
							<div>
								<Badge variant="secondary">{cert.name}</Badge>
							</div>
						{/each}
					</div>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>
