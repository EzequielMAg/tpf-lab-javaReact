import styles from './EmployeePage.module.css';
import { useParams } from 'react-router-dom';

const EmployeePage = ({}) => {
	const { id } = useParams();

	return (
		<div className={styles.employeepage}>
 			<h2>PAGINA DEL USUARIO</h2>
			<br />
			<p>Mostrando informacion del usuario con ID: { id }</p>
 		</div>
	);
};


export default EmployeePage;