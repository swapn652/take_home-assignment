import axios from "axios";
import type { AxiosResponse } from "axios";

interface IpifyResponse {
  ip: string;
}

interface IpinfoResponse {
    city: string;
    country: string;
  }

export async function fetchIPAddress(): Promise<string> {
  try {
    const response: AxiosResponse<IpifyResponse> = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    throw new Error("Error fetching IP address: " + error.message);
  }
}

export async function fetchCountryAndCity(ipAddress: string): Promise<IpinfoResponse> {
    try {
      const response: AxiosResponse<IpinfoResponse> = await axios.get(`https://ipinfo.io/${ipAddress}?token=${process.env.PLASMO_PUBLIC_IPINFO_TOKEN }`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching country and city: " + error.message);
    }
}



