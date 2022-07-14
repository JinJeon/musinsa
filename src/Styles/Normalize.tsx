import { createGlobalStyle, css } from 'styled-components';

const Normalize = createGlobalStyle`
	${({ theme: { fonts, colors, defaultFontSize } }) => css`
		html {
			font-size: ${defaultFontSize};
		}

		* {
			${fonts.regular};
			box-sizing: border-box;
		}

		body {
			background-color: ${colors.background};
		}

		button {
			cursor: pointer;
		}

		.App {
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			min-height: 100vh;
		}
	`}
`;

export default Normalize;
