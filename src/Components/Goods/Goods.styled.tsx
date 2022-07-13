import styled, { css } from 'styled-components';

export const StyledGoods = styled.div`
	${({ theme: { colors } }) => css`
		color: ${colors.black};
		width: 50%;
	`}
`;

export const StyledGoodsImg = styled.img`
	width: 100%;
	aspect-ratio: 5 / 6;
`;

export const StyledGoodsInfo = styled.div`
	margin: 1.4rem 0.7rem;
`;

export const StyledGoodsName = styled.div`
	${({ theme: { fonts } }) => css`
		${fonts.bold};
		margin-top: 0.8rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	`}
`;

export const StyledBrandName = styled.div`
	${({ theme: { fonts } }) => css`
		${fonts.small};
	`}
`;

export const StyledGoodsPriceWrapper = styled.div``;

export const StyledGoodsOriginPrice = styled.div`
	${({ theme: { colors } }) => css`
		color: ${colors.grey6};
	`}
`;
