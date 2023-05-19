import { useReducer } from "react"
const Actions2={
    CHANGE_INPUT:"CHANGE_INPUT"
}
const initState2={
    price_starts_from:"",
    name:"",
    type:"",
    rating:"",
    number_of_votes:"",
    image:''
}
const reducerForm=(state2,{type,payload})=>{
 switch(type){
    case "CHANGE_INPUT":{
        return{...state2,[payload.name]:payload.value}
    }
    default:{
        throw new Error('something went wrong')
    }
 }
}
// I can catch tag with formstate management bcause I use single onchange I could've wrote handlechange rather than anonymous function
// Unique thing with 1 state am gonna handle all states.So here am using useReducer I am gonna use 1state:changeInput and catch that particular tag by the name I gave as
// attribute and in payload I will send it both as anobject. I will send it as key the tag I catched rather than onather state
//
export default function AddRestaurant({restauarntPost}){
  const[state2,dispatchForm]=useReducer(reducerForm,initState2)
  const {price_starts_from,name,type,rating,number_of_votes,image}=state2
//   console.log(state2)
    return(
        <>
         <form onSubmit={(e)=>{e.preventDefault();console.log(state2);restauarntPost(state2)}}>
            <input placeholder="enter name" value={name} name="name" onChange={(e)=>dispatchForm({type:Actions2.CHANGE_INPUT,payload:{name:e.target.name,value:e.target.value}})}/>
            <select value={type} name='type'onChange={(e)=>dispatchForm({type:Actions2.CHANGE_INPUT,payload:{name:e.target.name,value:e.target.value}})} >
            <option value='ethnic'>ethinic</option>
            <option value='fine_dining'>fine_dining</option>
            <option value='fast_food'>fast_food</option>
            <option value='cafe'>cafe</option>
            <option value='casual_dining'>casual_dining</option>
            </select>
            <input name="image" value={image} onChange={(e)=>dispatchForm({type:Actions2.CHANGE_INPUT,payload:{name:e.target.name,value:e.target.value}})} placeholder="EnterImage"/>
            <input name="number_of_votes" value={number_of_votes} onChange={(e)=>dispatchForm({type:Actions2.CHANGE_INPUT,payload:{name:e.target.name,value:Number(e.target.value)}})} placeholder="Enter Number of votes"/>
            <input name="price_starts_from" value={price_starts_from} onChange={(e)=>dispatchForm({type:Actions2.CHANGE_INPUT,payload:{name:e.target.name,value:Number(e.target.value)}})} />
            <select value={rating} name="rating" onChange={(e)=>dispatchForm({type:Actions2.CHANGE_INPUT,payload:{name:e.target.name,value:Number(e.target.value)}})} >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            </select>
            <input type='submit'/>
         </form>
        </>
    )
}