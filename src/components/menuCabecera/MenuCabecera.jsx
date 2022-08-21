import React from 'react'
import logo from '../../images/img-header/logo-letras-bgf3f3f3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'

function MenuCabecera() {
    return (
        <nav className="navbar navbar-expand-lg bg-propio sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img className='logo' src={logo} alt="" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">INICIO</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/quienes-somos">QUIENES SOMOS</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/liliana-bodoc" >
                                LILIANA BODOC
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/liliana-bodoc">BIOGRAFIA</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">OBRAS</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">21 DE JULIO</NavLink></li>
                                <li><NavLink className="dropdown-item" to="#">VIDEOS</NavLink></li>
                                <li><hr className="dropdown-divider"></hr></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" >
                                QUE HACEMOS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">MUJERES DE LOS CONFINES</a></li>
                                <li><a className="dropdown-item" href="#">21 DE JULIO</a></li>
                                <li><a className="dropdown-item" href="#">CONTAR PARA QUE OCURRA</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">AGENDA</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">CONTACTO</a>
                        </li>

                    </ul>
                    <a className="custom-btn btn-12" href="https://homenaje-lilianabodoc.blogspot.com/" ><span>Click</span><span>Donaciones</span></a>
                </div>
            </div>
        </nav>

    )
}

export default MenuCabecera