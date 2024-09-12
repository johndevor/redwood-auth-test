import { Router, Route } from '@redwoodjs/router';
import HomePage from 'src/pages/HomePage/HomePage';
import LoginPage from 'src/pages/LoginPage/LoginPage';

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      {/* Add other routes here */}
    </Router>
  );
};

export default Routes;
