// Imports dependecies
import {Router, Route, Switch} from 'wouter'
// Import css
import 'app.css'
// Import components
import Nav from 'components/navbar'
import Sidebar from 'components/sidebar'
import Signin from 'pages/signin'
import Dashboard from 'pages/dashboard'
import Articles from 'pages/articles'
import Providers from 'pages/providers'
import Stock from 'pages/stock'

function App() {
  return (
      <>
        <Route path="/signin" component={Signin} />
        <Router>
          <Nav />
          <div className="main-layout">
            <Sidebar />
            <div className="routes">
              <Switch>
                <Route path="/" component={Dashboard} />
                <Route path="/articles" component={Articles} />
                <Route path="/providers" component={Providers} />
                <Route path="/stock" component={Stock} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
}

export default App;


