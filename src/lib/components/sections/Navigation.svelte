<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Menu from "lucide-svelte/icons/menu";
	import X from "lucide-svelte/icons/x";
	import { profile } from "$lib/data/profile";

	let isOpen = $state(false);
	let scrolled = $state(false);

	const navItems = [
		{ href: "#about", label: "About" },
		{ href: "#skills", label: "Skills" },
		{ href: "#experience", label: "Experience" },
		{ href: "#highlights", label: "Highlights" },
		{ href: "#contact", label: "Contact" }
	];

	// Get initials from name
	const initials = profile.name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.toUpperCase();

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled || isOpen
		? 'bg-background/80 backdrop-blur-md border-b border-border'
		: ''}"
>
	<div class="max-w-4xl mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="#hero" class="font-bold text-lg hover:text-primary transition-colors">
				{initials}
			</a>

			<!-- Desktop nav -->
			<div class="hidden md:flex items-center gap-6">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<Button
				variant="ghost"
				size="icon"
				class="md:hidden"
				onclick={() => (isOpen = !isOpen)}
				aria-label={isOpen ? "Close menu" : "Open menu"}
			>
				{#if isOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</Button>
		</div>

		<!-- Mobile nav -->
		{#if isOpen}
			<div class="md:hidden pt-4 pb-2 space-y-2">
				{#each navItems as item}
					<a
						href={item.href}
						class="block py-2 text-muted-foreground hover:text-foreground transition-colors"
						onclick={closeMenu}
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</nav>
