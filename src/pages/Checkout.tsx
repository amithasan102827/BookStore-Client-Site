import React from "react";
import { useAppSelector } from "../redux/hook";
import { Button } from "react-bootstrap";

const Checkout = () => {
  const { products, total } = useAppSelector((state) => state.cart);

  return (
    <div>
      <div className="px-5 mx-5 my-5">
        <div className="row">
          <div className="col-md-7">
            <div className="w-75 mx-auto shadow-md border rounded">
              <form className="row g-3 px-4 py-5">
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-5 ">
            <div className="border py-5 rounded shadow-md h-24 min-h-full w-11/12">
              {products.map((product) => (
                <>
                  <div className="row mb-3 w-96 mx-auto border rounded ">
                    <div className="col-md-4 py-2">
                      <img
                        src={product?.image}
                        className="object-fill h-28 w-96 rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 py-2">
                      <div className="card-body">
                        <div>
                          <h5 className="card-title">{product.name}</h5>
                          <small>Quantity:{product.quantity}</small>
                          <h6 className="mt-1">
                            Total Price:
                            {(product.price * product.quantity!).toFixed(2)} $
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <div className="px-4 mt-5">
                <h3 className="fs-6 fw-semibold mb-2 text-muted">
                  Subtotal: ${total.toFixed(2)}
                </h3>
                <h3 className="fs-6 fw-semibold mb-2 text-muted">
                  Delivery: $3.75
                </h3>
                <h3 className="fs-6 fw-semibold mb-3">
                  Total: ${(total + 3.75).toFixed(2)}
                </h3>

                <Button className="bg-primary text-white w-100" variant="">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
