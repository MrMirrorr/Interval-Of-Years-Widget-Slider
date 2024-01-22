import { FC, MouseEventHandler } from 'react';
import { normalizeNumber } from './utils/normalizeNumber';
import { ControlButton } from '../control-button/ControlButton';
import styled from 'styled-components';

interface ControlButtonsProps {
	className?: string;
	incrementCurrentIndex: MouseEventHandler<HTMLButtonElement>;
	decrementCurrentIndex: MouseEventHandler<HTMLButtonElement>;
	isRotating: boolean;
	currentIndex: number;
	pointsCount: number;
}

const ControlButtonsContainer: FC<ControlButtonsProps> = ({
	className,
	incrementCurrentIndex,
	decrementCurrentIndex,
	isRotating,
	currentIndex,
	pointsCount,
}) => {
	return (
		<div className={className}>
			<div className="counter">
				{normalizeNumber(currentIndex + 1)}/{normalizeNumber(pointsCount)}
			</div>
			<div className="buttons">
				<ControlButton
					handleClick={decrementCurrentIndex}
					disabled={isRotating || currentIndex === 0}
				>
					<svg
						width="10"
						height="14"
						viewBox="0 0 10 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
							stroke="#42567A"
							strokeWidth="2"
						/>
					</svg>
				</ControlButton>
				<ControlButton
					handleClick={incrementCurrentIndex}
					disabled={isRotating || currentIndex === pointsCount - 1}
				>
					<svg
						width="10"
						height="14"
						viewBox="0 0 10 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.50012 0.750001L7.75012 7L1.50012 13.25"
							stroke="#42567A"
							strokeWidth="2"
						/>
					</svg>
				</ControlButton>
			</div>
		</div>
	);
};

export const ControlButtons = styled(ControlButtonsContainer)`
	align-self: flex-start;

	.counter {
		margin-bottom: 20px;
		font-size: 14px;
	}

	.buttons {
		display: flex;
		gap: 20px;
	}
`;
