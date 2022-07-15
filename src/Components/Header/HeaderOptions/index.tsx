import { useState, useContext } from 'react';

import {
	FiltersContext,
	FiltersDispatchContext,
	TFilter,
} from 'Context/FiltersContext';
import SearchBar from 'Components/SearchBar';
import Button, { TButtonPropsInfo } from 'Components/Button';
import SelectedFilterBtns from './SelectedFilterBtns';
import { StyledHeaderOptions, StyledFilterBtns } from './HeaderOptions.styled';

type TFilterButtonInfo = {
	id: number;
	content: TFilter;
};

const filterBtnsInfos: TFilterButtonInfo[] = [
	{ id: 1, content: '세일상품' },
	{ id: 2, content: '단독상품' },
	{ id: 3, content: '품절포함' },
];
const searchBtnInfo: TButtonPropsInfo = {
	content: '검색',
	icon: 'search' as const,
};

const HeaderOptions = () => {
	const [isSearching, setIsSearching] = useState(false);
	const filters = useContext(FiltersContext);
	const filtersDispatch = useContext(FiltersDispatchContext);

	const handleClickSearchBtn = () => {
		setIsSearching(!isSearching);
	};

	const handleClickFilterButton = (option: TFilter) => {
		const isOption = filters.options.has(option);
		const type = isOption ? 'REMOVE_OPTION' : 'ADD_OPTION';
		filtersDispatch({ type, content: option });
	};

	const filterBtns = filterBtnsInfos.map(({ content, id }) => (
		<Button
			key={id}
			info={{ content }}
			clickHandler={() => handleClickFilterButton(content)}
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
			<SelectedFilterBtns />
		</StyledHeaderOptions>
	);
};

export default HeaderOptions;
