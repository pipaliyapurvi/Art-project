import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Showcases from './Showcases';
import ArtArticles from './ArtArticles';
import ArtistPrograms from './ArtistPrograms';
import Footer from './Footer';
import Shoppg from './Shoppg';
import Categorypg from './Categorypg';
import Blogpg from './Blogpg';
import Contactpg from './Contactpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Art from './Art';
import Login from "./Login";


function App() {
  return (
    <>
      {/* <Header></Header>
      <Hero></Hero>
      <Showcases></Showcases>
      <ArtArticles></ArtArticles>
      <ArtistPrograms></ArtistPrograms>
      <Footer></Footer> */}
      {/* <Shoppg></Shoppg> */}
      {/* <Categorypg></Categorypg> */}
      {/* <Blogpg></Blogpg> */}
      {/* <Contactpg></Contactpg> */}
      <Router>

        <Switch>
          <Route exact path="/">
            <Art />
          </Route>
          <Route path="/Shop">
            < Shoppg />
          </Route>
          <Route path="/Category">
            <Categorypg />
          </Route>
          <Route path="/Blog">
            <Blogpg />
          </Route>
          <Route path="/Contact">
            <Contactpg />
          </Route>
        </Switch>
      </Router>

      <Router>
        <Switch>  
          <Route path="/login" component={Login} />
          <Route path="/">
          </Route>
        </Switch>
      </Router>





    </>
  );
}

export default App;
