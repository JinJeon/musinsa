import logo from 'static/images/musinsa-logo.jpeg';
import Button, { TypeButtonPropsInfo } from 'Components/Button';
import {
	StyledHeader,
	StyledHeaderLogoWrapper,
	StyledHeaderLogo,
	StyledHeaderButtons,
} from './header.styles';

const buttonsInfo: TypeButtonPropsInfo[] = [
	{ id: 0, content: '검색', icon: 'search' },
	{ id: 1, content: '세일상품' },
	{ id: 2, content: '단독상품' },
	{ id: 3, content: '품절포함' },
];

const Header = () => {
	const buttons = buttonsInfo.map((info) => (
		<Button key={info.id} info={info} />
	));

	return (
		<StyledHeader>
			<StyledHeaderLogoWrapper>
				<StyledHeaderLogo src={logo} alt="logo" />
			</StyledHeaderLogoWrapper>
			<StyledHeaderButtons>{buttons}</StyledHeaderButtons>
		</StyledHeader>
	);
};

export default Header;
