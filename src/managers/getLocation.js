function getLocation() {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          resolve({ lat, lng });
        },
        (err) => {
          console.error("Error retrieving location:", err.message);
          resolve(null);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      resolve(null);
    }
  });
}

export default getLocation;
