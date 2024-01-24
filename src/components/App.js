import React from "react";
// import {username, city} from "../Home.js"; don't need these because they're in Home
import About from "./About.js"; //do we need this? yeah but you're not importing image. you should import About from ./About.js
import NavBar from "./NavBar.js";
import Home from "./Home.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
