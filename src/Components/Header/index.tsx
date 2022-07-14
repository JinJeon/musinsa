import logo from 'static/images/musinsa-logo.jpeg';

import HeaderOptions from './HeaderOptions';
import {
	StyledHeaderWrapper,
	StyledHeader,
	StyledHeaderLogoWrapper,
	StyledHeaderLogo,
} from './header.styles';

const Header = () => {
	return (
		<StyledHeaderWrapper>
			<StyledHeader>
				<StyledHeaderLogoWrapper>
					<StyledHeaderLogo src={logo} alt="logo" />
				</StyledHeaderLogoWrapper>
				<HeaderOptions />
			</StyledHeader>
		</StyledHeaderWrapper>
	);
};

export default Header;
