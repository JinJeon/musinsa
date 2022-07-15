import styled, { css } from 'styled-components';

const StyledNotification = styled.div`
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

export default StyledNotification;
