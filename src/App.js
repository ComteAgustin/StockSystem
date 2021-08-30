// Imports dependecies
import { Router, Route } from 'wouter'
import useLogin from 'hooks/useLogin'
// Import css
import 'app.css'
// Import components
import { PrivateRoute } from 'helpers/PrivateRoute'

import Nav from 'components/navbar'
import Sidebar from 'components/sidebar'
import Signin from 'pages/signin'
import Config from 'pages/config'
import Reports from 'pages/reports'
import Dashboard from 'pages/dashboard'
import Articles from 'pages/articles'
import Providers from 'pages/providers'
import ProvidersTable from 'pages/providersTable'
import Stock from 'pages/stock'
import StockTable from 'pages/stockTable'


function App() {

  const { isLogged } = useLogin()

  return (
    <>
      <Router>
        <Nav />
        <Route path="/signin" component={Signin} />
        <div className="main-layout">
          {
            isLogged ? (<Sidebar />) : null
          }
          <div className="routes">
            <Router>
              <PrivateRoute path="/" component={Dashboard} />
              <PrivateRoute path="/reports" component={Reports} />
              <PrivateRoute path="/articles" component={Articles} />
              <PrivateRoute path="/providers" component={Providers} />
              <PrivateRoute path="/providerstable" component={ProvidersTable} />
              <PrivateRoute path="/stock" component={Stock} />
              <PrivateRoute path="/stocktable" component={StockTable} />
              <PrivateRoute path="/config" component={Config} />
            </Router>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;


