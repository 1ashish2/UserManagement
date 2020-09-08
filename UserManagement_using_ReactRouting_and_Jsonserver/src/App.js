import React from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './component/NotFound';
import Adduser from './component/users/Adduser';
import Edituser from './component/users/Edituser';
import Viewuser from './component/users/Viewuser';
import Userlist from './component/users/Userlist';
function App() {
  return (
    <Router>
      <div className="Appp">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/userlist" component={Userlist} />
        <Route exact path="/users/add" component={Adduser} />
        <Route exact path="/users/edit/:id" component={Edituser} />
        <Route exact path="/users/view/:id" component={Viewuser} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
