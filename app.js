import React from "react";
import ReactDOM from "react-dom/client";

//routing
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//components
import Body from "./src/components/body";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import About from "./src/pages/about";
import RestaurantInfo from "./src/components/restaurantInfo";
import ErrorMessage from "./src/components/error";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
        errorElement: <ErrorMessage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
