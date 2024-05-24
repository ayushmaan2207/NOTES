import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/Checkout.css';

const CheckoutPage = () => {
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 }; // Default to 0 if not passed

  const handleProceedToPayment = () => {
    // Handle proceed to payment logic here
    console.log("Proceeding to payment with total price: ", totalPrice);
  };

  return (
    <div className="checkout-page">
      <section className="first">
        <div className="back">
          <div>
            <Link to="/booknow" style={{ textDecoration: 'none', fontFamily: 'Algerian', color: 'rgb(242, 187, 115)', fontSize: '22px' }}>
              <h3>FAYUL RETREAT</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="s1">
          <p>Not Ready to submit your reservation?</p>
        </div>
        <div className="s2">
          <button className="s2-button">Save For Later</button>
        </div>
      </section>

      <section className="third">
        <div className="t1">
          <h3>Guest Information</h3>
        </div>
        <div className="t2">
          <p>Guest Name<span>*</span></p>
          <div className="names">
            <input type="text" name="firstname" placeholder="Enter First name" />
            <input type="text" name="lastname" placeholder="Enter Last name" />
          </div>
        </div>
        <div className="t3">
          <p>Mobile<span>*</span></p>
          <input type="tel" placeholder="Enter Mobile Number" minLength="10" />
        </div>
        <div className="t3">
          <p>Email<span>*</span></p>
          <input type="email" placeholder="Email" />
          <p>Your voucher will be sent to this email address</p>
        </div>
        <div className="t4">
          <button className="t4-button">Online Payment</button>
          <p>You will be redirected to our secure online payment site.</p>
        </div>
        <div className="t5">
          <h4>Hotel Policy & Booking Conditions</h4>
          {/* Include policy content */}
        </div>
        <p>
          <input type="checkbox" id="termsCheckbox" />
          <label htmlFor="termsCheckbox">I acknowledge and accept the Terms of Booking Conditions & Cancellation Policy.</label>
        </p>
        <div>
          <button className="t5-button1">Review Your Booking</button>
          <button className="t5-button2" onClick={handleProceedToPayment}>Proceed to Payment</button>

    </div>
  </section >

  <section className="third-two">
    <div className="t2-1">
      <h3>Your Booking Summary</h3>
    </div>
    <div className="t2-2">
      <p>Fayul Retreat</p>
      <p>Address:</p>
      <div className="addressblock">
        <p>Himachal Pradesh</p>
        <p>District KINNAUR</p>
        <p>Village Kalpa</p>
        <p>Chaka Road</p>
        <p>Pin Code: 172108</p>
      </div>
      <div>
        <p><span className="material-symbols-outlined">call</span> +91 94648 14033</p>
        <p><span className="material-symbols-outlined">mail</span> <a href="mailto:fayulretreat@gmail.com">fayulretreat@gmail.com</a></p>
      </div>
    </div>
    <div className="roomrates">
      <p>Room and Rates</p>
      <p>Rate Plan name: Mud Room</p>
    </div>
    <div>
      <table>
        <tbody>
          <tr>
            <td>Room Charge</td>
            <td>Rs. {totalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Taxes & Fees</td>
            <td>Rs. 254</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="totalamt">
      <h4>Total Amount</h4>
    </div>
    <div className="payn">
      <div>
        <p>Pay Now</p>
      </div>
      <div>
        <p>Rs. {(totalPrice + 254).toFixed(2)}</p> {/* Display Total Price including taxes */}
      </div>
    </div>
  </section>
    </div >
  );
};

export default CheckoutPage;
