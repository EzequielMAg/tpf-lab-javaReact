import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { EmployeePage, HomePage, LoginPage, RegisterPage } from '../pages'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <LoginPage /> } />
            <Route path='/register' element={ <RegisterPage /> } />
            <Route path='/home' element={ <HomePage /> } />
            <Route path='/employee' element={ <EmployeePage /> } />
        </Routes>
    </Router>
  )
}

export default AppRouter;













