import { Outlet } from 'react-router-dom';
import { NavBar } from '../../shared';
import styles from './PrivateLayout.module.css';

const PrivateLayout = () => {
	return (
		<div className={styles['private-layout']}>
			<NavBar />
			<main><Outlet /></main>
			<footer></footer>
 		</div>
	);
};

export default PrivateLayout;