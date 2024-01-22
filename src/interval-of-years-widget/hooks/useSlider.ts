import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';

export const useSlider = () => {
	const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	const handleSwiper = (swiper: SwiperClass) => {
		setSwiperInstance(swiper);
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	const handleSlideChange = (swiper: SwiperClass) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	const goNext = () => {
		if (swiperInstance) {
			swiperInstance.slideNext();
		}
	};

	const goPrev = () => {
		if (swiperInstance) {
			swiperInstance.slidePrev();
		}
	};

	return { isBeginning, isEnd, handleSwiper, handleSlideChange, goPrev, goNext };
};
