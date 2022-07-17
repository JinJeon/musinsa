import { useContext } from 'react';

import { FiltersContext, FiltersDispatchContext } from 'Context/FiltersContext';
import icons from 'static/icons';
import Button from 'Components/Button';
import {
	StyledSelectedFilters,
	StyledSelectedFilterBtns,
	StyledResetFilterBtn,
} from './SelectedFilters.styled';

const filterOptionsContents = {
	isSale: '세일상품',
	isExclusive: '단독상품',
	includeSoldOut: '품절포함',
};
const { reset } = icons;

const SelectedFilters = () => {
	const { options, words } = useContext(FiltersContext);
	const filtersDispatch = useContext(FiltersDispatchContext);

	const seletedFilterOptions = Array.from(options).map((option) => (
		<Button
			key={option}
			info={{ content: filterOptionsContents[option], icon: 'close' }}
			isActive={true}
			shape="rect"
			clickHandler={() =>
				filtersDispatch({ type: 'REMOVE_OPTION', content: option })
			}
		/>
	));

	const seletedFilterWords = Array.from(words).map((word) => (
		<Button
			key={word}
			info={{ content: word, icon: 'close' }}
			isActive={true}
			shape="rect"
			clickHandler={() =>
				filtersDispatch({ type: 'REMOVE_WORD', content: word })
			}
		/>
	));

	const selectedFilters = [...seletedFilterOptions, ...seletedFilterWords];

	const handleClickResetBtn = () => {
		filtersDispatch({ type: 'RESET', content: undefined });
	};

	return (
		<StyledSelectedFilters>
			<StyledSelectedFilterBtns>{selectedFilters}</StyledSelectedFilterBtns>
			<StyledResetFilterBtn onClick={handleClickResetBtn}>
				{reset}
			</StyledResetFilterBtn>
		</StyledSelectedFilters>
	);
};

export default SelectedFilters;
