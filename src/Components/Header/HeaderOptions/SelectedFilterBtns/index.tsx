import { useContext } from 'react';

import { FiltersContext, FiltersDispatchContext } from 'Context/FiltersContext';
import Button from 'Components/Button';
import StyledSelectedFilterBtns from './SelectedFilterBtns.styled';

const filterOptionsContents = {
	isSale: '세일상품',
	isExclusive: '단독상품',
	isSoldOut: '품절포함',
};

const SelectedFilterBtns = () => {
	const { options, words } = useContext(FiltersContext);
	const filtersDispatch = useContext(FiltersDispatchContext);

	const seletedFilterOptions = Array.from(options).map((option) => (
		<Button
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
			info={{ content: word, icon: 'close' }}
			isActive={true}
			shape="rect"
			clickHandler={() =>
				filtersDispatch({ type: 'REMOVE_WORD', content: word })
			}
		/>
	));

	const selectedFilters = [...seletedFilterOptions, ...seletedFilterWords];

	return <StyledSelectedFilterBtns>{selectedFilters}</StyledSelectedFilterBtns>;
};

export default SelectedFilterBtns;
