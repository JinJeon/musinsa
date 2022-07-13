import styled, { css } from 'styled-components';

const StyledMain = styled.main`
	${({ theme: { colors } }) => css`
		background-color: ${colors.white};
		flex-grow: 1;
	`}
`;

export default StyledMain;
