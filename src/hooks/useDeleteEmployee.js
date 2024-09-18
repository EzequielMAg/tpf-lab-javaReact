import { useState } from 'react';
import { deleteEmployee } from '../helpers';

const useDeleteEmployee = (updateEmployees) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const deleteEmployeeById = async (id) => {
    setIsLoading(true);
    setError('');
    try {
      await deleteEmployee(id);
      console.log("Eliminando el usuario -> " + id);
      // Opcionalmente, podrías hacer algo después de eliminar, como actualizar la lista de empleados
      updateEmployees();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteEmployeeById, isLoading, error };
};

export default useDeleteEmployee;
