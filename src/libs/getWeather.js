import axios from "axios";

export default async function getWeather(latitude, longitude) {
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
    console.error("Error fetching weather data:", error.message);
    throw new Error("Unable to fetch weather data. Please try again later.");
  }
}
