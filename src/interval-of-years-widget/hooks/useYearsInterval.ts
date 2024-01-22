import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useYearsInterval = (minYear: number, maxYear: number) => {
	const minYearRef = useRef<HTMLElement | null>(null);
	const maxYearRef = useRef<HTMLElement | null>(null);
	const yearAnimation = useRef({ min: minYear, max: maxYear });

	useEffect(() => {
		if (minYearRef.current) {
			gsap.to(yearAnimation.current, {
				min: minYear,
				duration: 1,
				ease: 'none',
				onUpdate: () => {
					if (minYearRef.current) {
						minYearRef.current.innerHTML = Math.round(
							yearAnimation.current.min,
						).toString();
					}
				},
			});
		}

		if (maxYearRef.current) {
			gsap.to(yearAnimation.current, {
				max: maxYear,
				duration: 1,
				ease: 'none',
				onUpdate: () => {
					if (maxYearRef.current) {
						maxYearRef.current.innerHTML = Math.round(
							yearAnimation.current.max,
						).toString();
					}
				},
			});
		}
	}, [minYear, maxYear]);

	return { minYearRef, maxYearRef };
};
