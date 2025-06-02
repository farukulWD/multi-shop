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
        path: "sign-up",
        element: <Signup></Signup>,
      },
      {
        path: "sign-in",
        element: <Signin></Signin>,
      },
    ],
  },
]);
