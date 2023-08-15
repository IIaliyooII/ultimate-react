/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li
      className={`flex gap-4 py-2 ${
        soldOut ? "cursor-not-allowed opacity-70" : ""
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-lg ${soldOut ? "grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p className="text-green-500">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase  text-red-500/50">Sold out</p>
          )}
          {isInCart && <DeleteItem pizzaId={id} />}
          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart}>Add to cart</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
