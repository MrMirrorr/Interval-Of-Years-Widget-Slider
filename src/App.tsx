import { FC, useState } from 'react';
import {
	CircleWithPoints,
	ControlButtons,
	MainLayout,
	MainTitle,
	Slider,
	YearsInterval,
} from './components';
import { IntervalOfYearsWidget } from './interval-of-years-widget/IntervalOfYearsWidget';
import { initialData } from './initialData';

export const App: FC = () => {
	const pointsCount = 6;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isRotating, setIsRotating] = useState(false);

	const incrementCurrentIndex = () => {
		setCurrentIndex((prev) => prev + 1);
	};

	const decrementCurrentIndex = () => {
		setCurrentIndex((prev) => prev - 1);
	};

	return (
		<>
			{/* <MainLayout>
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
			</MainLayout> */}
			<IntervalOfYearsWidget initialData={initialData} />
		</>
	);
};
