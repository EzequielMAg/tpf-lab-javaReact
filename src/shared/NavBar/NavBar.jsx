import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useAuth } from '../../hooks';
import { ThemeToggleButton } from '../../components';

const NavBar = () => {

  const { logout } = useAuth();
 
  const isActive = ({ isActive }) => isActive ? styles.active : '';

  return (
    <header className={ styles['nav-bar'] }>
      <div>
        <a className={ styles['page-logo'] } href="">LOGO
          {/* <img src="" alt="Logo de la página" href="" /> */}
        </a>
      </div>

      <nav className={ styles['nav-links'] } >
        <NavLink to='/app/home' className={ isActive } >Home</NavLink>
        <NavLink to='/app/contact' className={ isActive }>Contact</NavLink>
        <NavLink to='/app/employee' className={ isActive } end>Employees</NavLink>

        <div className={styles['theme-toggle']}>
          <ThemeToggleButton />
        </div>

        <NavLink to='/' onClick={ logout }>Logout</NavLink>
      </nav>
    </header>

  );
};

export default NavBar;