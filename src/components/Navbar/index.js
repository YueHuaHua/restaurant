import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar({currentPage, handlePageChange}){
    return (
        <header className='custom-header'>
            <div className='topline'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                        <div class="h-group">
                            <i class="far fa-clock"></i>
                            <em>opening hours : </em>
                            08:00 am - 09:00 pm
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
                        <div class="h-group">
                            <i class="fas fa-map-marker-alt"></i>
                            <em>Location : </em>
                            111 Dartmouth Road, London
                        </div>
                    </div>
                </div>
            </div>
        
            <div className='custom-navbar'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                        <div className='logo'>
                            <a href="#home" onClick={() => handlePageChange('Home')}>
                                Home Taste
                            </a>
                        </div>
                    </div>
                    
                    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center'>
                        <div className='main-menu'>
                            <ul>
                                <li><a
                                    className={
                                        currentPage === 'Home'
                                            ? 'custom-nav-link link-active'
                                            : 'custom-nav-link'
                                    }
                                    href="#home"
                                    onClick={() => handlePageChange('Home')}
                                >
                                    Home
                                </a></li>

                                <li><a
                                    className={
                                        currentPage === 'About'
                                            ? 'custom-nav-link link-active'
                                            : 'custom-nav-link'
                                    }
                                    href="#about"
                                    onClick={() => handlePageChange('About')}
                                >
                                    About
                                </a></li>

                                <li><a
                                    className={
                                        currentPage === 'Menu'
                                            ? 'custom-nav-link link-active'
                                            : 'custom-nav-link'
                                    }
                                    href="#menu"
                                    onClick={() => handlePageChange('Menu')}
                                >
                                    Menu
                                </a></li>

                                <li><a
                                    className={
                                        currentPage === 'Contacts'
                                            ? 'custom-nav-link link-active'
                                            : 'custom-nav-link'
                                    }
                                    href="#contacts"
                                    onClick={() => handlePageChange('Contacts')}
                                >
                                    Contact
                                </a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right'>
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                        <div className='custom-btn h-btn'>Order Now</div>
                    </div>
                </div>
            </div>
        </header>
    )
}