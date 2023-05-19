import { useEffect, useReducer, useState } from "react"
import fetchRestaurantReducer from "./fetchRestaurantReducer";
import RestaurantCard from "./RestaurantCard";
import getRestaurantData from "./axios/axios.js";
import AddRestaurant from "./AddRestaurant";
import axios from "axios";
import { addRestaurantData } from "./axios/axios.js";
const Actions={
    LOADING:"LOADING",
    SUCCESS:"SUCCESS",
    FAILURE:"FAILURE"
}
const initState={
    loading:false,
    data:[],
    err:false
}

export default function Restaurant(){
const [state,dispatch]=useReducer(fetchRestaurantReducer,initState)
const [page,setPage]=useState(1)
const [total,setTotal]=useState("")
const [order,setOrder]=useState("asc")
// const [filtering,setFilter]=useState('ethnic')
function fetchAndUpdateData(page,order){
    dispatch({type:Actions.LOADING})
    getRestaurantData({page:page,
        limit:4,sort:'rating',order:order})
   .then((res)=>{console.log(res);setTotal(res.headers["x-total-count"])
    dispatch({type:Actions.SUCCESS,payload:res})})
   .catch(()=>dispatch({type:Actions.FAILURE}))
}
useEffect(()=>{
    fetchAndUpdateData(page,order)
},[page,order]) 
const{loading,data,err}=state
const restauarntPost=(data)=>{
    addRestaurantData(data)
.then((res)=>{fetchAndUpdateData(page,order);console.log(res)})
.catch(err=>console.log(err))
}
function handleDelete(id){
    axios.delete(`http://localhost:8080/restaurants/${id}`)
    .then(()=>fetchAndUpdateData(page,order))
    
}
console.log(data)
return loading?<h1>loading...</h1>:err?<h1>Something fishy</h1>: <>
<AddRestaurant restauarntPost={restauarntPost}/>
      {data?.data?.map(({image,number_of_votes,name,id,price_starts_from,rating,type})=>{
        return<RestaurantCard id={id} handleDelete={handleDelete} key={id} image={image} number_of_votes={number_of_votes} name={name} price_starts_from={price_starts_from} rating={rating} type={type} />
      })}
      <button onClick={()=>setOrder("asc")}>sortByAsc</button>
      <button onClick={()=>setOrder("desc")}>sortByDesc</button>
      {/* <button onClick={()=>setFilter("ethnic")}>filterByethnic</button> */}
      {/* <button onClick={()=>setFilter("fast_food")}>filterByfast_food</button> */}
      <button disabled={page<=1} onClick={()=>setPage(page-1)}>Prev</button>
      <button>{page}</button>
      <button  onClick={()=>setPage(page+1)}>Next</button>
    </>
}