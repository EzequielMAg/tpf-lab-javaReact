import { useEffect, useState } from "react";
import { getEmployees } from "../helpers";

const useFetchEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getEmployeesList = async () => {
    try {
      const employeesList = await getEmployees(); 
      setEmployees(employeesList);
    } catch (err) {
      setError(err.message); // Capturamos el error lanzado desde getEmployees
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEmployeesList();
  }, []);

  return {
    employees,
    isLoading,
    error
  };
};

export default useFetchEmployees;
