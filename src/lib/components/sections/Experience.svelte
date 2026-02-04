<script lang="ts">
	import { experience } from "$lib/data/profile";
	import * as Card from "$lib/components/ui/card";
	import ScrollReveal from "$lib/components/ScrollReveal.svelte";
	import Building2 from "lucide-svelte/icons/building-2";
	import MapPin from "lucide-svelte/icons/map-pin";
	import Calendar from "lucide-svelte/icons/calendar";
</script>

<section id="experience" class="py-20 px-6">
	<div class="max-w-4xl mx-auto space-y-12">
		<ScrollReveal>
			<div class="text-center space-y-4">
				<h2 class="text-3xl font-bold">Experience</h2>
				<div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
			</div>
		</ScrollReveal>

		<div class="relative">
			<!-- Timeline line -->
			<div
				class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block"
			></div>

			<div class="space-y-8">
				{#each experience as job, index}
					<ScrollReveal delay={index * 100} x={index % 2 === 0 ? -20 : 20} y={0}>
						<div
							class="relative md:grid md:grid-cols-2 md:gap-8 {index % 2 === 0
								? ''
								: 'md:direction-rtl'}"
						>
							<!-- Timeline dot -->
							<div
								class="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 hidden md:block"
							></div>

							<!-- Card -->
							<div
								class="{index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:col-start-2'} md:direction-ltr"
							>
								<Card.Root class="p-6 hover:shadow-lg transition-shadow">
									<div class="space-y-4">
										<div class="space-y-2">
											<div class="flex items-center gap-2 text-primary">
												<Building2 class="h-4 w-4" />
												<span class="font-semibold">{job.company}</span>
											</div>
											<h3 class="text-xl font-bold">{job.role}</h3>
											<div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
												<div class="flex items-center gap-1">
													<Calendar class="h-4 w-4" />
													<span>{job.period}</span>
												</div>
												<div class="flex items-center gap-1">
													<MapPin class="h-4 w-4" />
													<span>{job.location}</span>
												</div>
											</div>
										</div>

										<p class="text-muted-foreground text-sm">
											{job.description}
										</p>

										<ul class="space-y-2">
											{#each job.highlights as highlight}
												<li class="text-sm text-muted-foreground flex gap-2">
													<span class="text-primary mt-1 flex-shrink-0">•</span>
													<span>{highlight}</span>
												</li>
											{/each}
										</ul>
									</div>
								</Card.Root>
							</div>
						</div>
					</ScrollReveal>
				{/each}
			</div>
		</div>
	</div>
</section>
