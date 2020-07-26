import React from 'react'

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center footer">
      <p className="footer--text">{`Copyright © Riwandi ${new Date().getFullYear()}`}</p>
    </footer>
  )
}

export default Footer
