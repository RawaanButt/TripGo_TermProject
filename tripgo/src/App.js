import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import TopMenu from "./components/TopMenu";
import LandingPage from "./components/landingpage";
import Products from "./components/products/products";
import cart from "./components/cart";
import logout from "./components/logout";
import NotFound from "./components/NotFound";
import signup from "./components/signup";
import NewTour from "./components/products/NewTour";
import UpdateTour from "./components/products/UpdateTour";
import login from "./components/auth/login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      {" "}
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/products/new" component={NewTour}></Route>
            <Route path="/products/update/:id" component={UpdateTour}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/register" component={Register}></Route>

            <Route path="/products" component={Products}></Route>
            <Route path="/signup" component={signup}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/cart/" component={cart}></Route>
            <Route path="/logout" component={logout}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={LandingPage}></Route>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
