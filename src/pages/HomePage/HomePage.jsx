import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import styles from "./HomePage.module.css";

const HomePage = ({ }) => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <div className={ styles['home-page'] }>
      <h2>HomePage works!</h2>
      <button
        type="button"
        className={ styles.btn }
        onClick={ onLogout }
        title="Esto es un boton que hereda estilos"
      >
        volver
      </button>
    </div>
  );
};

export default HomePage;