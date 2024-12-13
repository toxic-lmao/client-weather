import PropTypes from "prop-types";
import { useState } from "react";
import getLocation from "../../libs/getLocation";
import locationbtn from "../../assets/images/location-btn.png";

export default function LocationBtn({ setLocation }) {
  const [locationAllowed, setLocationAllowed] = useState(false);

  async function userLocation() {
    try {
      const { lat, lng } = await getLocation();
      setLocation([lat, lng]);
      setLocationAllowed(true);
    } catch (error) {
      console.log(error);
      setLocationAllowed(false);
    }
  }

  return (
    <div className="allow-location-btn">
      <img
        src={locationbtn}
        alt="Location Button"
        id="allow-location-img"
        onClick={userLocation}
      />
    </div>
  );
}

LocationBtn.propTypes = {
  setLocation: PropTypes.func.isRequired,
};
