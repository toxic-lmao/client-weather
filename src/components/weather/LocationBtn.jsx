import PropTypes from "prop-types";
import { useState } from "react";
import getLocation from "../../managers/getLocation";

function LocationBtn(props) {
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Want to see weather around you?");

  async function userLocation() {
    setLoading(true);
    setMessage("");
    const location = await getLocation();
    setLoading(false);

    if (location) {
      const { lat, lng } = location;
      props.setLocation([lat, lng]);
      setLocationAllowed(true);
    } else {
      setMessage("Unable to retrieve location. Please try again.");
    }
  }

  return (
    <div className="allow-location-btn">
      {locationAllowed ? null : <h4 style={{ opacity: "70%" }}>{message}</h4>}
      {loading ? (
        <p className="loading-text">Fetching location...</p>
      ) : (
        <img
          src="../../../assets/images/locate.png"
          alt="Location Button"
          id="allow-location-img"
          onClick={userLocation}
        />
      )}
    </div>
  );
}

LocationBtn.propTypes = {
  setLocation: PropTypes.func.isRequired,
};

export default LocationBtn;
