import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import {Home, Profile, Transactions, Airtime, Data, Electricity, CableTv, FAQ, Contact, Logout, NotFound} from './pages'
import {AirtimePackages} from './subPages'
import {Header, Sidebar, PageDisplay, Footer} from './components'

function App() {
  return (<div className="App">
      <Router>
        <Header />
        <Sidebar />
        {/* <PageDisplay /> */}
        <Switch>
          <Route path='/' exact>  
            <Home />
          </Route>
          <Route path='/profile' exact>  
            <Profile />
          </Route>
          <Route path='/airtime' exact>  
            <Airtime />
          </Route>
          <Route path='/airtime/:id' exact>  
            <AirtimePackages />
          </Route>
          <Route path='/data' exact>  
            <Data />
          </Route>
          <Route path='/electricity' exact>  
            <Electricity />
          </Route>
          <Route path='/cabletv' exact>  
            <CableTv />
          </Route>
          <Route path='/transactions' exact>  
            <Transactions />
          </Route>
          <Route path='/faqs' exact>  
            <FAQ />
          </Route>
          <Route path='/contact' exact>  
            <Contact />
          </Route>
          <Route path='/logout' exact>  
            <Logout/>
          </Route>
          {/* <Route>
            <Redirect to='/notfound'/>
          </Route> */}
          <Route path='*' >  
            <NotFound/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
