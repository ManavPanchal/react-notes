import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

function Api() {
   const [apiData, setApiData] = useState(null);

    // async function callApi(){
    //     const data = await fetch("https://dummyjson.com/products/search?q=Laptop");
    //     const jsonData = await data.json();
    //     console.log(jsonData);
    // }

    async function callApi(){
        const data  = await axios.get("https://dummyjson.com/products/search?q=Laptop");
        setApiData(data.data.products);
    }

    useEffect(()=>{
        callApi()
    })

  return (
    <div className='products flex gap-3 flex-wrap'>
        { apiData && apiData.map((ele,index)=>{
            return(
                <div className="product_card rounded w-29 max-h-fit shadow">
                    <div className="product_id hidden">{ele.id}</div>
                    <div className="product_title max-w-full">{ele.title}</div>
                    <div className="product_image max-w-full">
                        <img src={ele.images[0]} alt="product_image" />
                    </div>
                    <div className="product_description max-w-full">{ele.description}</div>
                    <div className="product_price">{ele.price}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Api
