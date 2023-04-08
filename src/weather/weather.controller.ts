import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('weather')
export class WeatherController {
  @Get('kuala-lumpur')
  async getKualaLumpurWeather(): Promise<any> {
    try {
      // Make API request to weather app to retrieve weather data
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Kuala%20Lumpur&appid=e2e7e8be51e6e8baeb58702fc4cd1713',
      );
      // Return the retrieved weather data as JSON response
      return response.data;
    } catch (error) {
      // Handle any errors that may occur during API request
      console.log(error);
      throw new Error('Failed to retrieve weather data.');
    }
  }
}
