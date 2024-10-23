import React from 'react'

const Footer = () => {

    let date = new Date();
    let copyrightYear = date.getFullYear()
  return (
    <footer>
      <p>Copyright &copy; {copyrightYear} </p>
    </footer>
  )
}

export default Footer