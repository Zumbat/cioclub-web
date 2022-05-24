import clx from 'classnames';

import styles from './SecondaryButton.module.scss';

const SecondaryButton = ({
	height = '40px',
	width = 'auto',
	color = '#FF6482',
	fontSize = '17px',
	text,
	leftIconSrc,
	outlined = false,
	onClick,
	className
}) => (
	<button
		style={{
			height,
			width,
			fontSize,
			color
		}}
		className={clx(
			styles.secondary__btn,
			{ [styles.outlined]: outlined },
			styles[`${className}`]
		)}
		onClick={onClick}
	>
		{leftIconSrc && <img src={leftIconSrc} alt='icon' />}
		{text}
	</button>
);

export default SecondaryButton;
