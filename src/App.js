import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css'; 

const Hats = () => (
  <div>
    Hats
  </div>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop/hats" component={Hats}></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
