import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import MenuLoader from "./features/menu/MenuLoader";
import OrderLoader from "./features/order/OrderLoader";
import FormAction from "./features/order/FormAction";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: MenuLoader, errorElement: <Error /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder />, action: FormAction },
      { path: "/order/:orderId", element: <Order />, loader: OrderLoader, errorElement: <Error /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
