import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useFadeInOut = (isRotating: boolean) => {
	const elementFadeInOutRef = useRef(null);

	useEffect(() => {
		if (elementFadeInOutRef.current) {
			if (isRotating) {
				gsap.to(elementFadeInOutRef.current, { opacity: 0, duration: 0.1 });
			} else {
				gsap.to(elementFadeInOutRef.current, { opacity: 1, duration: 0.1 });
			}
		}
	}, [isRotating]);

	return { elementFadeInOutRef };
};
