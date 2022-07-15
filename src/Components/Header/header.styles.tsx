import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
	${({ theme: { colors } }) => css`
		background-color: ${colors.white};
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 3;
	`}
`;

export const StyledHeaderContent = styled.div`
	${({ theme: { defaultWidth } }) => css`
		${defaultWidth};
		padding: 0.5rem;
		margin: 0 auto;
		width: 100%;
		max-width: 700px;
		min-width: 350px;
	`}
`;

export const StyledHeaderLogoWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledHeaderLogo = styled.img`
	width: 25%;
`;
