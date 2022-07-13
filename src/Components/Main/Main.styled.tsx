import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
	${({ theme: { colors } }) => css`
		background-color: ${colors.white};
		flex: 1;
	`}
`;

export const StyledGoodsList = styled.div`
	width: 100%;
	display: flex;
	flex-flow: wrap;
`;
