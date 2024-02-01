"use client";

import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { useQuery } from "react-query";

// http://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=0a583add6a0cae651e08ea5e2b49030d&cnt=56

// https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=ca62460d6d966177370320098e7e62f3&cnt=2

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherItem[];
  city: City;
}

interface WeatherItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: Weather[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "repoData",
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=2`
      );
      return data;
    }
  );
  console.log("data", data?.city);

  if (isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
