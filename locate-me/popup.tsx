import { useState } from "react"
import { fetchCountryAndCity, fetchIPAddress } from "~api/api";

function IndexPopup() {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  const handleClick = async () => {
    const ip = await fetchIPAddress();
    setIpAddress(ip);

    const countryCityData = await fetchCountryAndCity(ip);
    setCity(countryCityData.city);
    setCountry(countryCityData.country);
  }

  return (
    <div style = {{width: 500, height: 500}}>
      <button onClick={handleClick}>
        Show My Location
      </button>   
      {country && <div>Your country is {country}</div>}
      {city && <div>and your city is {city}</div>}
    </div>
  )
}

export default IndexPopup
