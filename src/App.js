import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


import Logo from './common/img/Potential_Logo.jpg';
import BigLogo from './common/img/BigLogo.png';
import HomeComponent from './components/Home';
import MyAppComponent from './components/MyApp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Adopt from './components/Adopt';
import Footer from "./common/Footer";
import NavBar from './common/Header';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <br/>
          <Switch>
              <Route path="/" exact component= { (props) => ( <HomeComponent  /> )} />
              <Route path="/adopt" component={(props) => ( <Adopt /> )} />              
              <Route path="/aboutus" component={(props) => ( <AboutUs /> )} />
              <Route path="/contactus" component={(props) => ( <ContactUs /> )} />
              
          </Switch>
        <br/>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;




