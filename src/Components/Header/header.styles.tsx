import styled, { css } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	${({ theme: { colors } }) => css`
		background-color: ${colors.white};
		position: sticky;
		top: 0;
		z-index: 2;
	`}
`;

export const StyledHeader = styled.header`
	padding: 0.5rem;
`;

export const StyledHeaderLogoWrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledHeaderLogo = styled.img`
	width: 25%;
`;

export const StyledHeaderButtons = styled.div`
	margin-top: 0.4rem;
	display: flex;
	gap: 0.2rem;
`;
