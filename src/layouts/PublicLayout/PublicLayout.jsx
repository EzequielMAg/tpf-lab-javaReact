import { Outlet } from 'react-router-dom';
import styles from './PublicLayout.module.css';

const PublicLayout = () => {
	return (
		<div className={styles.publiclayout}>
			<h2>PublicLayout works!</h2>
			<Outlet />
		</div>
	);
};

export default PublicLayout;