import { useState } from 'react';
import { DataEntry } from '../models/DataModel';

export const useCurrentData = (initialData: DataEntry[]) => {
	const pointsCount = initialData.length;
	if (pointsCount > 6) {
		throw new Error('initialData не может содержать более 6 элементов');
	}

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isRotating, setIsRotating] = useState(false);

	const currentInterval = initialData[currentIndex];

	const { items: actualItems, title: actualTitle } = currentInterval;
	const [currentTitleForRender, setCurrentTitleForRender] = useState(actualTitle);

	const sortedActualItems = actualItems.sort((a, b) => a.year - b.year);
	const [currentItemsForRender, setCurrentItemsForRender] = useState(sortedActualItems);

	const minYear = sortedActualItems[0].year;
	const maxYear = sortedActualItems[sortedActualItems.length - 1].year;

	const incrementCurrentIndex = () => {
		setCurrentIndex((prev) => prev + 1);
	};

	const decrementCurrentIndex = () => {
		setCurrentIndex((prev) => prev - 1);
	};

	return {
		state: {
			pointsCount,
			currentIndex,
			isRotating,
			actualTitle,
			currentTitleForRender,
			actualItems: sortedActualItems,
			currentItemsForRender,
			minYear,
			maxYear,
		},
		actions: {
			setCurrentIndex,
			setIsRotating,
			setCurrentTitleForRender,
			setCurrentItemsForRender,
			incrementCurrentIndex,
			decrementCurrentIndex,
		},
	};
};
