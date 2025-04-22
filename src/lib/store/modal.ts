import { writable } from 'svelte/store';
import type { Modal1 } from '$lib/components/Modals/Variables/modal1.svelte';
import type { Modal2 } from '$lib/components/Modals/Variables/modal2.svelte';

type Modal = Modal1 | Modal2;

export const modalArray = writable<Modal[]>([]);

export const createModal = (modal: Modal) => {
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
