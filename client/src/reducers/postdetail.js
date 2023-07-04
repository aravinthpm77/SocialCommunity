const postReducer=(state={data:null},action)=>{
    switch(action.type){
        case "POST_DATA":
            return {...state,data:action.payload}
        case "FETCH_ALL_POST":
            return{...state,data:action.payload}
        default:
            return {...state}


    }
}

export default postReducer