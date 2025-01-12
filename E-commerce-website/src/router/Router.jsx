import { useContext, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../pages/LogIn";
import ShopPage from "../pages/ShopPage";
import HomePage from "../pages/HomePage";
import { AppContext } from "../Context/ContextData";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

// Component wrapper cho Router
function RouterWrapper() {
  const { isAuth, setIsAuth } = useContext(AppContext);

  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    if (auth === 'true') {
      setIsAuth(true);
    }
  }, [setIsAuth]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "shop",
          element: <Outlet />,
          children: [
            { path: "", element: <ShopPage /> },
            { path: ":id", element: <ProductDetailsPage /> },
          ],
        },
        {
          path: "cart",
          element: <CartPage />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <AuthLayout />
        </PublicRoute>
      ),
      children: [
        {
          path: "",
          element: <LogIn />,
        },
      ],
    },
    {
      path: "*",
      element: <p>404 not found</p>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default RouterWrapper;