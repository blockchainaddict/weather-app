import { useState, useEffect } from "react";

function useLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getLocation() {
    setLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude,  } = position.coords;
        setLocation({ latitude, longitude });
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      }
    );
  }

  useEffect(() => {
    getLocation();
  }, []);

  return {
    location,
    error,
    isLoading,
    getLocation,
  };
}

export default useLocation;
