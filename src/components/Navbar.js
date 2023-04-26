import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import '../App.css';
import { useSelector } from 'react-redux';


export default function Navbar(props) {

    const cartQuantity = useSelector((state) => state.cart.cartItems.length);

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme={`${props.mode}`}>
            <div className="container">
                <Link className="navbar-brand" to="/" style={{ fontSize: 20 }}>{props.title}</Link>
                <form className="d-flex col-md-4" role="search">
                    <input style={{ height: 30 }} className="form-control me-5" type="search" placeholder="Search" aria-label="Search" />
                    {/* <button className="btn btn-outline-success me-3" type="submit">Search</button> */}
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex justify-content-between'>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ fontSize: 18 }}>{props.item1}</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="/about" style={{ fontSize: 18 }}>{props.item2}</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to="/myorders" style={{ fontSize: 18 }}>My Orders</Link>
                            </li>
                            <li className="nav-item me-5">
                                <div className='' style={{ display: 'flex' }}>
                                    <i style={{ marginTop: 8, fontSize: 22, color: props.mode === 'dark' ? 'white' : 'black' }} className='bx bx-cart-alt'></i>
                                    <Link className="nav-link" to="/cart" style={{ fontSize: 18 }}>Cart</Link>
                                    {cartQuantity !== 0 ?
                                        (<div style={{ backgroundColor: 'red', borderRadius: 10, height: 20, padding: 5 }} className='cart-notification'>
                                            <span style={{ fontWeight: 600, alignItems: 'center', justifyContent: 'center', color: 'white' }} className='cart-notification-text'>{cartQuantity}</span>
                                        </div>)
                                        : null}
                                </div>
                            </li>
                        </ul>
                        <div style={{ fontSize: 18 }} className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.onpresstogglemode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

    // Validating prop types
    // Navbar.propTypes = {
    //     title: PropTypes.string,
    //     item1: PropTypes.string,
    //     item2: PropTypes.string,
    // }

}
