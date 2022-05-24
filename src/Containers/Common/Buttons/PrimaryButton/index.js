import clx from 'classnames';

import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({
	background = 'linear-gradient(180deg, #409CFF 0%, #32527F 100%)',
	color = '#FFFF',
	height = '40px',
	width = 'auto',
	fontSize = '17px',
	padding = '8px',
	borderRadius = '6px',
	border,
	text,
	leftIconSrc,
	rightIconSrc,
	onClick,
	className,
	type,
	disabled
}) => (
	<button
		style={{
			height,
			width,
			fontSize,
			borderRadius,
			border,
			padding,
			color,
			background
		}}
		className={clx(
			styles.primary__btn,
			styles[`${className}`],
		)}
		onClick={onClick}
		type={type}
		disabled={disabled}
	>
		{leftIconSrc && <img className={styles['left-icon']} src={leftIconSrc} alt='icon' />}
		<span>{text}</span>
		{rightIconSrc && <img className={styles['right-icon']} src={rightIconSrc} alt='icon' />}
	</button>
);

export default PrimaryButton;
