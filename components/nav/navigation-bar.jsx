import React, { useState } from 'react'
import Link from 'next/link'
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  Container, 
} from 'reactstrap'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const onToggle = () => {
    setToggle(currentState => !currentState)
  }

  return (
    <header className="header">
      <Container>
      <div className="navigation navbar--shadow">
        <Link href="/">
          <a className="navigation--brand"><h4 className="navigation--brand-title">Ri<span>wandi</span></h4></a>
        </Link>

        <button className="navigation--toggle" onClick={onToggle}>
        <FontAwesomeIcon icon={faAlignRight} size="sm"/>
        </button>

        <nav className="navigation__nav">
          <ul className={toggle ? "navigation--list navigation--show" : "navigation--list"}>
            <li className="navigation--item">
              <Link href="/about">
                <a className="navigation--link">About</a>
              </Link>
            </li>
            <li className="navigation--item">
              <Link href="/blog">
                <a className="navigation--link">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </Container>
    </header>
  )
}

export default Navbar
