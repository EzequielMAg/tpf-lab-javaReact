import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { EmployeePage, HomePage, LoginPage, RegisterPage } from '../pages'
import { PrivateLayout, PublicLayout } from '../layouts';
import PrivateRoute from './PrivateRoute';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />

        <Route
          path='/register'
          element={
            <PublicLayout>
              <RegisterPage />
            </PublicLayout>}
        />

        <Route
          path='/home'
          element={
            <PrivateRoute>
              <PrivateLayout>
                <HomePage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='/employee'
          element={
            <PrivateRoute>
              <PrivateLayout>
                <EmployeePage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />

        <Route
          path='*'
          element={
              <PublicLayout>
                <NotFoundPage />
              </PublicLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default AppRouter;













