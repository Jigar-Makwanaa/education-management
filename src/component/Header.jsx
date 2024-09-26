import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main flex">
                            <div className="logo">
                                <Link to={'/'}><img src="../img/logo.png" alt="" /></Link>
                            </div>
                            <div className="menu">
                                <ul className='flex'>
                                    <li>
                                        <Link to={'/'}>home</Link>
                                    </li>
                                    <li>pages</li>
                                    <li>courses lists</li>
                                    <li>
                                        <Link to={'/deshbord'}>dashboard</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header