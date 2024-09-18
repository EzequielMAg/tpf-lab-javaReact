import styles from './Footer.module.css'; 
// import birthLogo from './../../assets/bird-logo.png'; 

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer-container']}>
				<div className={styles['footer-logo']}>
					{/* <img src={birthLogo} alt="Logo: pajarito animado" /> */}
				</div>
				<ul className={styles['footer-links']}>
					<li className={styles['footer-item']}>
						<a href="#home" className={styles['footer-link']}>Home</a>
					</li>
					<li className={styles['footer-item']}>
						<a href="#about" className={styles['footer-link']}>About</a>
					</li>
					<li className={styles['footer-item']}>
						<a href="#services" className={styles['footer-link']}>Services</a>
					</li>
					<li className={styles['footer-item']}>
						<a href="#contact" className={styles['footer-link']}>Contact</a>
					</li>
				</ul>
				<div className={styles['footer-copy']}>
					&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
