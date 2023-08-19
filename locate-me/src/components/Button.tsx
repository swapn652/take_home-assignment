import React from 'react'
import { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { fetchCountryAndCity, fetchIPAddress } from "~api/api";

export const Button = () => {
    const [ipAddress, setIpAddress] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleClick = async () => {
      const ip = await fetchIPAddress();
      setIpAddress(ip);
      setLoading(true);
  
      const countryCityData = await fetchCountryAndCity(ip);
      setCity(countryCityData.city);
      setCountry(countryCityData.country);
      setLoading(false);
    }

  return (
    <div className='h-72 w-60'>
        <ClipLoader
            color="#ffffff"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            className='ml-10'
        />
        {!loading && <button
            className="
            bg-white 
            text-black 
            text-2xl 
            h-20 
            w-full
            p-2 
            rounded-lg 
            border-2 
            border-black"
            onClick={handleClick}
        >
            Show My Location
          </button>
        }

          <div className='w-[300px] mt-10 ml-4'>
            {country && <div className="text-2xl text-white">Your country is {country == 'IN' ? `India` : 'None'}</div>}
            {city && <div className="text-2xl text-white">and city is {city}</div>}
        </div>
    </div>
  )
}
