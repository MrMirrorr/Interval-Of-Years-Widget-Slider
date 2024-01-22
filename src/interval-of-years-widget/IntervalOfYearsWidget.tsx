import { FC } from 'react';
import { DataEntry } from './models/DataModel';
import {
	CircleWithPoints,
	ControlButtons,
	CurrentTitle,
	MainLayout,
	MainTitle,
	Slider,
	YearsInterval,
} from './components';
import { useCurrentData } from './hooks/useCurrentData';

interface IntervalOfYearsWidgetProps {
	initialData: DataEntry[];
}

export const IntervalOfYearsWidget: FC<IntervalOfYearsWidgetProps> = ({
	initialData,
}) => {
	const { state, actions } = useCurrentData(initialData);

	const {
		pointsCount,
		currentIndex,
		isRotating,
		actualTitle,
		currentTitleForRender,
		actualItems,
		currentItemsForRender,
		minYear,
		maxYear,
	} = state;

	const {
		setCurrentIndex,
		setIsRotating,
		setCurrentTitleForRender,
		setCurrentItemsForRender,
		incrementCurrentIndex,
		decrementCurrentIndex,
	} = actions;

	return (
		<MainLayout>
			<MainTitle>Исторические даты</MainTitle>
			<CurrentTitle title={currentTitleForRender} isRotating={isRotating} />
			<CircleWithPoints
				pointsCount={pointsCount}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				isRotating={isRotating}
				setIsRotating={setIsRotating}
				title={actualTitle}
				setCurrentTitle={setCurrentTitleForRender}
				items={actualItems}
				setCurrentItems={setCurrentItemsForRender}
			/>
			<YearsInterval minYear={minYear} maxYear={maxYear} />
			<ControlButtons
				incrementCurrentIndex={incrementCurrentIndex}
				decrementCurrentIndex={decrementCurrentIndex}
				isRotating={isRotating}
				currentIndex={currentIndex}
				pointsCount={pointsCount}
			/>
			<Slider items={currentItemsForRender} isRotating={isRotating} />
		</MainLayout>
	);
};
