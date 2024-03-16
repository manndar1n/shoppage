import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import All from "./components/pages/All";
import Care from "./components/pages/Care";
import Decorative from "./components/pages/Decorative";
import Protective from "./components/pages/Protective";
import Basket from "./Basket";
import Header from "./components/header";
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <All />
            </>
        ),
    },
    {
        path: "/care/cosmetics",
        element: (
            <>
                <Care />
            </>
        ),
    },
    {
        path: "/decortaive/cosmetics",
        element: (
            <>
                <Decorative />
            </>
        ),
    },
    {
        path: "/protect/cosmetics",
        element: (
            <>
                <Protective />
            </>
        ),
    },
    {
        path: "/in/basket",
        element: (
            <>
                <Basket />
            </>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
