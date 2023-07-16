import { pizzaData } from "../data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizzaData.map((el, index) => (
        <Pizza
          key={index}
          name={el.name}
          ingredients={el.ingredients}
          photoName={el.photoName}
          price={el.price}
          soldOut={el.soldOut}
        />
      ))}
    </main>
  );
};

export default Menu;
