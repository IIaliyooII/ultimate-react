import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-3 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart., %NAME%</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.key} item={item} />
        ))}
      </ul>

      <div className="mt-3 space-x-3">
        <Button to="/order/new">Order pizzas</Button>
        <button className="inline-block rounded-lg border border-stone-800 bg-transparent px-4 py-1.5 font-semibold uppercase tracking-wide text-stone-800 outline-none duration-150 hover:border-none hover:bg-slate-500 hover:text-white">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
