import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Specialists from './pages/Specialists/Specialists';
import Footer from './pages/Footer/Footer';
import Contact from './pages/Contact/Contact';
import NotFound from './NotFound/NotFound';
import Details from './pages/Details/Details/Details';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/contact">
            <Contact></Contact>
          </Route>
          <Route  path="/specialist">
            <Specialists></Specialists>
          </Route>
          <PrivateRoute  path="/details/:description">
            <Details></Details>
          </PrivateRoute>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
