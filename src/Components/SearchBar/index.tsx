import icons from 'static/icons';
import { StyledSearchBarForm, StyledSearchBar } from './SearchBar.styled';

const SEARCH_GOODS = '상품명 검색';
const { search } = icons;

const SearchBar = () => {
	return (
		<StyledSearchBarForm>
			{search}
			<StyledSearchBar placeholder={SEARCH_GOODS} />
		</StyledSearchBarForm>
	);
};

export default SearchBar;
