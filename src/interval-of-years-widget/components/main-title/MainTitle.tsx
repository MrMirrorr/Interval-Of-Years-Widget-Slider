import styled from 'styled-components';

export const MainTitle = styled.h1`
	max-width: 353px;
	margin: 0;
	padding-left: 78px;
	font-size: 56px;
	font-weight: 700;
	line-height: 1.2;
	position: absolute;
	top: 50px;
	left: 0;
	z-index: 1;

	&::before {
		content: '';
		display: block;
		width: 5px;
		height: 100%;
		background: rgb(56, 119, 238);
		background: linear-gradient(
			0deg,
			rgba(56, 119, 238, 1) 0%,
			rgba(239, 93, 168, 1) 100%
		);
		position: absolute;
		left: 0;
		z-index: 1;
	}
`;
