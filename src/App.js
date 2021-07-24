import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import BuyChips from './Components/BuyChips';
import SellChips from './Components/SellChips';
import Header from './Components/Header';
import Refer from './Components/Refer';
import Query from './Components/Query';
import Help from './Components/Help';
import Register from './Components/Register';
import TermsandConditions from './Components/TermsAndConditions';
import Admin from './Components/Admin';
import Play from './Components/Play';
import Totalchips from './Components/Totalchips';
import GameResult from './Components/GameResult';
import GetResult from './Components/GetResult';
//import AdminSellChips from './Components/AdminSellChips';

function App() {
  const role = JSON.parse(localStorage.getItem('login'));
  return (

    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/termsAndConditions' component={TermsandConditions} />
        </Switch>
        {
          localStorage.getItem("login") ?
            <Switch>
              <Route exact path='/buyChips' component={BuyChips} />
              <Route exact path='/sellChips' component={SellChips} />
              <Route exact path='/refer' component={Refer} />
              <Route exact path='/query' component={Query} />
              <Route exact path='/help' component={Help} />
              <Route exact path='/Play' component={Play} />
              <Route exact path='/chips' component={Totalchips} />
              <Route exact path='/gameResult' component={GameResult} />
              <Route exact path='/admin/gameResult' component={GetResult} />
              {
                role.token && role.role == "admin" ?
                  <Route exact path='/Admin' component={Admin} /> : null
              }
              {/* {
                role.token && role.role == "admin" ?
                  <Route exact path='/AdminSellChips' component={AdminSellChips} /> : null
              } */}


            </Switch>

            : null}


      </div>
    </Router>
  );
}

export default App;
