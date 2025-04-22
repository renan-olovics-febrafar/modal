<script>
	import { createModal, removeModal, clearModals } from '$lib/store/modal';

	const create = () => {
		createModal({
			modalName: 'Modal1',
			props: { name: 'asdadsdasdsa' }
		});
	};
	const create2 = () => {
		createModal({
			modalName: 'Modal2',
			props: { number: Math.random() }
		});
	};
</script>

<button on:click={create}>create modal</button>
<button on:click={create2}>create modal2</button>
<button on:click={removeModal}>remove last one</button>
<button on:click={clearModals}>clear modals</button>
