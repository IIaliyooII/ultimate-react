import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-3 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="mt-3 space-x-3">
        <Button to="/order/new">Order pizzas</Button>
        <button
          onClick={handleClear}
          className="inline-block rounded-lg border border-stone-800 bg-transparent px-4 py-1.5 font-semibold uppercase tracking-wide text-stone-800 outline-none duration-150 hover:border-none hover:bg-slate-500 hover:text-white"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
