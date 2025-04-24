<script lang="ts">
	import { modalArray } from '$lib/store/modal';
	import type { Component } from 'svelte';

	import type { Modals } from '$lib/store/modal';

	type ModalName = Modals['modalName'];

	type LoadedModalsMap = {
		[K in ModalName]?: Component;
	};

	let loadedModals: LoadedModalsMap = {};

	$: if ($modalArray) {
		$modalArray.forEach((modal: Modals) => {
			if (!loadedModals[modal.modalName]) {
				import(`$lib/components/Modals/Variables/${modal.modalName}.svelte`)
					.then((module) => {
						loadedModals = { ...loadedModals, [modal.modalName]: module.default };
					})
					.catch((err) =>
						console.error(`Não foi possível carregar o modal ${modal.modalName}:`, err)
					);
			}
		});
	}
</script>

{#each $modalArray as modal}
	{#if loadedModals[modal.modalName]}
		<svelte:component this={loadedModals[modal.modalName]} {...modal.props} />
	{/if}
{/each}
