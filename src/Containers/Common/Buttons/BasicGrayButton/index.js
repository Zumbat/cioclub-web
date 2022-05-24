import PrimaryButton from '../PrimaryButton';

const BasicGrayButton = ({
	text, onClick, iconSrc, width = '105px'
}) => (
	<PrimaryButton
		width={width}
		height='28px'
		fontSize='13px'
		padding='8px 5px'
		background='#59565D'
		text={text}
		leftIconSrc={iconSrc}
		onClick={onClick}
	/>
);

export default BasicGrayButton;
