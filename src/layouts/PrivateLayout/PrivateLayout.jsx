import styles from './PrivateLayout.module.css';

const PrivateLayout = ({ children }) => {
	return (
		<div className={styles['private-layout']}>
			<header>
				<nav></nav>	
			</header>			
			<main>{ children }</main>
			<footer></footer>
 		</div>
	);
};

export default PrivateLayout;