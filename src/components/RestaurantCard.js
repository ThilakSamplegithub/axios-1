export default function RestaurantCard({handleDelete,id,image,name,type,number_of_votes,price_starts_from,rating}){
    return<div>
            <div><img src={image} alt='err'/></div>
            <h1>Restaurant name:{name}</h1>
            <p>type:{type}</p>
             <p>numberof votes:{number_of_votes}</p>
             <p>Price range:{price_starts_from}</p>
             <p>rating:{rating}</p>
             <button onClick={()=>handleDelete(id)}>delete</button>
             </div>
}
