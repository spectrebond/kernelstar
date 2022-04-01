import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from "./Courses";
import Videos from "./Videos";
import Teams from "./Teams";
import './App.css'
import Account from "./Account";
import Documents from "./Documents";
import Notes from "./Notes";
import Error from "./component/Error";
import About from "./About";
import Faq from "./Faq";
import ResetPassword from "./ResetPassword";
import ReachUs from "./ReachUs";
import Login from "./Login";
import Register from "./Register";
import Jobs from './Jobs';
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/reset/:rid'>
            <ResetPassword />
          </Route>
          <Route path='/faq'>
            <Faq />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/docs'>
            <Documents />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/notes'>
            <Notes />
          </Route>
          <Route path='/error'>
            <Error />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
          <Route path ='/reachus'>
            <ReachUs />
            </Route>
          <Route path='/videos'>
            <Videos />
          </Route>
          <Route path='/courses'>
            <Courses />
          </Route>
          <Route path='/jobs'>
            <Jobs />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
