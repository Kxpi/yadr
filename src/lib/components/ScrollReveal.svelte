<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
		y?: number;
		x?: number;
		duration?: number;
		delay?: number;
		threshold?: number;
		once?: boolean;
		class?: string;
	}

	let {
		children,
		y = 20,
		x = 0,
		duration = 500,
		delay = 0,
		threshold = 0.1,
		once = true,
		class: className = ""
	}: Props = $props();

	let element: HTMLDivElement;
	let visible = $state(false);

	$effect(() => {
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						if (once) {
							observer.unobserve(element);
						}
					} else if (!once) {
						visible = false;
					}
				});
			},
			{ threshold }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div bind:this={element} class={className}>
	{#if visible}
		<div
			in:fly={{ y, x, duration, delay }}
			out:fade={{ duration: 200 }}
			class={className.includes("h-full") ? "h-full" : ""}
		>
			{@render children()}
		</div>
	{:else}
		<div class={className.includes("h-full") ? "opacity-0 h-full" : "opacity-0"}>
			{@render children()}
		</div>
	{/if}
</div>
