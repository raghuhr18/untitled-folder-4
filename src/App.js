import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const About =  lazy(() => import("./components/About"))
const Instamart = lazy(() => import("./components/Instamart"))
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


      <Footer />
        Footer Links
        copyright 
        */
}

const AppLayout = () => {
const [user, setUser] = useState({
  name: "Akshay",
  email: "akshay@gmail.com"
})
 

  return (
    <Provider store ={store} >
      <UserContext.Provider value={{user: user, setUser: setUser}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: 
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: 
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>,
      },
      
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
