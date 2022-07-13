import Button, { TypeButtonPropsInfo } from 'Components/Button';
import {
	StyledHeader,
	StyledHeaderLogoWrapper,
	StyledHeaderLogo,
	StyledHeaderButtons,
} from './header.styles';

const buttonsInfo: TypeButtonPropsInfo[] = [
	{ content: '검색', icon: 'search' },
	{ content: '세일상품' },
	{ content: '단독상품' },
	{ content: '품절포함' },
];

const Header = () => {
	const buttons = buttonsInfo.map(({ content, icon }) => (
		<Button info={{ content, icon }} />
	));

	return (
		<StyledHeader>
			<StyledHeaderLogoWrapper>
				<StyledHeaderLogo />
			</StyledHeaderLogoWrapper>
			<StyledHeaderButtons>{buttons}</StyledHeaderButtons>
		</StyledHeader>
	);
};

export default Header;
