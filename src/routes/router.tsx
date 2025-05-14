import {
    createBrowserRouter,
} from "react-router"
  
import Layout from "../components/Layout"
import Login from "../components/Login"
import Home from "../components/Home"
import About from "../components/About"
import Product from "../components/Product"
import ProductDetail from "../components/ProductDetail"
import NotFound from "../components/NotFound"
import ProtectedRoute from "../components/ProtectedRoute"
  
const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Layout />, // Layout que contiene el Outlet
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: "about",
                element: (
                    <ProtectedRoute>
                        <About />
                    </ProtectedRoute>
                ),
            },
            {
                path: "product/:name",
                element: (
                    <ProtectedRoute>
                        <Product />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        path: "detail",
                        element: (
                            <ProtectedRoute>
                                <ProductDetail />
                            </ProtectedRoute>
                        ),
                    },
                ],
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
])
  
export default router