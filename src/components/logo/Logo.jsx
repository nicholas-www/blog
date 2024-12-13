import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return (
    <Link to={'/'} className="logo">
        <FontAwesomeIcon icon={faBlog} />
        Explora
    </Link>
  )
}

export default Logo