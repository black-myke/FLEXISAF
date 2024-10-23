import React from 'react'

const Greeting = () => {

    const customSuccessText = {
        color: "green",
        fontSize: "25px",
        fontWeight: "400"
    }
    
      let greeting;
    
      const time = new Date();
    
      if(time.getHours() <= 12) {
        greeting = "Good Morning";
        customSuccessText.color = "red";
      } else if(time.getHours() > 12 && time.getHours() < 18 ) {
        greeting = "Good Afternoon";
        customSuccessText.color = "green"
      } else if(time.getHours() > 18) {
        greeting = "Good Night!";
        customSuccessText.color = "blue"
      }


  return (
    <div>
        <h1 style={customSuccessText}>Hey, {greeting}</h1>
    </div>
  )
}

export default Greeting