import { FC } from 'react';
import { useFadeInOut } from '../../hooks';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface CurrentTitleProps {
	className?: string;
	title: string;
	isRotating: boolean;
}

const CurrentTitleContainer: FC<CurrentTitleProps> = ({
	className,
	title,
	isRotating,
}) => {
	const { elementFadeInOutRef } = useFadeInOut(isRotating);

	return (
		<div className={className} ref={elementFadeInOutRef}>
			{title}
		</div>
	);
};

export const CurrentTitle = styled(CurrentTitleContainer)`
	margin: 0;
	position: absolute;
	top: 155px;
	left: calc(50% + 180px);
	z-index: 1;
	font-size: 20px;
	font-weight: 700;
	line-height: 1.5;

	${media.tablet`
		top: 47%;
		left: 0;
	`}

	${media.mobile`
		left: 20px;
	`}
`;
