import styled, { css } from 'styled-components';

export const StyledGoods = styled.div`
	${({ theme: { colors } }) => css`
		color: ${colors.red};
	`}
`;

export const StyledGoodsImg = styled.img`
	width: 50%;
`;
