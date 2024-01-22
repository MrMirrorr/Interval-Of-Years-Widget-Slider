import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Item } from '../../models/DataModel';
import { useFadeInOut, useSlider } from '../../hooks';
import styled from 'styled-components';
import { media } from '../../styles/media';

const StyledSwiperSlide = styled(SwiperSlide)`
	width: auto;
	min-width: 300px;
	max-width: 320px;
	height: 100%;

	${media.tablet`
		max-width: 300px;
	`}

	${media.mobile`
		min-width: 166px;
		max-width: 166px;
	`}
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
				modules={[Navigation, Pagination]}
				spaceBetween={80}
				slidesPerView={'auto'}
				breakpoints={{
					320: { spaceBetween: 25 },
					768: { spaceBetween: 80, pagination: false },
				}}
				pagination={{ clickable: true }}
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

	${media.tablet`
		margin-top: 0;
		padding-bottom: 20px;
		position: absolute;
		left: 0;
		bottom: 0;
	`}

	.swiper {
		min-height: 40px;

		${media.tablet`
			min-height: 100%;
			padding-bottom: 30%;
		`}

		${media.mobile`
			padding-left: 20px;
			padding-bottom: 120px;
		`}
	}

	.swiper-button-prev,
	.swiper-button-next {
		width: 40px;
		height: 40px;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);

		${media.tablet`
			display: none;
		`}

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

	.swiper-pagination {
		.swiper-pagination-bullet {
			width: 6px !important;
			height: 6px !important;
			margin: 0 5px !important;
			background-color: #42567a !important;
			opacity: 0.4;

			&-active {
				background-color: #42567a;
				opacity: 1;
			}
		}
	}

	.year {
		margin-bottom: 15px;
		color: #3877ee;
		font-family: 'Bebas Neue';
		font-size: 25px;
		line-height: 1.2;
		text-transform: uppercase;

		${media.mobile`
			font-size: 16px;
		`}
	}

	.description {
		font-size: 20px;
		line-height: 1.5;

		${media.mobile`
			font-size: 14px;
		`}
	}
`;
