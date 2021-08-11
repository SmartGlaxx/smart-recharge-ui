const reducer =(state, action)=>{
    switch(action.type){
        case "SET_SERVICE_VALUE":
            return {...state, selectedServiceValue: action.payload}
            break;
        case "SET_AIRTIME_SERVICE":
            return {...state, airtimeService: action.payload}
            break;
        case "SET_SEARCH_VALUE" :
            return {...state, searchValue : action.payload}
        case "SET_SEARCH_BAR":
            const serchB = !state.serachBar
            return {...state, serachBar : serchB}          

        default :
            return {...state}
    }
}

export default reducer