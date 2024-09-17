import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useAuth } from '../../hooks';
import { ThemeToggleButton } from '../../components';

const NavBar = () => {

  const { isLoggedIn } = useAuth();
 
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
        <NavLink to='/app/employee' className={ isActive }>Employees</NavLink>

        <ThemeToggleButton />

        {/* {if(isLoggedIn) {
            
          } else {

          }} */}

        {/* <ng-container *ngIf="!userLoggedIn; else isLoggedIn">
        <a routerLink="/auth/login" routerLinkActive="active">Log In</a>
        <a routerLink="/auth/register" routerLinkActive="active">Register</a>
        </ng-container>
      
        <ng-template #isLoggedIn>
        <a routerLink="/orders" routerLinkActive="active">Orders</a>
      
        <a (click)="logOut()">Log Out</a>
        </ng-template> */}

      </nav>
    </header>

  );
};

export default NavBar;