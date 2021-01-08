import { AlertAction, SET_ALTER } from "../actionTypes"

export const setAlert = (message:string):AlertAction=>{
  return {
    type:SET_ALTER,
    payload:message
  }
}
