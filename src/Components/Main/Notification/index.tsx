import icons, { TypeIcons } from 'static/icons';
import LoadingAnimation from 'Components/Loading';
import StyledNotification from './Notification.styled';

type TNotificationProps = {
	mention?: string;
	icon?: TypeIcons;
};

const Notification = ({ mention, icon }: TNotificationProps) => {
	const notification = mention ? (
		[icon && icons[icon], mention]
	) : (
		<LoadingAnimation color="grey7" size={60} border={10} />
	);
	return <StyledNotification>{notification}</StyledNotification>;
};

export default Notification;
