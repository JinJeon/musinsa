import icons, { TypeIcons } from 'static/icons';
import StyledButton from './Button.styled';

type TypeButtonPropsInfo = {
	content: string;
	icon?: TypeIcons;
};

type TypeButtonProps = {
	info: TypeButtonPropsInfo;
};

const Button = ({ info: { content, icon } }: TypeButtonProps) => {
	return (
		<StyledButton>
			{content}
			{icon && icons[icon]}
		</StyledButton>
	);
};

export default Button;
export type { TypeButtonPropsInfo };
