import { useState } from 'react';
import { useAuth, useForm } from '../../hooks';
import { LoginForm } from '../../components';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [error, setError] = useState('');

  const {isLoading, isLoggedIn, login} = useAuth();
  const {formState, onInputChange, handleSubmit} = useForm({ email: '', password: ''});
  const navigate = useNavigate();

  const submitForm = async (event) => {
    console.log(`Email: ${ formState.email }, Password: ${ formState.password } `);
    
    // SIMULANDO PETICION A UN SERVIDORx
    await login();

    navigate('/app/home');
  }

  if(isLoggedIn) return <Navigate to='/app/home' />

  return (
    <LoginForm 
      isLoading={ isLoading }
      handleSubmit={ handleSubmit(submitForm)} 
      formState={ formState }
      onInputChange={ onInputChange }
      error={ error }
    />
  )
};

export default LoginPage;