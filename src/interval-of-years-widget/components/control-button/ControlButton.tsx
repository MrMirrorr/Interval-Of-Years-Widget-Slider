import { FC, MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

interface ControlButtonProps {
	className?: string;
	children: ReactNode;
	handleClick: MouseEventHandler<HTMLButtonElement>;
	disabled: boolean;
}

const ControlButtonContainer: FC<ControlButtonProps> = ({
	className,
	children,
	handleClick,
	disabled,
}) => {
	return (
		<button onClick={handleClick} className={className} disabled={disabled}>
			{children}
		</button>
	);
};

export const ControlButton = styled(ControlButtonContainer)`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 1px solid rgba(66, 86, 122, 0.5);
	background-color: transparent;
	cursor: pointer;
	transition: background 0.2s linear;

	${media.tablet`
		width: 25px;
		height: 25px;
	`}

	&:disabled {
		opacity: 0.5;
		cursor: auto;
	}

	&:hover:not(:disabled) {
		background-color: #fff;
	}
`;
