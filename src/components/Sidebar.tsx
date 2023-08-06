import React from 'react'
import { IProduct } from '../../../types/globalTypes';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { addToCart, removeFromCart, removeOne } from '../redux/features/cart/cartSlice';


const Sidebar = () => {

    const { products, total } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    return (
        <div>
            {/* <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href
            </a>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Button with data-bs-target
            </button> */}

            <div className="offcanvas offcanvas-end" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas- mt-4 fw-bold" id="offcanvasExampleLabel">Total: {total.toFixed(2)}</h5>
                    <button type="button" className="btn-close outline-none shadow-none me-2 text-dark" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-square-fill fs-3"></i></button>
                </div>
                <div className="offcanvas-body">
                    <div className="card mb-3">
                        <div className="row g-4">

                            {products.map((product) => (
                                <>
                                    <div className="col-md-4 shadow-sm">
                                        <img src={product?.image} className="img-fluid w-75 rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8 shadow-sm">
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="card-title">{product.name}</h5>
                                                <small>Quantity:{product.quantity}</small>
                                                <h6 className='mt-1'>Total Price:{(product.price * product.quantity!).toFixed(2)}{' '}
                                                    $</h6>
                                            </div>

                                            <div>
                                                <button onClick={() => dispatch(addToCart(product))} type="button" className="bg-primary px-2 py-0 text-white fs-6 d-block mb-1"><i className="bi bi-plus"></i></button>

                                                <button onClick={() => dispatch(removeOne(product))} type="button" className="bg-primary px-2 text-white fs-6 py-0 d-block mb-1"><i className="bi bi-dash-lg"></i></button>

                                                <button onClick={() => dispatch(removeFromCart(product))} type="button" className="bg-danger px-2 text-white fs-6 py-0 d-block"><i className="bi bi-trash-fill"></i></button>

                                            </div>

                                        </div>
                                    </div>
                                </>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar