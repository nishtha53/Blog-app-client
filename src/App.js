import Topbar from "./components/Topbar/TopBar";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/single";
import Home from "./pages/homepage/Homepage";
import single from "./pages/single/single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
        {user ? <Home /> : <Login />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">
        {user ? <Settings /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
