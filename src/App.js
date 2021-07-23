// Imports dependecies
import {Router, Route} from 'wouter'
// Import css
import './app.css'
// Import components
import Home from './pages/home'
import Nav from './components/navbar'
import Sidebar from './components/sidebar'

function App() {
  return (
      <>
        <Router>
          <Nav />
          <div className="main-layout">
            <Sidebar />

            <Route path="/" component={Home} />

          </div>
        </Router>
      </>
    );
}

export default App;


