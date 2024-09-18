import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";



const HomePage = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles['content']}>
        <h1>Herramienta web para administrar a tu equipo de trabajo</h1>
        <p>Podras visualizar la informacion sobre tu equipo.</p>
        <NavLink to='/app/employee'  className={styles['side-button']}>GO TO MANAGE</NavLink>
      </div>
    </div>
  );
};

export default HomePage;