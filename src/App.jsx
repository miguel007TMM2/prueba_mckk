import SignUp from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import ErrorPage from "./components/error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "/signup",
    errorElement: <ErrorPage />,
    element: <SignUp />,
  },
  {
    path: "/login",
    errorElement: <ErrorPage />,
    element: <Login />,
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
