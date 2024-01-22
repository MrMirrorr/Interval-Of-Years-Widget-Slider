export interface Item {
	year: number;
	description: string;
}

export interface DataEntry {
	id: string;
	title: string;
	items: Item[];
}