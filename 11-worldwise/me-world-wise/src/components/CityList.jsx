/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message='Add your first city by clicking on a city on the map' />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
