import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Item } from '../../models/DataModel';
import { useFadeInOut, useSlider } from '../../hooks';
import styled from 'styled-components';

const StyledSwiperSlide = styled(SwiperSlide)`
	width: auto;
	min-width: 300px;
	max-width: 320px;
	height: 100%;
`;

interface SliderProps {
	className?: string;
	items: Item[];
	isRotating: boolean;
}

export const SliderContainer: FC<SliderProps> = ({ className, items, isRotating }) => {
	const { elementFadeInOutRef } = useFadeInOut(isRotating);

	const { isBeginning, isEnd, handleSwiper, handleSlideChange, goPrev, goNext } =
		useSlider();

	return (
		<div className={className} ref={elementFadeInOutRef}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={80}
				slidesPerView={'auto'} // Изменено для автоматического расчета видимых слайдов
				// breakpoints={{
				// 	320: { slidesPerView: 1 },
				// 	480: { slidesPerView: 2 },
				// 	640: { slidesPerView: 3 },
				// }}
				// navigation
				onSwiper={handleSwiper}
				onSlideChange={handleSlideChange}
			>
				{items.map((item, index) => (
					<StyledSwiperSlide key={index}>
						<div className="year">{item.year}</div>
						<div className="description">{item.description}</div>
					</StyledSwiperSlide>
				))}
			</Swiper>

			{!isBeginning && <div className="swiper-button-prev" onClick={goPrev} />}
			{!isEnd && <div className="swiper-button-next" onClick={goNext} />}
		</div>
	);
};

export const Slider = styled(SliderContainer)`
	width: 100%;
	margin-top: 50px;
	position: relative;

	.swiper {
		min-height: 40px;
	}

	.swiper-button-prev,
	.swiper-button-next {
		width: 40px;
		height: 40px;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);

		&::after {
			font-size: 10px;
			font-weight: bold;
		}
	}

	.swiper-button-prev {
		left: -60px;
	}

	.swiper-button-next {
		right: -60px;
	}

	.swiper-button-disabled {
		display: none;
	}

	.year {
		margin-bottom: 15px;
		color: #3877ee;
		font-family: 'Bebas Neue';
		font-size: 25px;
		line-height: 1.2;
		text-transform: uppercase;
	}

	.description {
		font-size: 20px;
		line-height: 1.5;
	}
`;
