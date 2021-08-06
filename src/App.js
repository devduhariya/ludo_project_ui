import React from 'react';
import '../src/Components/Style.css';
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
import EditPlayerAmount from './Components/EditPlayerAmount';
import AdminSellChips from './Components/AdminSellChips';
import AdminBuyChips from './Components/AdminBuyChips';
import WonLost from './Components/WonLost';
 
function App() {
  const role = JSON.parse(localStorage.getItem('login'));
  return (

    <Router>
      <div>
      {/* <script>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
       </script> */}
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
              <Route exact path='/AdminBuyChips' component={AdminBuyChips} />            
              <Route exact path='/AdminSellChips' component={AdminSellChips} />         
              <Route exact path='/Admin/EditPlayerAmount' component={EditPlayerAmount}/>
              <Route exact path='/WonLost' component={WonLost}/> 
              {
                role.token && role.role == "admin" ?
                  <Route exact path='/Admin' component={Admin} /> : null          
              }
            </Switch>

            : null}


      </div>
    </Router>
  );
}

export default App;
