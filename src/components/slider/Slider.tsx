import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

const StyledSwiperSlide = styled(SwiperSlide)`
	width: auto;
	min-width: 300px; // Минимальная ширина для каждого слайда
	max-width: 400px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #eee;
`;

interface SliderProps {
	className?: string;
}

export const SliderContainer: FC<SliderProps> = ({ className }) => {
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

	return (
		<div className={className}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
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
				<StyledSwiperSlide>
					13 сентября — частное солнечное затмение, видимое в Южной Африке и
					части Антарктиды
				</StyledSwiperSlide>
				<StyledSwiperSlide>
					Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
					галактик, получившую обозначение GN-z11
				</StyledSwiperSlide>
				<StyledSwiperSlide>
					Компания Tesla официально представила первый в мире электрический
					грузовик Tesla Semi
				</StyledSwiperSlide>
				<StyledSwiperSlide>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore
					rem fugiat et. Nostrum optio, soluta, ab voluptatum iure distinctio
					vitae asperiores modi sunt culpa tempore dolorum consectetur? Fugit,
					explicabo.
				</StyledSwiperSlide>
				<StyledSwiperSlide>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum alias
					aperiam rem blanditiis sequi, incidunt quis veniam possimus vel
					provident consequuntur. Ut labore quaerat itaque officiis fugiat at
					minus tenetur.
				</StyledSwiperSlide>
				<StyledSwiperSlide>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quae
					unde tempora nesciunt, non natus voluptatem, delectus doloremque at
					nulla adipisci nemo perspiciatis consequuntur nam a totam labore autem
					nobis.
				</StyledSwiperSlide>
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
`;
