import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	${({ theme: { colors, fonts } }) => css`
		${fonts.small};
		border: solid 1px ${colors.grey4};
		border-radius: 1rem;
		padding: 0.4rem 0.8rem;
		display: flex;
		gap: 0.2rem;

		path {
			fill: ${colors.grey5};
		}

		svg {
			width: ${fonts.main['font-size']};
			height: ${fonts.main['font-size']};
		}
	`}
`;

export default StyledButton;
