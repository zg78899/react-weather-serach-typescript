import { defaultMaxListeners } from "stream";
import { AlertAction, AlertState, SET_ALTER } from "../actionTypes";

const initialState:AlertState = {
  message:''
};

export default function alertReducer(state = initialState,action:AlertAction):AlertState{
  switch(action.type){
    case SET_ALTER:
      return{
        message:action.payload
      };
      default:
        return state;
  }

}