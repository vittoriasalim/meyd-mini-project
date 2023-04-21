import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
}from "react-router-dom";
import Customer from "./pages/Customer/Customer.jsx"
import Home from "./pages/Home/Home.jsx"
import Maker from "./pages/Maker/Maker.jsx"
import Submission from "./pages/Maker/Submission.jsx"
import Footer from "./pages/Footer/Footer.jsx";
import Success from "./pages/Success/Success.jsx";
import SuccessRequest from "./pages/Success/success-request.jsx";
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
