import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Crisis from "./pages/Crisis";

function Main(props) {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />}></Route>
      <Route path="/story" component={Story}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/crisis" component={Crisis}></Route>
    </Switch>
  );
}

export default Main;
