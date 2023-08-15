/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };
  return <Button onClick={handleDelete}>Delete.</Button>;
};

export default DeleteItem;
