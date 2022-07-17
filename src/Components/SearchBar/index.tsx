import React, { useContext, useState } from 'react';

import { englishTyping, koreanTyping } from 'Util';
import useInfiniteGoods from 'Hooks/useGoods';
import { FiltersDispatchContext } from 'Context/FiltersContext';
import icons from 'static/icons';
import {
	StyledSearchBarForm,
	StyledSearchBar,
	StyledSearchBtn,
} from './SearchBar.styled';

type TCheckIsKeyword = {
	keywords: Set<string>;
	word: string;
};

const SEARCH_GOODS = '상품명 검색';
const { search } = icons;

// 들어오는 단어가 "ㄷㄹㄴㅁ", "ㄹㄷ", "ㄱ" 와 같은 경우, 첫 단어만 영어로 바꿔 리턴
const checkIsAllKorean = (word: string) => {
	const koreanPart = /[ㄱ-ㅎ|ㅏ-ㅣ]/g;
	const filteredWord = word.replaceAll(koreanPart, '');
	if (filteredWord.length) return false;

	const order = koreanTyping.indexOf(word[0]);
	const englishWord = englishTyping[order];
	return englishWord;
};

const checkIsWordIncluded = ({ keywords, word }: TCheckIsKeyword) => {
	const wordCheckedIsKorean = checkIsAllKorean(word);
	const comparedWord = wordCheckedIsKorean || word;
	const keywordsValues = keywords.values();
	let targetValue = keywordsValues.next().value;
	let isWordIncluded = false;
	let wordIncluding;

	while (!isWordIncluded && targetValue) {
		isWordIncluded = targetValue.includes(comparedWord);
		if (isWordIncluded) wordIncluding = targetValue;
		targetValue = keywordsValues.next().value;
	}

	return wordIncluding;
};

const SearchBar = () => {
	const [inputValue, setInputValue] = useState('');
	const filtersDispatch = useContext(FiltersDispatchContext);
	const { goodsDataListPages } = useInfiniteGoods(false);

	const handleSubmitSearchBar = (event: React.FormEvent) => {
		event.preventDefault();
		if (!inputValue.length) return;

		const keywords = goodsDataListPages?.at(-1)?.newGoodsKeywords;
		if (!keywords) return;

		const wordIncluding = checkIsWordIncluded({ keywords, word: inputValue });
		if (!wordIncluding) return;

		filtersDispatch({ type: 'ADD_WORD', content: wordIncluding });
		setInputValue('');
	};

	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setInputValue(value);
	};

	return (
		<StyledSearchBarForm onSubmit={handleSubmitSearchBar}>
			<StyledSearchBtn type="submit">{search}</StyledSearchBtn>
			<StyledSearchBar
				value={inputValue}
				placeholder={SEARCH_GOODS}
				onChange={handleChangeInput}
			/>
		</StyledSearchBarForm>
	);
};

export default SearchBar;
