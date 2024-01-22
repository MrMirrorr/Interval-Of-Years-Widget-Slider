import { FC } from 'react';
import styled from 'styled-components';

interface YearsIntervalProps {
	className?: string;
	minYear: number;
	maxYear: number;
}

const YearsIntervalContainer: FC<YearsIntervalProps> = ({
	className,
	minYear,
	maxYear,
}) => {
	return (
		<div className={className}>
			<span className="min">{minYear}</span>
			<span className="max">{maxYear}</span>
		</div>
	);
};

export const YearsInterval = styled(YearsIntervalContainer)`
	position: absolute;
	top: 400px;
	left: 50%;
	z-index: 1;
	transform: translate(-50%, -50%);
	font-size: 200px;
	font-weight: 700;
	letter-spacing: -4px;
	line-height: 0.8;

	.min {
		margin-right: 70px;
		color: #5d5fef;
	}

	.max {
		color: #ef5da8;
	}
`;
