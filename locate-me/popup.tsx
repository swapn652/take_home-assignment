import { useState } from "react"
import { fetchCountryAndCity, fetchIPAddress } from "~api/api";
import "./style.css"

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
    <div className="bg-blue-900 h-[500px] w-[500px]">
      <button onClick={handleClick}>
        Show My Location
      </button>   
      {country && <div>Your country is {country}</div>}
      {city && <div>and your city is {city}</div>}
    </div>
  )
}

export default IndexPopup
