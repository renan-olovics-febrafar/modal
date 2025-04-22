<script lang="ts">
	import { modalArray } from '$lib/store/modal';

	import * as Ms from '$lib/components/Modals/Variables/index';
	import type { Component } from 'svelte';
</script>

{#each $modalArray as modal}
	{#if Ms[modal.modalName]}
		<svelte:component this={Ms[modal.modalName] as unknown as Component} {...modal} />
	{/if}
{/each}
