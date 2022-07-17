import styled, { css } from 'styled-components';

export const StyledSearchBarForm = styled.form`
	${({ theme: { colors, fonts } }) => css`
		display: flex;
		gap: 0.3rem;
		align-items: center;
		padding: 0.3rem 0.4rem;
		border: solid 1px ${colors.grey5};
		border-radius: 1rem;

		path {
			fill: ${colors.grey7};
			width: ${fonts.medium['font-size']};
			height: ${fonts.medium['font-size']};
		}

		:focus-within {
			border-color: ${colors.black};

			path {
				fill: ${colors.black};
			}
		}
	`}
`;

export const StyledSearchBar = styled.input`
	${({ theme: { fonts, colors } }) => css`
		${fonts.small};
		outline: none;
		border: none;
		color: ${colors.grey7};
		flex: 1;

		:focus {
			color: ${colors.black};

			::-webkit-input-placeholder {
				color: transparent;
			}
		}
	`}
`;

export const StyledSearchBtn = styled.button`
	display: flex;
`;
