import { createGlobalStyle, css } from 'styled-components';

const Normalize = createGlobalStyle`
	${({ theme: { fonts, colors, defaultFontSize } }) => css`
		html {
			font-size: ${defaultFontSize};
		}

		* {
			${fonts.main};
			box-sizing: border-box;
		}

		body {
			background-color: ${colors.background};
			width: 100vw;
		}

		header,
		main {
			background-color: ${colors.white};
			margin: 0 auto;
			width: 100%;
			max-width: 700px;
			min-width: 350px;
		}

		button {
			cursor: pointer;
		}

		#root {
			height: 100%;
		}

		.App {
			width: 100%;
			height: auto;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	`}
`;

export default Normalize;
