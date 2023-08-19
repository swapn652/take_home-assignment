import { useState } from "react"

function IndexPopup() {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  return (
    <div>
      <button>
        Show My Location
      </button>   
    </div>
  )
}

export default IndexPopup
