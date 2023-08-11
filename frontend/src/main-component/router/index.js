import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage'
// import ServiceDetailsPage from '../ServiceDetailsPage'
import CataloguePage from '../CataloguePage'
import ProductDetailsPage from '../ProductDetailsPage.js';
import ProjectPage from '../ProjectPage'
import ProjectDetailsPage from '../ProjectDetailsPage'
import TeamPage from '../TeamPage'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'


const AllRoute = () => {

  return (
    <div className="App">
       <Router basename={window.location.pathname || '' }>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            {/* <Route path='/home' component={Homepage} /> */}
            <Route path='/about' component={AboutPage} />
            <Route path='/service' component={ServicePage} />
            {/* <Route path='/service-details' component={ServiceDetailsPage} /> */}
            <Route path='/catalogue' component={CataloguePage} />
            <Route path='/product/:id' component={ProductDetailsPage} />
            <Route path='/project' component={ProjectPage} />
            <Route path='/project-details' component={ProjectDetailsPage} />
            {/* <Routeproduct-detail' component={Catalogue} /> */}
            {/* <Route path='/pricing' component={PricingPage}/> */}
            <Route path='/team' component={TeamPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/404' component={ErrorPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
          </Switch>
      </Router>

    </div>
  );
}

export default AllRoute;
