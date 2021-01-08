import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError } from "../actionTypes";

const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

export const getWeahter = (city:string):ThunkAction<void,RootState,null,WeatherAction> => async (dispatch)=>{
  try{
     const res = await axios.get(`${baseURL}`,{
       params:{
         q:city,
         appid:process.env.REACT_APP_API_KEY
       }
     });
    console.log(res);
   if(res.status !== 200){
     const resData:WeatherError =  await res.data;
     throw new Error(resData.message)
   };

   const resData:WeatherData = await res.data;
   dispatch({
     type:GET_WEATHER,
     payload:resData
   });
  }catch(error){
    dispatch({
      type:SET_ERROR,
      payload:error.message
    });
  }
}

export const setLoading = ():WeatherAction =>{
  return {
    type:SET_LOADING
  }
}

export const setError = ():WeatherAction =>{
  return{
    type:SET_ERROR,
    payload:''
  }
};
