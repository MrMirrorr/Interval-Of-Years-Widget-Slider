import { css, Interpolation } from 'styled-components';

interface Sizes {
	mobile: string;
	tablet: string;
	desktop: string;
	largeDesktop: string;
}

const sizes: Sizes = {
	mobile: '575px',
	tablet: '767px',
	desktop: '991px',
	largeDesktop: '1199px',
};

export const media = {
	mobile: (
		strings: TemplateStringsArray,
		...interpolations: Interpolation<{}>[]
	) => css`
		@media (max-width: ${sizes.mobile}) {
			${css(strings, ...interpolations)};
		}
	`,
	tablet: (
		strings: TemplateStringsArray,
		...interpolations: Interpolation<{}>[]
	) => css`
		@media (max-width: ${sizes.tablet}) {
			${css(strings, ...interpolations)};
		}
	`,
	desktop: (
		strings: TemplateStringsArray,
		...interpolations: Interpolation<{}>[]
	) => css`
		@media (max-width: ${sizes.desktop}) {
			${css(strings, ...interpolations)};
		}
	`,
	largeDesktop: (
		strings: TemplateStringsArray,
		...interpolations: Interpolation<{}>[]
	) => css`
		@media (max-width: ${sizes.largeDesktop}) {
			${css(strings, ...interpolations)};
		}
	`,
};
