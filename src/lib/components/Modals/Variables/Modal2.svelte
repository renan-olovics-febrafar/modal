<script context="module" lang="ts">
	type Props = {
		number: number;
	};

	export type Modal2 = {
		modalName: 'Modal2';
		props: Props;
	};
</script>

<script lang="ts">
	export let number: Props['number'];
</script>

<div>
	<h1>Modal 2 {number}</h1>
	<p>This is the second modal.</p>
</div>
