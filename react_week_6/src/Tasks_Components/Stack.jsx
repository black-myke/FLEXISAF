import React from 'react';
import StackCard from './Stack-Card';
import dishes from './dishes';

function createCardStack(dishInfo) {
    return (
        <StackCard
            key={dishInfo.id}
            dishName={dishInfo.name}
            dishImg={dishInfo.image}
            price={dishInfo.price}
            sideDish={dishInfo.dishStatus}
        />
    );
}

const Stack = () => {
  return (
    <div className='stack-body'>
        <h1 className='menu-heading'>Menu List</h1>
        

        <div className='stackbox'>
            {dishes.map(createCardStack)}

        </div>
    
    </div>
  )
}

export default Stack