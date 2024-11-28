<!-- src/routes/congnghe.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { congNgheData, fetchCongNgheData } from '../../stores/congNgheStore';
	import CongNgheTable from '../../components/CongNgheTable.svelte';
	import Header from '../../components/Header.svelte';

	onMount(fetchCongNgheData);
</script>

<section>
	<Header />
	
	<h1>Danh Sách Công Nghệ</h1>

	{#if $congNgheData.length > 0}
		<CongNgheTable data={$congNgheData} />
	{:else}
		<p>Đang tải dữ liệu...</p>
	{/if}
</section>

<svelte:head>
	<title>Danh Sách Công Nghệ</title>
	<meta name="description" content="Trang danh sách các công nghệ" />
</svelte:head>
