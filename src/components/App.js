import Newsletter from './Newsletter';
import '../index.css';
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
    <div>
      <div className= "text-xl font-medium text-primary">Sofia Acosta</div>
      <p className="text-gray-500">This is my portfolio website</p>
      <Newsletter />
    </div>
      <Nav />
      <Switch>
        <Route path="/nav">
          <Nav />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}  
export default App;