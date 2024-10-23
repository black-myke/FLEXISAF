import React from 'react'

const Heading = () => {

    const customSuccessText = {
        color: "green",
        fontSize: "25px",
        fontWeight: "400"
    }  // This is a reusable styled component


  return (
    <div>
        <p style={customSuccessText} >Right here, react inline styling is used. (Just for practice)</p>
    </div>
  )
}

export default Heading