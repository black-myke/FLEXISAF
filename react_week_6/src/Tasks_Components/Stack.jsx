import React from 'react';
import StackCard from './Stack-Card';
import dishes from './dishes';


const Stack = () => {
  return (
    <div className='stack-body'>
        <h1>Seaside Delight</h1>
        <h2 className='menu-heading'>Menu List</h2>
        

        <div className='stackbox'>
            
            {dishes.map((dishInfo) => 
                <StackCard
                    key={dishInfo.id}
                    dishName={dishInfo.name}
                    dishImg={dishInfo.image}
                    price={dishInfo.price}
                    sideDish={dishInfo.dishStatus}
                />)}

        </div>
    
    </div>
  )
}

export default Stack