import './App.css';
import Home from './views/home/home'
import Navbar from './components/navbar/navbar'
import ExploreBeforeLogin from './views/exploreBeforeLogin/exploreBeforeLogin'
import {
  Switch,
  Route
} from "react-router-dom";
function App() {
  let react: string = "https://reactjs.org"
  return (
    <div className="bg-orange-400 App">
        <Navbar/>
      <Switch>
        <Route path="/exploreBeforeLogin">
          <ExploreBeforeLogin/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  ); 
}

export default App;
