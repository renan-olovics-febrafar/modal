<script context="module" lang="ts">
	type Props = {
		name: string;
	};

	export type Modal1 = {
		modalName: 'Modal1';
		props: Props;
	};
</script>

<script lang="ts">
	export let name: Props['name'];
</script>

<div>
	<h1>Modal 1 {name}</h1>
	<p>This is the first modal.</p>
</div>
