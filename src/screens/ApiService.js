import axios from 'axios';

export const getMarketData=async ()=>{
    try{
      const response=await axios.get("https://fakestoreapi.com/products?limit=5")
      const data=response.data;
      return data;
    }catch(error){
          console.log(error.message);
    }
}