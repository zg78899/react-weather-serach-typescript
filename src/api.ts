import axios from 'axios';

export const request = axios.create({
  baseURL:'api.openweathermap.org/data/2.5/weather',
  params:{
    key:process.env.REACT_APP_API_KEY
  }
})