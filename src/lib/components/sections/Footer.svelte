<script lang="ts">
	import { profile } from '$lib/data/profile';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Mail from 'lucide-svelte/icons/mail';
</script>

<footer class="py-8 px-6 border-t border-border">
	<div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
		<p class="text-sm text-muted-foreground">
			© {new Date().getFullYear()} {profile.name}. All rights reserved.
		</p>

		<div class="flex items-center gap-4">
			<a 
				href={profile.links.github} 
				target="_blank" 
				rel="noopener noreferrer"
				class="text-muted-foreground hover:text-foreground transition-colors"
			>
				<Github class="h-5 w-5" />
				<span class="sr-only">GitHub</span>
			</a>
			<a 
				href={profile.links.linkedin} 
				target="_blank" 
				rel="noopener noreferrer"
				class="text-muted-foreground hover:text-foreground transition-colors"
			>
				<Linkedin class="h-5 w-5" />
				<span class="sr-only">LinkedIn</span>
			</a>
			<a 
				href="mailto:{profile.email}"
				class="text-muted-foreground hover:text-foreground transition-colors"
			>
				<Mail class="h-5 w-5" />
				<span class="sr-only">Email</span>
			</a>
		</div>
	</div>
</footer>
