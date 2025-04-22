<script lang="ts">
	import Modals from '$lib/components/Modals/Modals.svelte';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}
<Modals />
