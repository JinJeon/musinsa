import { useState, useContext } from 'react';

import {
	FiltersContext,
	FiltersDispatchContext,
	TFilter,
	TFilterOption,
} from 'Context/FiltersContext';
import SearchBar from 'Components/SearchBar';
import Button, { TButtonPropsInfo } from 'Components/Button';
import SelectedFilters from './SelectedFilters';
import { StyledHeaderOptions, StyledFilterBtns } from './HeaderOptions.styled';

type TFilterButtonInfo = {
	id: number;
	content: TFilter;
	option: TFilterOption;
};

const filterBtnsInfos: TFilterButtonInfo[] = [
	{ id: 1, content: '세일상품', option: 'isSale' },
	{ id: 2, content: '단독상품', option: 'isExclusive' },
	{ id: 3, content: '품절포함', option: 'includeSoldOut' },
];
const searchBtnInfo: TButtonPropsInfo = {
	content: '검색',
	icon: 'search' as const,
};

const HeaderOptions = () => {
	const [isSearching, setIsSearching] = useState(false);
	const { options, words } = useContext(FiltersContext);
	const filtersDispatch = useContext(FiltersDispatchContext);
	const isFilters = !!(options.size || words.size);

	const handleClickSearchBtn = () => {
		setIsSearching(!isSearching);
	};

	const handleClickFilterButton = (option: TFilterOption) => {
		const isOption = options.has(option);
		const type = isOption ? 'REMOVE_OPTION' : 'ADD_OPTION';
		filtersDispatch({ type, content: option });
	};

	const filterBtns = filterBtnsInfos.map(({ content, id, option }) => (
		<Button
			key={id}
			info={{ content }}
			isSelected={options.has(option)}
			clickHandler={() => handleClickFilterButton(option)}
		/>
	));

	return (
		<StyledHeaderOptions>
			<StyledFilterBtns>
				<Button
					info={searchBtnInfo}
					isActive={isSearching}
					clickHandler={handleClickSearchBtn}
				/>
				{filterBtns}
			</StyledFilterBtns>
			{isSearching && <SearchBar />}
			{isFilters && <SelectedFilters />}
		</StyledHeaderOptions>
	);
};

export default HeaderOptions;
