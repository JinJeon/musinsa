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
	padding: 1.4rem 0.7rem;
`;

export const StyledExclusiveLogo = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.bold};
		${fonts.small};
		position: absolute;
		padding: 0.5rem 0.5rem;
		margin-top: calc(0rem - 1.4rem - 0.5rem - 0.5rem);
		// 1.4rem = StyledGoodsInfo padding, 0.5rem = self padding top, 0.5rem = self font size
		display: flex;
		background-color: ${colors.green};
		color: ${colors.white};
	`}
`;

export const StyledGoodsName = styled.div`
	${({ theme: { fonts } }) => css`
		${fonts.bold};
		height: 2rem;
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

export const StyledGoodsPriceWrapper = styled.div`
	${({ theme: { fonts, colors } }) => css`
		${fonts.bold};
		display: flex;
		justify-content: space-between;
		margin-top: 0.8rem;

		> :nth-child(2) {
			color: ${colors.red};
		}
	`}
`;

export const StyledGoodsOriginPrice = styled.div`
	${({ theme: { colors, fonts } }) => css`
		${fonts.bold};
		${fonts.small};
		color: ${colors.grey6};
		margin-top: 0.1rem;
		text-decoration: line-through;
	`}
`;
