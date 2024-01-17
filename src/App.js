import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

{
  /* Header
        Logo
            Nav Items
            cart        

      <Body />
        searchBar 
            restaurant List
            restaurant card
                name
                image
                rating
                cusines

      <Footer />
        Footer Links
        copyright 
        */
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
