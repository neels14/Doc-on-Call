import React from 'react';
import './App.css';
import Login from './Login';
import VideoPatient from './VideoPatient';
import Header from './Header';
import PatientView from './PatientView';
import DoctorView from './DoctorView';
import VideoDoctor from './VideoDoctor'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from './config';
import { 
  Switch, 
  BrowserRouter as Router, 
  Route, 
  Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lato" />      
        <Header />
        <Router>
          <div>
            <Link to ='/VideoPatient'> </Link>
            <Link to ='/DoctorView'> </Link>
            <Link to ='/PatientView'></Link>
            <Link to ='/VideoPatient'> </Link>
          </div>
          <Switch>
            <Route exact path="/VideoPatient" component>
              <VideoPatient
              apiKey={config.API_KEY}
              sessionId={config.SESSION_ID}
              token={config.TOKEN}></VideoPatient>
            </Route>
            <Route exact path="/VideoDoctor" component>
              <VideoDoctor
              apiKey={config.API_KEY}
              sessionId={config.SESSION_ID}
              token={config.TOKEN}></VideoDoctor>
            </Route>
              <Route path="/PatientView" >
              <PatientView />
              </Route>
            <Route path="/DoctorView" >
              <DoctorView />
              </Route>
            <Route>
              <Login />
            </Route>
          </Switch>
          
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;