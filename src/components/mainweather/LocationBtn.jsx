import getLocation from "../../libs/getLocation";
import locationbtn from "../../assets/images/location-btn.png";

export default function LocationBtn({ setLocation }) {
  async function userLocation() {
    try {
      const { lat, lng } = await getLocation();
      setLocation([lat, lng]);
      if (localStorage.getItem("location") !== JSON.stringify({ lat, lng })) {
        localStorage.setItem("location", JSON.stringify({ lat, lng }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex gap-3 items-center justify-between">
      <img
        src={locationbtn}
        alt="Location Button"
        className="w-8 p-1.5 bg-[#9dccf3] rounded-full cursor-pointer"
        onClick={userLocation}
      />
    </div>
  );
}
