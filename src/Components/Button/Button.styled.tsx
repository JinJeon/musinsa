import styled, { css } from 'styled-components';

type TStyledButtonProps = {
	isSelected?: boolean;
	isActive?: boolean;
};

const StyledButton = styled.button<TStyledButtonProps>`
	${({ theme: { colors, fonts }, isSelected, isActive }) => css`
		${fonts.small};
		color: ${colors.grey7};
		border: solid 1px ${colors.grey4};
		border-radius: 1rem;
		padding: 0.4rem 0.8rem;
		display: flex;
		align-items: center;
		gap: 0.2rem;

		path {
			fill: ${colors.grey7};
		}

		svg {
			width: ${fonts.regular['font-size']};
			height: ${fonts.regular['font-size']};
		}

		:hover {
			${!isActive &&
			css`
				border-color: ${colors.black};
				color: ${colors.black};
				font-weight: 700;
				path {
					fill: ${colors.black};
				}
			`}
		}

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
