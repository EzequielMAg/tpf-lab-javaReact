import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { EmployeeListPage, EmployeePage, HomePage, LoginPage, NotFoundPage, RegisterPage } from '../pages'
import { PrivateLayout, PublicLayout } from '../layouts';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* -----------  RUTAS PUBLICAS  -----------*/}
        <Route path="/" element={<PublicLayout />} >
          <Route index element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

        {/* -----------  RUTAS PRIVADAS  -----------*/}
        <Route path="/app" element={<PrivateRoute><PrivateLayout /></PrivateRoute>} >
          <Route index element={<Navigate to="/app/home" />} />
          <Route path='home' element={<HomePage />} />
          <Route path='employee' element={<EmployeeListPage />} />
          <Route path='employee/:id' element={<EmployeePage />} />
        </Route>
      </Routes>
    </Router >
  )
}

export default AppRouter;