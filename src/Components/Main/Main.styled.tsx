import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
	${({ theme: { colors, defaultWidth } }) => css`
		${defaultWidth};
		background-color: ${colors.white};
		flex-grow: 1;
		margin: 0 auto;
		width: 100%;
		display: flex;
		flex-direction: column;
	`}
`;

export const StyledGoodsList = styled.div`
	width: 100%;
	display: flex;
	flex-flow: wrap;
`;

export const StyledMainBottom = styled.div`
	display: flex;
	min-height: 5rem;
	flex-grow: 1;
`;
