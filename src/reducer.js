const reducer =(state, action)=>{
    switch(action.type){
        case "SET_SERVICE_VALUE":
            return {...state, selectedServiceValue: action.payload}
            break;
        case "SET_AIRTIME_SERVICE":
            return {...state, airtimeService: action.payload}
            break;

            
        default :
            return {...state}
    }
}

export default reducer