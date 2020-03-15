import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  Login  from '../components/authentification/Login';
import  Register  from '../components/authentification/Register';


const Routes = () => {
  return (
    <section className='container'>
      {/* <Alert /> */}
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </section>
  );
};

export default Routes
