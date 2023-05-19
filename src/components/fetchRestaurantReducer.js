 const fetchRestaurantReducer=(state,action)=>{
    switch(action.type){
        case "LOADING":{
           return {...state,loading:true,err:false}
        }
        case "SUCCESS":{
            return {...state,loading:false,data:action.payload}
        }
        case "FAILURE":{
            return {...state,loading:false,err:true}
        }
         default :{
            return state
         }   
    }
    }
    export default fetchRestaurantReducer