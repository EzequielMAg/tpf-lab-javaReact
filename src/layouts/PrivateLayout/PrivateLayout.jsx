import { NavBar } from '../../shared';
import styles from './PrivateLayout.module.css';

const PrivateLayout = ({ children }) => {
	return (
		<div className={styles['private-layout']}>
			<NavBar />
			<main>{ children }</main>
			<footer></footer>
 		</div>
	);
};

export default PrivateLayout;