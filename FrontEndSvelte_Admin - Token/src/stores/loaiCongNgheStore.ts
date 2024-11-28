// src/stores/congNgheStore.ts
import { writable } from 'svelte/store';
import type { LoaiCongNghe } from '../types/loaiCongNghe';
import { API_BASE_URL } from '../config';

export const loaiCongNgheData = writable<LoaiCongNghe[]>([]);

export async function fetchLoaiCongNgheData() {
	try {
		const response = await fetch(`${API_BASE_URL}/loaicongnghe`);
		if (!response.ok) throw new Error('Cannot fetch data from the server');
		const data = await response.json();
		loaiCongNgheData.set(data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}