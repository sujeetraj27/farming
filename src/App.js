import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import SignIn from './components/auth/SiginIn';
import Signup from './components/auth/Signup';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import { connect } from 'react-redux'
import PageNotFound from './components/dashboard/PageNotFound';



class App extends Component {
  render() {
    const { auth } = this.props;
    console.log(auth)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} >

            </Route>
            <Route path='/project/:id' component={ProjectDetails} />
            {/* <Route  >
              {auth.uid  ? <Redirect to="/" /> : <SignIn />}
            </Route> */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={Signup} />
            <Route path='/create' component={CreateProject} />
            <Route path="*" component={PageNotFound} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


const MapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(MapStateToProps)(App);

