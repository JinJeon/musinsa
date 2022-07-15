import React, { ReactNode, createContext, useReducer } from 'react';

type TFilter = '세일상품' | '단독상품' | '품절포함';

type TFilterOption = 'isSale' | 'isExclusive' | 'includeSoldOut';

type TFilters = {
	options: Set<TFilterOption>;
	words: Set<string>;
};

type TReducerAction =
	| {
			type: 'RESET';
			content: undefined;
	  }
	| {
			type: 'ADD_OPTION';
			content: TFilterOption;
	  }
	| {
			type: 'ADD_WORD';
			content: string;
	  }
	| {
			type: 'REMOVE_OPTION';
			content: TFilterOption;
	  }
	| {
			type: 'REMOVE_WORD';
			content: string;
	  };

const defaultFilters: TFilters = { options: new Set(), words: new Set() };

const reducer = (filters: TFilters, action: TReducerAction): TFilters => {
	const { type, content } = action;
	const { options, words } = filters;

	const newOptions = new Set(options);
	const newWords = new Set(words);

	switch (type) {
		case 'RESET':
			return defaultFilters;

		case 'ADD_OPTION':
			newOptions.add(content);
			return { options: newOptions, words };

		case 'ADD_WORD':
			newWords.add(content);
			return { options, words: newWords };

		case 'REMOVE_OPTION':
			newOptions.delete(content);
			return { options: newOptions, words };

		case 'REMOVE_WORD':
			newWords.delete(content);
			return { options, words: newWords };

		default:
			return { ...filters };
	}
};

const FiltersContext = createContext<TFilters>(defaultFilters);
const FiltersDispatchContext = createContext<React.Dispatch<TReducerAction>>(
	() => null
);

const FilterProvider = ({ children }: { children: ReactNode }) => {
	const [filters, filtersDispatch] = useReducer(reducer, defaultFilters);

	return (
		<FiltersDispatchContext.Provider value={filtersDispatch}>
			<FiltersContext.Provider value={filters}>
				{children}
			</FiltersContext.Provider>
		</FiltersDispatchContext.Provider>
	);
};

export { FilterProvider, FiltersContext, FiltersDispatchContext };
export type { TFilter, TFilterOption };
