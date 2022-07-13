import { createGlobalStyle, css } from 'styled-components';

const Normalize = createGlobalStyle`
	${({ theme: { fonts, colors, defaultFontSize } }) => css`
		html {
			font-size: ${defaultFontSize};
		}

		* {
			${fonts.main};
		}

		body {
			background-color: ${colors.background};
			width: 100vw;
			height: 100vh;
		}

		div {
			box-sizing: border-box;
		}

		button {
			cursor: pointer;
		}

		#root {
			height: 100%;
		}

		.App {
			width: 100%;
			height: 100%;
			max-width: 700px;
			min-width: 350px;
			margin: 0 auto;
		}
	`}
`;

export default Normalize;
