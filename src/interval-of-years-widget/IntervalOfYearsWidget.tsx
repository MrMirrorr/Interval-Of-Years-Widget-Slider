import { FC, useState } from 'react';
import {
	CircleWithPoints,
	ControlButtons,
	MainLayout,
	MainTitle,
	Slider,
	YearsInterval,
} from '../components';

interface Item {
	year: number;
	description: string;
}

interface DataEntry {
	id: string;
	title: string;
	items: Item[];
}

interface IntervalOfYearsWidgetProps {
	initialData: DataEntry[];
}

export const IntervalOfYearsWidget: FC<IntervalOfYearsWidgetProps> = ({
	initialData,
}) => {
	const pointsCount = initialData.length;
	if (pointsCount > 6) {
		throw new Error('initialData не может содержать более 6 элементов');
	}

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isRotating, setIsRotating] = useState(false);

	const incrementCurrentIndex = () => {
		setCurrentIndex((prev) => prev + 1);
	};

	const decrementCurrentIndex = () => {
		setCurrentIndex((prev) => prev - 1);
	};

	return (
		<MainLayout>
			<MainTitle>Исторические даты</MainTitle>
			<CircleWithPoints
				pointsCount={pointsCount}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				isRotating={isRotating}
				setIsRotating={setIsRotating}
			/>
			<YearsInterval minYear={1999} maxYear={2005} />
			<ControlButtons
				incrementCurrentIndex={incrementCurrentIndex}
				decrementCurrentIndex={decrementCurrentIndex}
				isRotating={isRotating}
				currentIndex={currentIndex}
				pointsCount={pointsCount}
			/>
			<Slider />
		</MainLayout>
	);
};
