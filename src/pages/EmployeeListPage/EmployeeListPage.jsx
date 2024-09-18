import { formatDate } from '../../helpers';
import { useDeleteEmployee, useFetchEmployees } from '../../hooks';
import styles from './EmployeeListPage.module.css';

const EmployeeListPage = ({ }) => {

	const { employees, isLoading, error, updateEmployees } = useFetchEmployees();
	const { deleteEmployeeById, isLoading: isDeleting, error: deleteError } = useDeleteEmployee(updateEmployees);

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
						<th>NAME</th>
						<th>LASTNAME</th>
						<th className={styles['center-horizontally']}>DEPARTAMENT</th>
						<th>POSITION</th>
						<th className={styles['center-horizontally']}>EDIT</th>
						<th className={styles['center-horizontally']}>DELETE</th>
						<th className={styles['center-horizontally']}>+INFO</th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee, index) => (
						<tr key={employee.documentNumber} className={index % 2 === 0 ? styles.rowDark : styles.rowLight}>
							<td>{employee.documentNumber}</td>
							<td>{employee.name}</td>
							<td>{employee.lastName}</td>
							<td className={styles['center-horizontally']}>{employee.department}</td>
							<td>{employee.position}</td>
							<td className={styles['center-horizontally']}>
								<button className={`${styles.button} ${styles.editButton}`}>
									<i className={`${['fa-regular']} ${['fa-pen-to-square']}`} />
								</button>
							</td>
							<td className={styles['center-horizontally']}>
								<button
									className={`${styles.button} ${styles.deleteButton}`}
									onClick={() => deleteEmployeeById(employee.id)} >
									{isDeleting ? 'Eliminando...' : <i className={`${['fa-regular']} ${['fa-trash-can']}`} />}
								</button>
								{deleteError && <p className={styles.error}>{deleteError}</p>}
							</td>
							<td className={styles['center-horizontally']}>
								<button
									className={`${styles.button} ${styles.moreInfoButton}`} >
									<i className={`${['fa-regular']} ${['fa-user']}`} />
								</button>
								{deleteError && <p className={styles.error}>{deleteError}</p>}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</ >
	);
};

export default EmployeeListPage;