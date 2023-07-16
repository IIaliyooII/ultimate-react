import Spinaci from "../pizzas/spinaci.jpg";

const Pizza = () => {
  return (
    <div>
      <img src={Spinaci} alt='pizza' />
      <h2>Pizza Spanica</h2>
      <p>tomato, mozarrela, spinach</p>
    </div>
  );
};

export default Pizza;
