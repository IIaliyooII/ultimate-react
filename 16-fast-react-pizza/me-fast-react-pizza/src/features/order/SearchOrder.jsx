import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder='Search Order #' />
    </form>
  );
};

export default SearchOrder;
