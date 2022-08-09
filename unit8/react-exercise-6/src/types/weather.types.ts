export interface WeatherResponse {
  properties: {
    periods: Period[];
  };
}

export interface Period {
  name: string;
  temperature: number;
  icon: string;
  detailedForecast: string;
}
