// import React from 'react';
import { Link } from "react-router-dom";
// import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from "../redux/hook";

import Dropdown from "react-bootstrap/Dropdown";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/features/user/userSlice";
import { auth } from "../lib/firebase";
import styles from '../styles/offcanvas.module.css'; 
import {
    addToCart,
    removeFromCart,
    removeOne,
} from "../redux/features/cart/cartSlice";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

const Navbar = () => {

    const { products, total } = useAppSelector((state) => state.cart);

    const { user } = useAppSelector((state) => state.user);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        console.log("Logout");
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(setUser(null));
        });
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap px-5 md:py-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">
                            <Link to="/">BookShop</Link>
                        </span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">
                            <Link to="/">Home</Link>
                        </a>
                        {!user.email && (
                            <>
                                <a className="mr-5 hover:text-gray-900">
                                    <Link to="/signup">SignUp</Link>
                                </a>
                                <a className="mr-5 hover:text-gray-900">
                                    <Link to="/login">Login</Link>
                                </a>
                            </>
                        )}
                        <a className="mr-5 hover:text-gray-900">
                            <Link to="/checkout">Checkout</Link>
                        </a>
                    </nav>

                    {/* <a className="btn btn-primary px-2 py-0 position-relative" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="bi bi-bag-check fs-4"></i>
                        <p className='position-absolute top-0 end-0  py-0 fw-semibold  rounded-circle'>{products.length}</p>
                    </a> */}

                    {/* <button type="button" className="btn bg-primary position-relative py-0 px-2" data-bs-toggle="offcanvas"  href="#offcanvasExample"  role="button" aria-controls="offcanvasExample">
                        <i className="bi bi-bag-check fs-4 text-white"></i>
                        <span className="position-absolute top-0 start-100 translate-middle py-0 px-2 bg-danger border border-light rounded-circle border-0 shadow-0">
                            <span className="p-0 fs-6 text-white ">{products.length}</span>
                        </span>
                    </button> */}

                    <button
                        type="button"
                        className="btn bg-primary position-relative py-0 px-2"
                        onClick={handleShow}
                    >
                        <i className="bi bi-bag-check fs-4 text-white"></i>
                        <span className="position-absolute top-0 start-100 translate-middle py-0 px-2 bg-danger border border-light rounded-circle border-0 shadow-0">
                            <span className="p-0 fs-6 text-white ">{products.length}</span>
                        </span>
                    </button>

                    {/* Profile dropdown */}

                    {user.email && (
                        <Dropdown className="ms-4">
                            <Dropdown.Toggle
                                className="rounded-circle px-1 py-2 bg-success text-uppercase"
                                variant="success"
                                id="dropdown-basic"
                            >
                                {user.email?.slice(0, 2)}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleLogout} href="#/action-1">
                                    Log Out
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
            </header>



            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch
                </Button> */}

                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton  className={styles['custom-close-button']}>
                    
                        <Offcanvas.Title>Total: {total.toFixed(2)}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="card mb-3 border-0">
                            {products.map((product) => (
                                <div className="row mb-3 border rounded shadow-md ">
                                    <div className="col-md-4 py-1">
                                        <img
                                            src={product?.image}
                                            className="object-fill h-28 w-96 rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-8 py-1">
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="card-title ">
                                                    {product.name.slice(0, 22)}
                                                </h5>
                                                <small>Quantity:{product.quantity}</small>
                                                <h6 className="mt-1">
                                                    Total Price:
                                                    {(product.price * product.quantity!).toFixed(2)} $
                                                </h6>
                                            </div>

                                            <div>
                                                <button
                                                    onClick={() => dispatch(addToCart(product))}
                                                    type="button"
                                                    className="bg-primary px-2 py-0 text-white fs-6 d-block mb-1"
                                                >
                                                    <i className="bi bi-plus"></i>
                                                </button>

                                                <button
                                                    onClick={() => dispatch(removeOne(product))}
                                                    type="button"
                                                    className="bg-primary px-2 text-white fs-6 py-0 d-block mb-1"
                                                >
                                                    <i className="bi bi-dash-lg"></i>
                                                </button>

                                                <button
                                                    onClick={() => dispatch(removeFromCart(product))}
                                                    type="button"
                                                    className="bg-danger px-2 text-white fs-6 py-0 d-block"
                                                >
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </>
    );
};

export default Navbar;
