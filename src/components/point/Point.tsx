import { FC } from 'react';
import styled from 'styled-components';

interface PointProps {
	className?: string;
	left: string;
	top: string;
	index: number;
	currentIndex: number;
	handleClick: Function;
}

const PointContainer: FC<PointProps> = ({ className, handleClick, index, left, top }) => {
	const number = index + 1;

	return (
		<div className={className} onClick={() => handleClick(index)}>
			<div className="number">{number}</div>
		</div>
	);
};

export const Point = styled(PointContainer)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6px;
	height: 6px;
	border: 1px solid #42567a;
	border-radius: 50%;
	background-color: #42567a;
	position: absolute;
	transform: translate(-50%, -50%);
	left: ${({ left }) => left};
	top: ${({ top }) => top};
	z-index: 1;
	transition: all 0.3s ease;
	cursor: pointer;
	overflow: hidden;
	user-select: none;

	${({ index, currentIndex }) =>
		index === currentIndex &&
		`
		width: 56px;
		height: 56px;
		line-height: 30px;
		background-color: #f4f5f9;
	`};

	&:hover {
		width: 56px;
		height: 56px;
		background-color: #f4f5f9;
	}
`;
