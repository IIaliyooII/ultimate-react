import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const FormAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please give us your currect phone number. We might need it to contact you.";
  }
  if (Object.keys(errors).length > 0) return errors;

  //if everything is okey, create new order and redirect
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
};

export default FormAction;
