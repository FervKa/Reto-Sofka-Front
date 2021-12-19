import React from 'react'
import logoNavbar from "../images/sofka-logo-n.png"
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="container cnt-propio">
                <div className="navbar navbar-dark bg-dark nav-principal">
                    <div className="container-fluid justify-content-center">
                        <div className='imagen-tamano'>
                            <img src={logoNavbar} alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                        </div>
                        <div className='conocimientos'>
                            Desafía tus conocimientos
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
