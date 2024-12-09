import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);

  const ClickHandler = () => {
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);
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

export default Map;
