import styles from './PageWrapper.module.scss';

const PageWrapper = ({ children }) => (
	<div className={styles['page-wrapper']}>
		<div className={styles.section__wrapper}>
			<section>{children}</section>
		</div>
	</div>
);

export default PageWrapper;
