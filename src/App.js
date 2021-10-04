import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Store from './components/Store/Store';

function App() {
  return (
    <div>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/services">
            <Header></Header>
              <Services></Services>
              <Footer></Footer>
            </Route>

            <Route path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </Route>

            <Route path="/store">
              <Header></Header>
              <Store></Store>
              <Footer></Footer>
            </Route>
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
