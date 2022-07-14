import logo from 'static/images/musinsa-logo.jpeg';

import HeaderOptions from './HeaderOptions';
import {
	StyledHeader,
	StyledHeaderContent,
	StyledHeaderLogoWrapper,
	StyledHeaderLogo,
} from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContent>
				<StyledHeaderLogoWrapper>
					<StyledHeaderLogo src={logo} alt="logo" />
				</StyledHeaderLogoWrapper>
				<HeaderOptions />
			</StyledHeaderContent>
		</StyledHeader>
	);
};

export default Header;
