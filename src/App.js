import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router';

//importing files
import Gallery from './pages/galleryPage/gallery';
import Users from './pages/usersPage/users';
import Home from './pages/homePage/home';
import Router from './router';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        {/* <div className='link-container'>
          <Link to={`/`} ><h2 className='homeLink'>Home</h2></Link>
          <Link to={`/users`} ClassName="usersLink"><h2 className='userDetails'>Users Details</h2></Link>
          <Link to={`/gallery`} ClassName="galleryLink"><h2 className='gallery'>Gallery</h2></Link>
          <Router></Router>
        </div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
