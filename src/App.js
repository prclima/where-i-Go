import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import getPlacesData from "./api/api";
import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [coord, setCoord] = useState({});
  const [bounds, setBounds] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoord({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [coord, bounds]);

  return (
    <>
      <Header />
      <div className="container">
        <List places={places} />
        <Map setCoord={setCoord} setBounds={setBounds} center={coord} />
      </div>
      <PlaceDetails />
    </>
  );
}

export default App;
