import { Outlet } from 'react-router-dom';
import { NavBar } from '../../shared';
import styles from './PrivateLayout.module.css';
import { useTheme } from '../../context';
import Footer from '../../shared/Footer/Footer';

const PrivateLayout = () => {

	const { theme } = useTheme();

	return (
		<div className={`${styles['private-layout']} ${theme} `}>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
 		</div>
	);
};

export default PrivateLayout;