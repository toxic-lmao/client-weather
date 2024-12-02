import axios from "axios";

async function GetWeather(latitude, longitude) {
  try {
    const response = await axios.post(
      "https://toxicapi.onrender.com/weather",
      {
        latitude: latitude,
        longitude: longitude,
      },
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    console.error("Error sending location to server:", error);
  }
}

export default GetWeather;