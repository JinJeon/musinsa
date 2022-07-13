import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	${({ theme: { colors } }) => css`
		border: solid 1px ${colors.grey4};
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		gap: 0.4rem;

		path {
			fill: ${colors.grey5};
		}
	`}
`;

export default StyledButton;
