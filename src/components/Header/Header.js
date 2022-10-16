import React from 'react'
import logo from '../../assets/logo.svg';
import './styles.scss'

function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Header