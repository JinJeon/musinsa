import styled from 'styled-components';

export const StyledSelectedFilters = styled.div`
	display: flex;
	gap: 0.2rem;
`;

export const StyledSelectedFilterBtns = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.2rem;
	flex-grow: 1;
`;

export const StyledResetFilterBtn = styled.button`
	height: fit-content;
	width: fit-content;
	display: flex;
	padding: 0.4rem;

	svg {
		width: 0.8rem;
		height: 0.8rem;
	}
`;
