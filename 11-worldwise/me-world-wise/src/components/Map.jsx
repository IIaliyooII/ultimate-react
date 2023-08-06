import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h2>lat: {lat}</h2>
      <h2>lng: {lng}</h2>

      <button onClick={() => setSearchParams({ lat: 21, lng: 85 })}>Change Direction</button>
    </div>
  );
};

export default Map;
