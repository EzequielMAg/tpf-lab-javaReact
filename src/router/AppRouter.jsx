import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { EmployeeListPage, EmployeePage, HomePage, LoginPage, NotFoundPage, RegisterPage } from '../pages'
import { PrivateLayout, PublicLayout } from '../layouts';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* -----------  RUTAS PUBLICAS  -----------*/}
        <Route path="/" element={<PublicLayout />} >
          <Route path="/" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

        {/* -----------  RUTAS PRIVADAS  -----------*/}
        <Route path="/" element={<PrivateRoute><PrivateLayout /></PrivateRoute>} >
          <Route path='/home' element={<HomePage />} />
          <Route path='/employee' element={<EmployeeListPage />} />
          <Route path='/employee/:id' element={<EmployeePage />} />
        </Route>

      </Routes>
    </Router >
  )
}

export default AppRouter;