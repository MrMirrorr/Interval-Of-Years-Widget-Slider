import styled from 'styled-components';
import { media } from '../../styles/media';

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
	overflow-x: hidden;

	font-family: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
		'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 1.5;
	color: #42567a;
	background-color: #f4f5f9;

	${media.largeDesktop`
		max-width: 992px;
	`}

	${media.desktop`
		max-width: 768px;
	`}

	${media.tablet`
		max-width: 576px;
		padding: 60px 0 13px;
		border: 0;
		min-height: 740px;
		height: 100vh;
		max-height: 780px;
	`}

	${media.mobile`
		width: 100%;
		max-width: 575px;
		padding-left: 20px;
		padding-right: 20px;
		min-height: 568px;
	`}

	&::before {
		display: block;
		content: '';
		width: 100%;
		height: 1px;
		position: absolute;
		top: 400px;
		left: 0;
		right: 0;
		z-index: 1;
		transform: translateY(-50%);
		background-color: rgba(66, 86, 122, 0.1);

		${media.mobile`
			top: 55%;
			left: 20px;
			right: 20px;
			width: auto;
		`}
	}

	&::after {
		display: block;
		content: '';
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 1;
		background-color: rgba(66, 86, 122, 0.1);

		${media.tablet`
			display: none;
		`}
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;
