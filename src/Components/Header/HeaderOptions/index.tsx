import { useState } from 'react';

import SearchBar from 'Components/SearchBar';
import Button, { TButtonPropsInfo } from 'Components/Button';
import StyledHeaderButtons from './HeaderOptions.styled';

const filterButtonsInfos: TButtonPropsInfo[] = [
	{ id: 1, content: '세일상품' },
	{ id: 2, content: '단독상품' },
	{ id: 3, content: '품절포함' },
];
const searchButtonInfo: TButtonPropsInfo = {
	id: 0,
	content: '검색',
	icon: 'search' as const,
};

const HeaderOptions = () => {
	const [isSearching, setIsSearching] = useState(false);
	const filterButtons = filterButtonsInfos.map((info) => (
		<Button key={info.id} info={info} />
	));

	const handleClickSearchBtn = () => {
		setIsSearching(!isSearching);
	};

	return (
		<>
			<StyledHeaderButtons>
				<Button
					info={searchButtonInfo}
					isActive={isSearching}
					clickHandler={handleClickSearchBtn}
				/>
				{filterButtons}
			</StyledHeaderButtons>
			{isSearching && <SearchBar />}
		</>
	);
};

export default HeaderOptions;
