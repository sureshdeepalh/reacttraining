import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import AlbumView from "./pages/AlbumView";
import ImageDetailsView from "./pages/ImageDetailsView";
import "./App.scss";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/album/:id" component={AlbumView} />
        <Route path="/image/:id" component={ImageDetailsView} />
        <Route path="/auth" component={Auth} />
        <Route>{() => <h1>Not match</h1>}</Route>
      </Switch>
    </Layout>
  );
}

export default App;
