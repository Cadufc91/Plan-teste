import React from 'react';

import Logo from '../../assets/images/logo.png';
import { FiArrowDownRight, FiMenu, FiX } from "react-icons/fi";

import './Header.css';

const Header = () => {
    return(
        <nav className='menu-container'>
            <img className='logo' src={Logo} alt="logo" />
            <div className='menu'>
                <div className='menu-links'>
                    <ul className='menu-list'>
                        <li className='menu-item'><a href="#quem-somos">/Quem Somos</a></li>
                        <li className='menu-item'><a href="#o-que-fazemos">/O que fazemos</a></li>
                        <li className='menu-item'><a href="#plan-news">/Plan News</a></li>
                        <li className='menu-item'><a href="#nossos-clientes">/Nossos Clientes</a></li>
                        <li className='menu-item'><a href="#contato">/Contato</a></li>
                    </ul>
                </div>
                <div className='cta'>
                    <a href="#d">Que tal inovar com a gente?</a>
                    <FiArrowDownRight className='icon' />
                </div>
            </div>
            <div className='toggle open'>
                <FiMenu />
            </div>
            <div className='toggle close'>
                <FiX />
            </div>
        </nav>
    )
}

export default Header