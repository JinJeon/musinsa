import icons, { TypeIcons } from 'static/icons';
import StyledButton from './Button.styled';

type TButtonPropsInfo = {
	content: string;
	icon?: TypeIcons;
};

type TypeButtonProps = {
	info: TButtonPropsInfo;
	shape?: 'round' | 'rect';
	isSelected?: boolean;
	isActive?: boolean;
	clickHandler?: () => void;
};

const Button = ({
	info: { content, icon },
	shape = 'round',
	isSelected,
	isActive,
	clickHandler,
}: TypeButtonProps) => {
	return (
		<StyledButton
			shape={shape}
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
