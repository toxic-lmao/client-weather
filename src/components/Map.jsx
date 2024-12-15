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
import Title from "./Title";

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
    <div className="flex flex-col justify-between gap-4">
      <Title name="Global Map" />
      <MapContainer
        center={location}
        zoom={14}
        className="h-[30rem] w-full rounded-xl"
        attributionControl={false}
        minZoom={3} // Prevent zooming out beyond level 3 (adjust as needed)
        maxZoom={18} // Set the maximum zoom level (adjust as needed)
        worldCopyJump={true} // Enable the wrapping of longitude
        maxBounds={[
          [-90, -180], // South-West corner of the map (latitude, longitude)
          [90, 180], // North-East corner of the map (latitude, longitude)
        ]}
      >
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
  );
}
