import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Map({ location, setLocation }) {
  const ClickHandler = () => {
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      setLocation([lat, lng]);
    });
    return null;
  };

  const LocationUpdater = ({ location }) => {
    const map = useMap();

    useEffect(() => {
      if (location) {
        map.flyTo(location, 14, { animate: true, duration: 1.5 });
      }
    }, [location, map]);

    return null;
  };

  return (
    <div className="map-section">
      <h1>Global Map</h1>
      <div className="map-container">
        <MapContainer center={location} zoom={14} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ClickHandler />
          <LocationUpdater location={location} />
          {location && (
            <Marker position={location}>
              <Tooltip>
                Latitude: {location[0]} <br />
                Longitude: {location[1]}
              </Tooltip>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

Map.propTypes = {
  location: PropTypes.array.isRequired,
  setLocation: PropTypes.func.isRequired,
};
