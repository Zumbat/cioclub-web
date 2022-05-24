import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrimaryButton from '../../Containers/Common/Buttons/PrimaryButton';
import Modal from '../../Containers/Common/Modal';
import styles from './Error.module.scss';
import { errorActions, selectors } from './store';

export default () => {
	const error = useSelector(selectors.getError());
	const dispatch = useDispatch();
	const clear = () => {
		dispatch(errorActions.clearError());
	};
	return (
		<Modal
			width="330px"
			height="300px"
			isModalOpen={error}
			setIsModalOpen={clear}
		>
			<div className={styles.modal__content}>
				<h3>Error</h3>
				<p>{error}</p>
				<div className={styles.modal__actions}>
					<PrimaryButton
						text="annulla"
						background="transparent"
						padding="8px"
						height="auto"
						fontSize="15px"
						width="180px"
						color="#dcdcdd"
						onClick={clear}
					/>
				</div>
			</div>
		</Modal>
	);
};
