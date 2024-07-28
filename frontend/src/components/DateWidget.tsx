import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import axios from "axios";

export const DateWidget = () => {
  const [temp, setTemp] = useState("");
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getTemp = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad,in&APPID=665a6a2c8d8e02d5732f46e600b35f6c&units=metric`;

      try {
        const response = await axios.get(url);
        setTemp(response.data.main.temp);
        setisLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    getTemp();
  }, []);
  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthsOfYear[today.getMonth()];
  const dayOfWeekName = daysOfWeek[today.getDay()];
  const dayOfMonth = today.getDate();
  const year = today.getFullYear();
  return (
    <div className="w-full h-1/6 mb-1">
      <Wrapper>
        <div className="w-full flex items-center justify-center">
          <div className="p-4 text-sm font-semibold rounded-full border border-slate-950 dark:border-slate-50">
            {dayOfMonth}
          </div>
          <div className="ml-4 text-sm">
            <span className="mr-1">{dayOfWeekName},</span>
            {monthName} {year}
          </div>
          <div className="text-xl ml-8 mr-8 font-extralight">|</div>

          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
            </div>
          ) : (
            <div className="w-20">{temp} °C</div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};
