import { createBrowserRouter } from "react-router-dom";
import Home from "./App";
import Signin from "./components/auth/signIn";
import Login from "./components/auth/login";
import Read from "./components/read";
import Create from "./components/create";
import Calculater from "./components/calculater";

const router = createBrowserRouter([
   
    { path: '', element: <Signin/> },
    { path: 'home', element: <Home/> },
    { path: 'login', element: <Login/> },
    { path: 'create', element: <Create/> },
    { path: 'read', element: <Read/> },
    {path: "calculater", element:<Calculater/>}

    
 
]);

export default router;