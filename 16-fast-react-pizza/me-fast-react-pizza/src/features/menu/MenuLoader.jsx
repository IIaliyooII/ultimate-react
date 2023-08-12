import { getMenu } from "../../services/apiRestaurant";

const MenuLoader = async () => {
  const menu = await getMenu();
  return menu;
};

export default MenuLoader;
