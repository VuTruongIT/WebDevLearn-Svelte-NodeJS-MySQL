// src/stores/congNgheStore.ts
import { writable } from 'svelte/store';
import type { CongNghe } from '../types/congNghe';
import { API_BASE_URL } from '../config';

export const congNgheData = writable<CongNghe[]>([]);

export async function fetchCongNgheData() {
	try {
		const response = await fetch(`${API_BASE_URL}/congnghe`);
		if (!response.ok) throw new Error('Cannot fetch data from the server');
		const data = await response.json();
		congNgheData.set(data);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}
