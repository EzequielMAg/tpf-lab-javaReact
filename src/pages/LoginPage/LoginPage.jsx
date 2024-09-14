import { useState } from 'react';
import useForm from '../../hooks/useForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {formState, onInputChange, handleSubmit} = useForm({ email: '', password: ''});
  
  if(loading) return <div>Loading...</div>;

  return (
    <div className={ styles['login-page'] }>
      <form id={ styles['login-form'] } autoComplete="off" onSubmit={ handleSubmit(() =>  console.log('Formulario enviado')) }>

        <h4>Iniciá sesión</h4>

        <div className={ styles['form-content'] }>

          <div className={ styles['form-group'] }>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Ingresá tu email" 
              required 
              autoComplete="username" 
              value= { formState.email }
              onChange= { onInputChange }
            />
          </div>

          <div className={ styles['form-group'] }>
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Ingresá tu contraseña" 
              required 
              autoComplete="current-password" 
              value= { formState.password }
              onChange= { onInputChange }
            />

            <div className={ styles['for-got-password'] }>
              <a>¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          <button type="submit" className={ styles.btn }>Iniciar sesión</button>

          <div className={ styles['open-account'] }>
            <p>¿No tiene una cuenta? <a /* routerLink="/auth/register" */> Registrate </a></p>
          </div>
        </div>
      </form>
    </div >

  );
};

export default LoginPage;