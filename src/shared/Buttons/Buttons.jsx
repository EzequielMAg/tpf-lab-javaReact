import { useAuth } from '../../hooks';
import styles from './Buttons.module.css';

const Buttons = ({ }) => {
	const { logout } = useAuth();
  const navigate = useNavigate
	();

	const onLogout = () => {
    logout();
    navigate("/");
  }

	return (
		<button
			type="button"
			className={styles.btn}
			onClick={onLogout}
			title="Esto es un boton que hereda estilos"
		>
			volver
		</button>
	);
};

export default Buttons;