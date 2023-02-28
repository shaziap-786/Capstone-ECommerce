import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row,Alert } from "react-bootstrap";

import { CartState } from "../context/Context";
// import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const Checkout = () => {

  // const history = useHistory();
  // if(!localStorage.getItem('auth_token')){
  //     history.push('/');
  //     swal("Warning","Login to goto Cart Page","error");
  // }

  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const [checkoutInput, setCheckoutInput] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
});

const handleInput = (e) => {
  e.persist();
  setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value });
}

// const submitOrder = (e, payment_mode) => {
//   e.preventDefault();


//   // var data = {
//   //     firstname: checkoutInput.firstname,
//   //     lastname: checkoutInput.lastname,
//   //     phone: checkoutInput.phone,
//   //     email: checkoutInput.email,
//   //     address: checkoutInput.address,
//   //     city: checkoutInput.city,
//   //     state: checkoutInput.state,
//   //     zipcode: checkoutInput.zipcode,
//   //     payment_mode: payment_mode,
//   //     payment_id: '',
//   // }

//   // swal.fire(
//   //   "Order Placed Successfully"
//   // );
// //   axios.post(`/api/place-order`, data).then(res=>{
// //     if(res.data.status === 200)
// //     {
// //         swal("Order Placed Successfully",res.data.message,"success");
// //         // setError([]);
// //         history.push('/thank-you');
// //     }
// //     else if(res.data.status === 422)
// //     {
// //         swal("All fields are mandatory","","error");
// //         setError(res.data.errors);
// //     }
// // });

// }
  var totalCartPrice = 0;

    // return (
        return ( <div>
          <div className="row">

          <div className="col-md-7">
              <div className="card">
                  <div className="card-header">
                      <h4>Basic Information</h4>
                  </div>
                  <div className="card-body">

                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label> First Name</label>
                                  <input type="text" name="firstname" onChange={handleInput} value={checkoutInput.firstname}  className="form-control"/>
                                  {/* <small className="text-danger">{error.firstname}</small> */}
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label> Last Name</label>
                                  <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control"/> 
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label> Phone Number</label>
                                  <input type="number" name="phone" onChange={handleInput} value={checkoutInput.phone} className="form-control"/> 
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group mb-3">
                                  <label> Email Address</label>
                                  <input type="email" name="email"  onChange={handleInput} value={checkoutInput.email} className="form-control"/>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="form-group mb-3">
                                  <label> Street Address</label>
                                  <textarea rows="3" name="address" onChange={handleInput} value={checkoutInput.address} className="form-control"/>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="form-group mb-3">
                                  <label>City</label>
                                  <input type="text" name="city" onChange={handleInput} value={checkoutInput.city}  className="form-control"/>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="form-group mb-3">
                                  <label>State</label>
                                  <input type="text" name="state" onChange={handleInput} value={checkoutInput.state} className="form-control"/>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="form-group mb-3">
                                  <label>Zip Code</label>
                                  <input type="text" name="zipcode" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" />
                              </div>
                          </div>
                          <div className="col-md-12">
                                <div className="form-group text-end">
                                    <button type="button" className="btn btn-primary mx-1"  onClick={() => 
                                      alert("Order placed successfully!")
                                      // window.location.replace("");
                                      // dispatch({
                                      //   type: "REMOVE_FROM_CART",
                                      //   payload: prod,
                                      // })
                                      }>Place Order</button>
                                </div>
                            </div>
                      </div>

                  </div>
              </div>
          </div>

          <div className="col-md-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map( (item, idx) => {
                            totalCartPrice += item.price * item.qty;
                            return (
                                <tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{(item.price * item.qty).toFixed(2)}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="2" className="text-end fw-bold">Grand Total</td>
                            <td colSpan="2" className="text-end fw-bold">{totalCartPrice.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

          {/* <div className="col-md-5">
              <table className="table table-bordered">
                  <thead>
                      <tr>
                          <th width="50%">Product</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      {cart.map( (item, idx) => {
                          totalCartPrice += item.product.selling_price * item.product_qty;
                          return (
                              <tr key={idx}>
                                  <td>{item.product.name}</td>
                                  <td>{item.product.selling_price}</td>
                                  <td>{item.product_qty}</td>
                                  <td>{item.product.selling_price * item.product_qty}</td>
                              </tr>
                          )
                      })}
                      <tr>
                          <td colSpan="2" className="text-end fw-bold">Grand Total</td>
                          <td colSpan="2" className="text-end fw-bold">{totalCartPrice}</td>
                      </tr>
                  </tbody>
              </table>
          </div> */}

          </div>
      </div>
          );
                                    // );
};


 export default Checkout;
