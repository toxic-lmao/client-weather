export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          resolve({ lat, lng });
        },
        (err) => reject(new Error(err.message))
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};
