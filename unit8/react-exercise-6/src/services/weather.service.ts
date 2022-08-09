import axios from 'axios';
import { WeatherResponse } from '../types/weather.types';

export async function getWeatherPeriods() {
  const url = 'https://api.weather.gov/gridpoints/DTX/65,33/forecast';
  const response = await axios.get<WeatherResponse>(url);
  return response.data.properties.periods;
}
