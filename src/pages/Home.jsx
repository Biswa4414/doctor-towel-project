import React from "react";
import Header from "../Components/header/Header"
import UncontrolledExample from "../Components/carousel/Carousel"
import Card from "../Components/card/Card";
import Footer from "../Components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <UncontrolledExample />
      <Card />
      <Footer/>
    </div>
  );
};

export default App;
