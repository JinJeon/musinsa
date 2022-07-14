import styled, { css } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
	${({ theme: { colors } }) => css`
		background-color: ${colors.white};
		position: sticky;
		top: 0;
		z-index: 3;
	`}
`;

export const StyledHeader = styled.header`
	padding: 0.5rem;
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
