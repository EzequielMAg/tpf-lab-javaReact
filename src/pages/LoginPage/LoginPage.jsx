import { useState } from 'react';
import useForm from '../../hooks/useForm';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = ({ onLogin }) => {

  const {formState, onInputChange, handleSubmit} = useForm({ email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const submitForm = (event) => {
    setIsLoading(true);

    // SIMULANDO PETICION A UN SERVIDOR
    setTimeout(() => {
      console.log(`Email: ${ formState.email }, Password: ${ formState.password } `);
      setIsLoading(false);
      onLogin();
    }, 2000);
  }

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