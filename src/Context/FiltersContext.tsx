import React, { ReactNode, createContext, useReducer } from 'react';

type TFilter = 'SALE' | 'EXCLUSIVE' | 'SOLDOUT';

type TFilters = {
	options: TFilter[];
	words: string[];
};

type TReducerAction =
	| {
			type: 'RESET';
			content: undefined;
	  }
	| {
			type: 'ADD_OPTION';
			content: TFilter;
	  }
	| {
			type: 'ADD_WORD';
			content: string;
	  }
	| {
			type: 'REMOVE_OPTION';
			content: TFilter;
	  }
	| {
			type: 'REMOVE_WORD';
			content: string;
	  };

const defaultFilters: TFilters = { options: [], words: [] };

const reducer = (filters: TFilters, action: TReducerAction): TFilters => {
	const { type, content } = action;
	const { options, words } = filters;

	switch (type) {
		case 'RESET':
			return defaultFilters;

		case 'ADD_OPTION':
			return { options: [...options, content], words };

		case 'ADD_WORD':
			return { options, words: [...words, content] };

		case 'REMOVE_OPTION':
			return { options: options.filter((option) => option !== content), words };

		case 'REMOVE_WORD':
			return { options, words: words.filter((word) => word !== content) };

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
