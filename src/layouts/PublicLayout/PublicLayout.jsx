import styles from './PublicLayout.module.css';

const PublicLayout = ({ children }) => {
	return (
		<div className={styles.publiclayout}>
 			<h2>PublicLayout works!</h2>
			{ children } 
 		</div>
	);
};

export default PublicLayout;