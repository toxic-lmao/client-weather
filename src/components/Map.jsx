import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Proptypes from "prop-types";

const Map = (props) => {
  const [markerPosition, setMarkerPosition] = useState(props.location);

  const ClickHandler = () => {
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);
      props.setLocation([lat, lng]);
    });
    return null;
  };

  return (
    <div className="map-container">
      <MapContainer
        center={markerPosition}
        zoom={13}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler />
        {markerPosition && (
          <Marker position={markerPosition}>
            <Tooltip>
              Latitude: {markerPosition[0]} <br />
              Longitude: {markerPosition[1]}
            </Tooltip>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  location: Proptypes.array.isRequired,
  setLocation: Proptypes.func.isRequired,
};

export default Map;
