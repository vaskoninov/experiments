import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout";
import Project from "./pages/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/projects",
                element: <Project />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
