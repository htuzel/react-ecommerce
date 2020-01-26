import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthenticationPage from './pages/authenticationpage/authenticationpage.component';
import Header from './components/header/header.component';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/authentication" component={AuthenticationPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
