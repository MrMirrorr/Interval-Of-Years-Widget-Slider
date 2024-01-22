import { Dispatch, FC, SetStateAction } from 'react';
import { Item } from '../../models/DataModel';
import { calculatePointPosition } from './utils/calculatePointPosition';
import { useRotation } from '../../hooks';
import { Point } from '../point/Point';
import styled from 'styled-components';

interface CircleWithPointsProps {
	className?: string;
	pointsCount: number;
	currentIndex: number;
	title: string;
	items: Item[];
	isRotating: boolean;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
	setCurrentTitle: Dispatch<SetStateAction<string>>;
	setCurrentItems: Dispatch<SetStateAction<Item[]>>;
	setIsRotating: Dispatch<SetStateAction<boolean>>;
}

const CircleWithPointsContainer: FC<CircleWithPointsProps> = ({
	className,
	pointsCount,
	currentIndex,
	title,
	items,
	isRotating,
	setCurrentIndex,
	setCurrentTitle,
	setCurrentItems,
	setIsRotating,
}) => {
	const { circleRef } = useRotation(
		pointsCount,
		currentIndex,
		title,
		items,
		setCurrentTitle,
		setCurrentItems,
		setIsRotating,
	);

	const handleClick = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div ref={circleRef} className={className}>
			{Array.from({ length: pointsCount }).map((_, index) => {
				const { x, y } = calculatePointPosition(index, pointsCount);

				return (
					<Point
						className="point"
						key={index}
						index={index}
						handleClick={!isRotating ? handleClick : () => {}}
						left={x + 'px'}
						top={y + 'px'}
						currentIndex={currentIndex}
					/>
				);
			})}
		</div>
	);
};

export const CircleWithPoints = styled(CircleWithPointsContainer)`
	width: 530px;
	height: 530px;
	position: relative;
	z-index: 2;
	border: 1px solid rgba(66, 86, 122, 0.2);
	border-radius: 50%;
`;
