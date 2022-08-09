import { useEffect, useState } from 'react';
import { getWeatherPeriods } from '../services/weather.service';
import { Period } from '../types/weather.types';

export default function WeatherForcast() {
  const [periods, setPeriods] = useState<Period[]>([]);

  useEffect(() => {
    getWeatherPeriods().then((periods) => setPeriods(periods));
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      <ul>
        {periods?.map((period) => (
          <li>
            <h2>{period.name}</h2>
            <p>Temperature: {period.temperature}</p>
            <img src={period.icon} alt="Weather icon" />
            <p>{period.detailedForecast}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
