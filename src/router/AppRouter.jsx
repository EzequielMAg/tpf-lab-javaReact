import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { EmployeePage, HomePage, LoginPage, RegisterPage } from '../pages'
import { PrivateLayout, PublicLayout } from '../layouts';

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
            <Route path='/register' element={ <PublicLayout><RegisterPage /></PublicLayout> } />
            <Route path='/home' element={ <PrivateLayout><HomePage /></PrivateLayout>  } />
            <Route path='/employee' element={ <PrivateLayout><EmployeePage /></PrivateLayout> } />
        </Routes>
    </Router>
  )
}

export default AppRouter;













