import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { Point } from '../../components';

interface CircleWithPointsProps {
	className?: string;
	pointsCount: number;
	currentIndex: number;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
	isRotating: boolean;
	setIsRotating: Dispatch<SetStateAction<boolean>>;
}

const CircleWithPointsContainer: FC<CircleWithPointsProps> = ({
	className,
	pointsCount,
	currentIndex,
	setCurrentIndex,
	isRotating,
	setIsRotating,
}) => {
	const circleRef = useRef<HTMLDivElement>(null);
	const [currentRotation, setCurrentRotation] = useState(0);

	const calculatePointPosition = (index: number, total: number) => {
		const angle = ((index / total) * 360 - 60) * (Math.PI / 180); // Угол в радианах с начальной точкой на 1 часу
		const radius = 265;
		return {
			x: radius * Math.cos(angle) + radius,
			y: radius * Math.sin(angle) + radius,
		};
	};

	const rotationCircle = (index: number) => {
		setIsRotating(true);
		const angle = (index / pointsCount) * 360 + currentRotation;
		let requiredRotation = -angle;

		// Нормализация угла до -180...180
		if (requiredRotation < -180) {
			requiredRotation += 360;
		} else if (requiredRotation > 180) {
			requiredRotation -= 360;
		}

		if (circleRef.current) {
			gsap.to(circleRef.current, {
				rotation: `+=${requiredRotation}`,
				transformOrigin: 'center center',
				duration: 1,
				onComplete: () => {
					// Обновление текущего угла вращения после завершения анимации
					setCurrentRotation((prevRotation) => {
						let newRotation = prevRotation + requiredRotation;
						// Нормализация нового угла
						return ((newRotation + 180) % 360) - 180;
					});
					setIsRotating(false);
				},
			});
			gsap.to(circleRef.current.querySelectorAll('.number'), {
				rotation: `-=${requiredRotation}`,
				duration: 1,
			});
		}
	};

	useEffect(() => {
		rotationCircle(currentIndex);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex]);

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
