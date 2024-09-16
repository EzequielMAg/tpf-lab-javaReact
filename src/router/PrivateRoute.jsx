import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks'
import styles from '../components/LoginForm/LoginForm.module.css';

const PrivateRoute = ({ children }) => {

  const { isLoggedIn, isLoading } = useAuth();

  if(isLoading) return <div className={ styles.loading }>Loading...</div> //TODO: refactorizar creando un componente spinner
 
  if( !isLoggedIn ) return <Navigate to='/' />

  return children;
}

export default PrivateRoute;