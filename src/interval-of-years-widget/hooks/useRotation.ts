import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Item } from '../models/DataModel';

export const useRotation = (
	pointsCount: number,
	currentIndex: number,
	title: string,
	items: Item[],
	setCurrentTitle: Dispatch<SetStateAction<string>>,
	setCurrentItems: Dispatch<SetStateAction<Item[]>>,
	setIsRotating: Dispatch<SetStateAction<boolean>>,
) => {
	const circleRef = useRef<HTMLDivElement>(null);
	const [currentRotation, setCurrentRotation] = useState(0);

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
					setCurrentTitle(title);
					setCurrentItems(items);
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

	return { circleRef };
};
