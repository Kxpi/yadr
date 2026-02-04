<script lang="ts">
	import { profile } from '$lib/data/profile';
	import { siteConfig } from '$lib/config';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Card from '$lib/components/ui/card';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import Mail from 'lucide-svelte/icons/mail';
	import Send from 'lucide-svelte/icons/send';

	let formState = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		formState = 'submitting';

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		try {
			const response = await fetch(form.action, {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			});

			if (response.ok) {
				formState = 'success';
				form.reset();
			} else {
				const data = await response.json();
				errorMessage = data.error || 'Something went wrong. Please try again.';
				formState = 'error';
			}
		} catch (e) {
			errorMessage = 'Network error. Please try again.';
			formState = 'error';
		}
	}
</script>

<section id="contact" class="py-20 px-6">
	<div class="max-w-2xl mx-auto space-y-12">
		<ScrollReveal>
			<div class="text-center space-y-4">
				<h2 class="text-3xl font-bold">Get In Touch</h2>
				<div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
				<p class="text-muted-foreground max-w-md mx-auto">
					Have a project in mind or want to discuss an opportunity? Feel free to reach out.
				</p>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<div class="flex justify-center">
				<Button href="mailto:{profile.email}" size="lg" class="gap-2">
					<Mail class="h-5 w-5" />
					Email Me Directly
				</Button>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={200}>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-border"></div>
				</div>
				<div class="relative flex justify-center text-sm">
					<span class="bg-background px-4 text-muted-foreground">or send a message</span>
				</div>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={300}>
			<Card.Root class="p-6">
			{#if formState === 'success'}
				<div class="text-center py-8 space-y-4">
					<div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
						<Send class="h-8 w-8 text-green-500" />
					</div>
					<h3 class="text-xl font-semibold">Message Sent!</h3>
					<p class="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
					<Button variant="outline" onclick={() => formState = 'idle'}>
						Send Another Message
					</Button>
				</div>
			{:else}
				<form 
					action="https://formspree.io/f/{siteConfig.formspreeId}" 
					method="POST"
					onsubmit={handleSubmit}
					class="space-y-6"
				>
					<div class="grid sm:grid-cols-2 gap-4">
						<div class="space-y-2">
							<label for="name" class="text-sm font-medium">Name</label>
							<Input 
								type="text" 
								id="name" 
								name="name" 
								placeholder="Your name" 
								required 
								disabled={formState === 'submitting'}
							/>
						</div>
						<div class="space-y-2">
							<label for="email" class="text-sm font-medium">Email</label>
							<Input 
								type="email" 
								id="email" 
								name="email" 
								placeholder="your@email.com" 
								required 
								disabled={formState === 'submitting'}
							/>
						</div>
					</div>
					<div class="space-y-2">
						<label for="company" class="text-sm font-medium">Company <span class="text-muted-foreground font-normal">(optional)</span></label>
						<Input 
							type="text" 
							id="company" 
							name="company" 
							placeholder="Your company" 
							disabled={formState === 'submitting'}
						/>
					</div>
					<div class="space-y-2">
						<label for="message" class="text-sm font-medium">Message</label>
						<Textarea 
							id="message" 
							name="message" 
							placeholder="How can I help you?" 
							rows={5} 
							required 
							disabled={formState === 'submitting'}
						/>
					</div>

					{#if formState === 'error'}
						<p class="text-sm text-destructive">{errorMessage}</p>
					{/if}

					<Button type="submit" class="w-full" disabled={formState === 'submitting'}>
						{#if formState === 'submitting'}
							Sending...
						{:else}
							<Send class="h-4 w-4 mr-2" />
							Send Message
						{/if}
					</Button>
				</form>
			{/if}
		</Card.Root>
		</ScrollReveal>
	</div>
</section>
