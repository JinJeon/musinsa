import logo from 'static/images/musinsa-logo.jpeg';
import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
	${({ theme: { colors } }) => css`
		background-color: ${colors.white};
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`}
`;

export const StyledHeaderLogo = styled.img.attrs({
	src: `${logo}`,
	alt: 'logo',
})`
	width: 10rem;
	margin: 0.5rem 0;
`;
