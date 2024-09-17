import styles from './ThemeToggleButton.module.css';

import SunIcon from '../../assets/sun.svg';
import MoonIcon from '../../assets/moon.svg';
import { useTheme } from '../../context';
import { useEffect } from 'react';

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

	return (
		<button
			className={styles.switch}
			type="button"
			title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
			onClick={toggleTheme}
		>
			<span className={styles.check}>
				<span className={styles.icon}>
					<img src={theme === 'light' ? SunIcon : MoonIcon} alt="Theme icon" />
				</span>
			</span>
		</button>
	);
};

export default ThemeToggleButton;