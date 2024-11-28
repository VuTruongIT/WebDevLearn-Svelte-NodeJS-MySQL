<!-- src/routes/congnghe.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { loaiCongNgheData, fetchLoaiCongNgheData } from '../../stores/loaiCongNgheStore';
	import LoaiCongNgheTable from '../../components/LoaiCongNgheTable.svelte';
	import Header from '../../components/Header.svelte';

	onMount(fetchLoaiCongNgheData);
</script>

<section>
	<Header />
	
	<h1>Danh Sách Công Nghệ</h1>

	{#if $loaiCongNgheData.length > 0}
		<LoaiCongNgheTable data={$loaiCongNgheData} />
	{:else}
		<p>Đang tải dữ liệu...</p>
	{/if}
</section>

<svelte:head>
	<title>Danh Sách Công Nghệ</title>
	<meta name="description" content="Trang danh sách các công nghệ" />
</svelte:head>
