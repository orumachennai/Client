import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Main from '../components/main';
import home from '../components/home';
import addDonor from '../components/addDonor';
import addFund from '../components/addFund';
import fundView from '../components/fundView';

const Routes = () => {
  return (
   <Route path="/" component={Main}>
    <IndexRoute component={home} />
	<Route path="/home" component={home} />
	<Route path="/addDonor" component={addDonor} />
	<Route path="/addFund" component={addFund} />
	<Route path="/fundView" component={fundView} />

  </Route>
  );
};

export default Routes;
