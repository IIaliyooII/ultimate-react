import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "../cart/cartSlice";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const TotalCartQuantity = useSelector(getTotalCartQuantity);
  const TotalCartPrice = useSelector(getTotalCartPrice);

  if (!TotalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm capitalize text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{TotalCartQuantity}</span>
        <span>{formatCurrency(TotalCartPrice)}</span>
      </p>
      <Link to="/cart" className="uppercase duration-300 hover:underline">
        Open cart. &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
