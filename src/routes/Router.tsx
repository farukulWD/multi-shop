import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import SingUpAndSignIn from "../layout/SingUpAndSignIn";


export const router = createBrowserRouter([
  {
    path: "auth",
    element: <SingUpAndSignIn></SingUpAndSignIn>,
    children: [
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
    ],
  },
]);
