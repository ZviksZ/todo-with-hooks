import React, {useReducer}      from 'react'
import {HIDE_ALERT, SHOW_ALERT} from "../types.js";
import {AlertContext}           from "./alertContext.js";
import {alertReducer}           from "./alertReducer.js";

export const AlertState = ({children}) => {
   const [state, dispatch] = useReducer(alertReducer, {visible: false})
   
   const show = (text, type = 'warning') => {
      dispatch({
         type: SHOW_ALERT,
         payload: {text, type}
      })
      
      setTimeout(() => {
         dispatch({type: HIDE_ALERT})
      }, 1500)

      
   }
   const hide = () => dispatch({type: HIDE_ALERT})

   return (
      <AlertContext.Provider value={{
         show, hide, 
         alert: state
      }}>
         {children}
      </AlertContext.Provider>
   )
}