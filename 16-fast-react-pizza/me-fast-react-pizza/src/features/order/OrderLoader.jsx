import { getOrder } from "../../services/apiRestaurant";

const OrderLoader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};

export default OrderLoader;
