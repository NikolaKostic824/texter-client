import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//Components
import UserNav from "./components/user/UserNav";
import UserWriterCardHolder from "./components/user/UserWriterCardHolder";
import MimGallery from "./components/user/MimGallery";
import TextCategories from "./components/user/TextCategories";
import SingleText from "./components/user/SingleText";
import Categories from "./components/user/Categories";
import ListOfTextByWriter from "./components/user/ListOfTextByWriter";
import BackToTheTop from "./components/reusable/BackToTheTop";

export default function App() {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  const [author, setAuthor] = useState(null);
  //Callback to update writer id to display only list of text for writer with that id
  const setAuthorCallback = (e) => {
    setAuthor(e);
  };

  return (
    <div className="App">
      <UserNav />
      <Switch>
        <Route exact path="/">
          <TextCategories />
        </Route>
        <Route path="/autori">
          <UserWriterCardHolder setAuthorCallback={setAuthorCallback} />
        </Route>
        <Route path="/autor">
          <ListOfTextByWriter author={author} />
        </Route>
        <Route path="/mim-galerija">
          <MimGallery />
        </Route>
        <Route path="/politika">
          <Categories locationParam={"politika"} title={"Politika"} />
        </Route>
        <Route path="/sport">
          <Categories locationParam={"sport"} title={"Sport"} />
        </Route>
        <Route path="/priče">
          <Categories locationParam={"price"} title={"Priče"} />
        </Route>
        <Route path="/svastara">
          <Categories locationParam={"svastara"} title={"Savštara"} />
        </Route>
        <Route path="/kultura">
          <Categories locationParam={"kultura"} title={"Kultura"} />
        </Route>
        <Route path="/čitaoci_pisci">
          <Categories locationParam={"citaoci"} title={"Čitaoci Pisci"} />
        </Route>
        <Route path="/:id">
          <SingleText />
        </Route>
      </Switch>
      <BackToTheTop scrollTop={scrollTop} />
    </div>
  );
}
