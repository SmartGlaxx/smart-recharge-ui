import React, {useEffect, useReducer} from 'react'
import reducer from './reducer'

const GlobalContext = React.createContext()

const initialState ={
    selectedServiceValue : {},
    airtimeService : {}
}
const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const setServiceValue =(value)=>{
        dispatch({type : "SET_SERVICE_VALUE", payload: value})
    }

    const setAirtimeNavItems =(id, name, icon, options)=>{
        dispatch({type : "SET_AIRTIME_SERVICE", payload : {id, name, icon, options}})
    }

    return <GlobalContext.Provider value={{
        ...state, setServiceValue, setAirtimeNavItems
    }}>
        {children}
    </GlobalContext.Provider>

}

const useGlobalContext =()=>{
    return React.useContext(GlobalContext)
}

export {useGlobalContext, GlobalProvider}