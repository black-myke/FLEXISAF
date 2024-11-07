import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <footer>
        <p>&copy; {year} DailyJournal. All Rights Reserved</p>
    </footer>
  )
}

export default Footer