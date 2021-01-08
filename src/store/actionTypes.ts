export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALTER = 'SET_ALTER';


export interface WeatherData {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Sys {
  type:    number;
  id:      number;
  message: number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}

export interface WeatherError{
  code:string;
  message:string;

}

export interface WeatherState{
  data:WeatherData |null;
  loading:boolean;
  error:string;
}

interface GetWeather {
  type:typeof GET_WEATHER;
  payload:WeatherData;
};
interface SetLoadingAction{
  type:typeof SET_LOADING;

}
interface SETErrorAction{
  type:typeof SET_ERROR;
  payload:string;

}

export type WeatherAction =   GetWeather |SetLoadingAction |SETErrorAction;

export interface AlertAction{
  type:typeof SET_ALTER;
  payload:string;
}
export interface AlertState{
  message:string;
}
