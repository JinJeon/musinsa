import icons, { TypeIcons } from 'static/icons';
import StyledButton from './Button.styled';

type TypeButtonProps = {
	content: string;
	icon?: TypeIcons;
};

const Button = ({ content, icon }: TypeButtonProps) => {
	return (
		<StyledButton>
			{content}
			{icon && icons[icon]}
		</StyledButton>
	);
};

export default Button;
