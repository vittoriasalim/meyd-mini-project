import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
}from "react-router-dom";
import Customer from "./pages/Customer/Customer"
import Home from "./pages/Home/Home"
import Maker from "./pages/Maker/Maker"
import Submission from "./pages/Maker/Submission"
import Footer from "./pages/Footer/Footer";
import Success from "./pages/Success/Success";
import SuccessRequest from "./pages/Success/success-request";
import "./style.scss"
const Layout = () => {
  return(
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );

};
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
    
      {
        path: "/customer",
        element: <Customer></Customer>
      },
      {
        path: "/success",
        element: <Success></Success>
      },
      {
        path: "/success-request",
        element: <SuccessRequest></SuccessRequest>
      },
      {
        path: "/maker",
        element: <Maker></Maker>
      },
      {
        path: "/submission/:id",
        element: <Submission></Submission>
      }
    
    ]
    
  }
  
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
