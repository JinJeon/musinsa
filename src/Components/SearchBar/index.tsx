import React, { useContext, useState } from 'react';

import { FiltersDispatchContext } from 'Context/FiltersContext';
import icons from 'static/icons';
import { StyledSearchBarForm, StyledSearchBar } from './SearchBar.styled';

const SEARCH_GOODS = '상품명 검색';
const { search } = icons;

const SearchBar = () => {
	const [inputValue, setInputValue] = useState('');
	const filtersDispatch = useContext(FiltersDispatchContext);

	const handleSubmitSearchBar = (event: React.FormEvent) => {
		event.preventDefault();
		filtersDispatch({ type: 'ADD_WORD', content: inputValue });
		setInputValue('');
	};

	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setInputValue(value);
	};

	return (
		<StyledSearchBarForm onSubmit={handleSubmitSearchBar}>
			{search}
			<StyledSearchBar
				value={inputValue}
				placeholder={SEARCH_GOODS}
				onChange={handleChangeInput}
			/>
		</StyledSearchBarForm>
	);
};

export default SearchBar;
