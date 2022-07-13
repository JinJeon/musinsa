import { createGlobalStyle, css } from 'styled-components';

const Normalize = createGlobalStyle`
	${({ theme: { fonts, colors } }) => css`
		body {
			${fonts.main};
			background-color: ${colors.background};
			width: 100vw;
			height: 100vh;
		}

		div {
			box-sizing: border-box;
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
