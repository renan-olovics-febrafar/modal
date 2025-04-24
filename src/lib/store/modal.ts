import { writable } from 'svelte/store';
import type { Modal1 } from '$lib/components/Modals/Variables/Modal1.svelte';
import type { Modal2 } from '$lib/components/Modals/Variables/Modal2.svelte';

export type Modals = Modal1 | Modal2;

export const modalArray = writable<Modals[]>([]);

export const createModal = (modal: Modals) => {
	modalArray.update((modals) => [...modals, modal]);
};

export const removeModal = () => {
	modalArray.update((modals) => {
		if (modals.length === 0) return modals;
		const newModals = [...modals];
		newModals.pop();
		return newModals;
	});
};

export const clearModals = () => {
	modalArray.set([]);
};
