import React from "react";
import Header from "./header";
import Nav from "./nav";
import "./app.css"
import Footer from "./footer";
import images from "./data";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home woman={images.image.woman} man={images.image.man}/>
      <Footer />

    </div>
  );
}

export default App;
