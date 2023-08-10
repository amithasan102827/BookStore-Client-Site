// import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../redux/hook';

import Dropdown from 'react-bootstrap/Dropdown';
import { signOut } from 'firebase/auth';
import { setUser } from '../redux/features/user/userSlice';
import { auth } from '../lib/firebase';


const Navbar = () => {

    const { products } = useAppSelector((state) => state.cart);

    const { user } = useAppSelector((state) => state.user);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        console.log('Logout');
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(setUser(null));
        });
    };

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap px-5 md:py-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl"><Link to='/'>BookShop</Link></span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900"><Link to='/'>Home</Link></a>
                        {
                            !user.email && (
                                <>
                                <a className="mr-5 hover:text-gray-900"><Link to='/signup'>SignUp</Link></a>
                        <a className="mr-5 hover:text-gray-900"><Link to='/login'>Login</Link></a>
                                
                                </>
                            )
                        }
                        <a className="mr-5 hover:text-gray-900"><Link to='/checkout'>Checkout</Link></a>
                    </nav>


                    {/* <a className="btn btn-primary px-2 py-0 position-relative" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="bi bi-bag-check fs-4"></i>
                        <p className='position-absolute top-0 end-0  py-0 fw-semibold  rounded-circle'>{products.length}</p>
                    </a> */}

                    <button type="button" className="btn bg-primary position-relative py-0 px-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i className="bi bi-bag-check fs-4 text-white"></i>
                        <span className="position-absolute top-0 start-100 translate-middle py-0 px-2 bg-danger border border-light rounded-circle border-0 shadow-0">
                            <span className="p-0 fs-6 text-white ">{products.length}</span>
                        </span>
                    </button>





                    {/* Profile dropdown */}
                    
                    {
                        user.email && (
                            <Dropdown className='ms-4'>
                        <Dropdown.Toggle className='rounded-circle px-1 py-2 bg-success text-uppercase' variant="success" id="dropdown-basic">
                            {(user.email)?.slice(0, 2)}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleLogout} href="#/action-1">Log Out</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        )
                    }




                </div>
            </header>

            <Sidebar></Sidebar>
        </>
    )
}

export default Navbar