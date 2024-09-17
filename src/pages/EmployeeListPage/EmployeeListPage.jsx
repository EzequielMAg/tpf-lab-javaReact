import { formatDate } from '../../helpers';
import { useFetchEmployees } from '../../hooks';
import styles from './EmployeeListPage.module.css';

const EmployeeListPage = ({ }) => {

	const { employees, isLoading, error } = useFetchEmployees();

	if (isLoading) return <p>Cargando...</p>;

	if (error) return <p className={styles.error}>{error}</p>;

	return (
		/* <div className={styles.employeelistpage}>
		</div> */
		<>
			<h2 className={styles.title}>Lista de empleados</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>DNI</th>
						<th>NOMBRE</th>
						<th>APELLIDO</th>
						<th>EMAIL</th>
						<th className={styles.dateColumn}>NACIMIENTO</th>
						<th className={styles.dateColumn}>INGRESO</th>
						<th className={styles.dateColumn}>REGISTRADO</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee, index) => (
						<tr key={employee.documentNumber} className={index % 2 === 0 ? styles.rowDark : styles.rowLight}>
							<td>{employee.documentNumber}</td>
							<td>{employee.name}</td>
							<td>{employee.lastName}</td>
							<td>{employee.email}</td>
							<td className={styles.dateColumn} >{formatDate(employee.birthDate)}</td>
							<td className={styles.dateColumn} >{formatDate(employee.entryDate)}</td>
							<td className={styles.dateColumn} >{formatDate(employee.creationDate)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</ >
	);
};

export default EmployeeListPage;