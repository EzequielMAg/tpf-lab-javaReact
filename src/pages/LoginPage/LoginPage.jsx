import useForm from '../../hooks/useForm';
import styles from './LoginPage.module.css';
import PropTypes from 'prop-types';

const LoginPage = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formState, onInputChange, hadleSubmit] = useForm({ email: '', password: ''});
  
  if(loading) return <div>Loading...</div>;

  return (
    <div className={ styles['login-page'] }>
      <form id="login-form" autoComplete="off" onSubmit={ handledSubmit() }>
        <div className={ styles.logo }>
          {/* <img src="./../../../../../assets/images/logo-sin-nombre.png" alt=""> */}
        </div>

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

LoginPage.propTypes = {};

export default LoginPage;