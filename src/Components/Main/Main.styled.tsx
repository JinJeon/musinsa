import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
	${({ theme: { colors, defaultWidth } }) => css`
		${defaultWidth};
		background-color: ${colors.white};
		flex-grow: 1;
		margin: 0 auto;
		width: 100%;
		display: flex;
	`}
`;

export const StyledGoodsList = styled.div`
	display: flex;
	flex-flow: wrap;
`;

export const StyledEmptyResult = styled.div`
	${({ theme: { colors } }) => css`
		background-color: ${colors.white};
		color: ${colors.grey6};
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;

		path {
			fill: ${colors.grey6};
		}
	`}
`;
