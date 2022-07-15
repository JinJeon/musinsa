import icons, { TypeIcons } from 'static/icons';
import StyledButton from './Button.styled';

type TButtonPropsInfo = {
	content: string;
	icon?: TypeIcons;
};

type TypeButtonProps = {
	info: TButtonPropsInfo;
	isSelected?: boolean;
	isActive?: boolean;
	clickHandler?: () => void;
};

const Button = ({
	info: { content, icon },
	isSelected,
	isActive,
	clickHandler,
}: TypeButtonProps) => {
	return (
		<StyledButton
			isSelected={isSelected}
			isActive={isActive}
			onClick={clickHandler}
		>
			{content}
			{icon && icons[icon]}
		</StyledButton>
	);
};

export default Button;
export type { TButtonPropsInfo };
