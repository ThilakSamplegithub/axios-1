import axios from 'axios';
export default function getRestaurantData(params={}){
    console.log(params)
    return axios.get(`http://localhost:8080/restaurants`,{
        params:{
            _page:params.page,
            _limit:params.limit,
            _sort:params.sort,
            _order:params.order,
            // type:params.filtering
        }
    })
 }
 export function addRestaurantData(data){
    return axios({
        method: 'post',
        url: 'http://localhost:8080/restaurants',
        data: {
            image:data.image,
            name:data.name,
            number_of_votes:data.number_of_votes,
            price_starts_from:data.price_starts_from,
            rating:data.rating,
            type:data.type
        }
      });
 }