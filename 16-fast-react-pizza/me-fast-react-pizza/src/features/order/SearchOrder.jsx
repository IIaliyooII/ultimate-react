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
    <form onSubmit={submitHandler} className=" w-52 duration-150 md:w-96">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Order #"
        className="inline-block w-full rounded-lg bg-yellow-100/30 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 outline-none duration-150 placeholder:text-stone-800/40 hover:shadow-md focus:shadow-md"
      />
    </form>
  );
};

export default SearchOrder;
