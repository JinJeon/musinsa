import styled, { css } from 'styled-components';

type TStyledButtonProps = {
	shape: 'round' | 'rect';
	isSelected?: boolean;
	isActive?: boolean;
};

const StyledButton = styled.button<TStyledButtonProps>`
	${({ theme: { colors, fonts }, isSelected, isActive, shape }) => css`
		color: ${colors.grey7};
		border: solid 1px ${colors.grey4};
		display: flex;
		align-items: center;

		path {
			fill: ${colors.grey7};
		}

		${shape === 'round' &&
		css`
			${fonts.small};
			border-radius: 1rem;
			padding: 0.4rem 0.8rem;
			gap: 0.2rem;

			svg {
				width: ${fonts.regular['font-size']};
				height: ${fonts.regular['font-size']};
			}
		`}

		${shape === 'rect' &&
		css`
			${fonts.xSmall};
			border-radius: 0.3rem;
			padding: 0.3rem 0.5rem;
			gap: 0.3rem;

			svg {
				width: ${fonts.small['font-size']};
				height: ${fonts.small['font-size']};
			}
		`}

		${!isActive &&
		!isSelected &&
		css`
			:hover {
				border-color: ${colors.black};
				color: ${colors.black};
				font-weight: 700;
				path {
					fill: ${colors.black};
				}
			}
		`}

		${isSelected &&
		css`
			border-color: ${colors.blue};
			color: ${colors.blue};
			opacity: 0.7;

			path {
				fill: ${colors.blue};
			}

			:hover {
				opacity: 1;
			}
		`}

		${isActive &&
		css`
			border-color: ${colors.blue};
			background-color: ${colors.blue};
			color: ${colors.white};
			font-weight: 700;
			opacity: 0.7;

			path {
				fill: ${colors.white};
			}

			:hover {
				opacity: 1;
			}
		`}
	`}
`;

export default StyledButton;
