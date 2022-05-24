import { ReactComponent as CashIcon } from '../../../assets/svg/cash.svg';
import { ReactComponent as ErrorIcon } from '../../../assets/svg/error-solid.svg';
import { ReactComponent as LightningIcon } from '../../../assets/svg/lightning.svg';
import { ReactComponent as RechargeIcon } from '../../../assets/svg/recharge-solid.svg';
import { ReactComponent as StationIcon } from '../../../assets/svg/station-solid.svg';
import { ReactComponent as UserCheckIcon } from '../../../assets/svg/user-check.svg';
import { ReactComponent as UsersIcon } from '../../../assets/svg/users.svg';
import styles from '../Dashboard.module.scss';

export const summaryCards = {
	common: [
		{
			id: 1,
			title: 'Charge Stations',
			value: '1',
			icon: () => <StationIcon />,
			detailsLink: ''
		},
		{
			id: 2,
			title: 'Recharges',
			value: '93',
			icon: () => <RechargeIcon className={styles.recharge__icon} />,
			detailsLink: ''
		},
		{
			id: 3,
			isComplex: true,
			icon: () => <LightningIcon />,
			detailsLink: ''
		},
		{
			id: 4,
			title: 'Monthly revenue',
			value: '178,00',
			icon: () => <CashIcon />,
			detailsLink: ''
		},
	],
	users: [
		{
			id: 5,
			title: 'Registered users',
			value: '0',
			icon: () => <UsersIcon />,
			detailsLink: ''
		},
		{
			id: 6,
			title: 'Authorized users',
			value: '0',
			icon: () => <UserCheckIcon />,
			detailsLink: ''
		},
		{
			id: 7,
			title: 'NEXTCHARGE network',
			value: '1',
			icon: () => <StationIcon className={styles.station__icon} />,
			detailsLink: ''
		},
		{
			id: 8,
			title: <p>Recent errors <span>1D</span></p>,
			value: '0',
			icon: () => <ErrorIcon />,
			detailsLink: ''
		},
	]
};
