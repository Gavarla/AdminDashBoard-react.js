import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './app.css';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from './components/User';
import NewUser from './components/NewUser';
import ProductList from './components/ProductList';
import Product from './components/Product';
import NewProduct from './components/NewProduct';


function App() {

  return (
    < Router>
      <Topbar />

      <div className="container">
      <Sidebar /> 
      
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>

        <Route path="/users">
         <UserList />
        </Route>
        
        <Route path="/user/:userId">
         <User />
        </Route>

        <Route path="/newUser">
         <NewUser />
        </Route>

        <Route path="/products">
         <ProductList />
        </Route>

        <Route path="/product/:productId">
         <Product />
        </Route>

        <Route path="/newProduct">
         <NewProduct />
        </Route>

      </Switch>
      </div>
    
    </Router>
  );
}

export default App;
