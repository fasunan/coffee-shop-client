import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Component/CoffeeCard";
import { useState } from "react";

const Root = () => {
    const loadedCoffee= useLoaderData();
    const [allCoffee, setAllCoffee]= useState(loadedCoffee)

    return (
      
        <div className='m-20'>
         
        <h1 className='text-6xl text-center my-20 text-purple-600'> Coffee: {allCoffee.length}</h1>
        <div className='grid md:grid-cols-2 gap-4'>
          {
            allCoffee.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              allCoffee={allCoffee}
              setAllCoffee={setAllCoffee}
              
            ></CoffeeCard>)
          }
        </div>
      </div>
    );
};

export default Root;