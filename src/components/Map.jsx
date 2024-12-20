import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { Title } from "./Title";
import customMarker from "../assets/images/marker.png";

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

  const customIcon = new L.Icon({
    iconUrl: customMarker,
    iconSize: [36, 36],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="flex flex-col justify-between gap-4">
      <Title name="Global Map" />
      <MapContainer
        center={location}
        zoom={14}
        className="h-[30rem] w-full rounded-xl"
        attributionControl={false}
        minZoom={3}
        maxZoom={18}
        worldCopyJump={true}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler />
        <LocationUpdater location={location} />
        {location && (
          <Marker position={location} icon={customIcon}>
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
