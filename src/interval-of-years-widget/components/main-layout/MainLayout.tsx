import styled from 'styled-components';

export const MainLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	min-height: 100vh;
	max-width: 1470px;
	margin: 0 auto;
	padding: 136px 80px 104px;
	border-left: 1px solid rgba(66, 86, 122, 0.1);
	border-right: 1px solid rgba(66, 86, 122, 0.1);
	position: relative;
	user-select: none;

	&::before {
		display: block;
		content: '';
		width: 100%;
		height: 1px;
		position: absolute;
		top: 400px;
		left: 0;
		right: 0;
		z-index: -1;
		transform: translateY(-50%);
		background-color: rgba(66, 86, 122, 0.1);
	}

	&::after {
		display: block;
		content: '';
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: -1;
		background-color: rgba(66, 86, 122, 0.1);
	}
`;
