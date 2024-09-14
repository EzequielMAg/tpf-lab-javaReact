import { useAuth } from './hooks'
import { HomePage, LoginPage } from './pages'
// import LoginPage from './pages/LoginPage/LoginPage';
function App() {

  const { isLoggedIn, login, logout } = useAuth();

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLogin={ login } />
       ) : (
        <h1>ESTOY LOGUEADO!</h1>
        // <HomePage />
       )}
    </>
  );
}

export default App;
