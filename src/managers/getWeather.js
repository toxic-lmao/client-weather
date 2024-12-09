import axios from "axios";

async function getWeather(latitude, longitude) {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL,
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

export default getWeather;
