import styles from './LoginForm.module.css';

const LoginForm = ({ isLoading, handleSubmit, formState, onInputChange, error }) => {
	if(isLoading) return <div className={ styles.loading }>Loading...</div>;  //TODO: refactorizar creando un componente spinner

  return (
    <div className={ styles['login-form'] }>
      <form id={ styles['login-form'] } autoComplete="off" onSubmit={ handleSubmit }>

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
        </div>
      </form>
    </div >

  );
};

export default LoginForm;