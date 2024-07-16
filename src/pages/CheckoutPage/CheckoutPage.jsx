import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../components/CartContext/CartContext";
import "./CheckoutPage.css";

const statesAndCities = {
  Abia: ["Aba", "Umuahia", "Ohafia"],
  Adamawa: ["Yola", "Mubi", "Numan"],
  AkwaIbom: ["Uyo", "Eket", "Ikot Ekpene"],
  Anambra: ["Awka", "Onitsha", "Nnewi"],
  Bauchi: ["Bauchi", "Azare", "Misau"],
  Bayelsa: ["Yenagoa", "Brass", "Sagbama"],
  Benue: ["Makurdi", "Gboko", "Otukpo"],
  Borno: ["Maiduguri", "Biu", "Bama"],
  CrossRiver: ["Calabar", "Ogoja", "Ugep"],
  Delta: ["Asaba", "Warri", "Sapele"],
  Ebonyi: ["Abakaliki", "Afikpo", "Onueke"],
  Edo: ["Benin City", "Auchi", "Uromi"],
  Ekiti: ["Ado Ekiti", "Ikere", "Ise"],
  Enugu: ["Enugu", "Nsukka", "Oji River"],
  Gombe: ["Gombe", "Kumo", "Deba"],
  Imo: ["Owerri", "Orlu", "Okigwe"],
  Jigawa: ["Dutse", "Hadejia", "Gumel"],
  Kaduna: ["Kaduna", "Zaria", "Kafanchan"],
  Kano: ["Kano", "Wudil", "Gwarzo"],
  Katsina: ["Katsina", "Daura", "Funtua"],
  Kebbi: ["Birnin Kebbi", "Argungu", "Yauri"],
  Kogi: ["Lokoja", "Okene", "Kabba"],
  Kwara: ["Ilorin", "Offa", "Jebba"],
  Lagos: ["Ikeja", "Epe", "Ikorodu", "Badagry", "Lekki"],
  Nasarawa: ["Lafia", "Keffi", "Akwanga"],
  Niger: ["Minna", "Suleja", "Kontagora"],
  Ogun: ["Abeokuta", "Ijebu Ode", "Sagamu"],
  Ondo: ["Akure", "Ondo", "Owo"],
  Osun: ["Osogbo", "Ilesa", "Ife"],
  Oyo: ["Ibadan", "Oyo", "Ogbomosho"],
  Plateau: ["Jos", "Pankshin", "Shendam"],
  Rivers: ["Port Harcourt", "Bonny", "Ahoada"],
  Sokoto: ["Sokoto", "Tambuwal", "Bodinga"],
  Taraba: ["Jalingo", "Wukari", "Gembu"],
  Yobe: ["Damaturu", "Nguru", "Potiskum"],
  Zamfara: ["Gusau", "Kaura Namoda", "Talata Mafara"],
  FCT: ["Abuja", "Gwagwalada", "Kuje", "Bwari", "Abaji"],
};

const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate(); // Hook for navigation

  const [selectedState, setSelectedState] = useState("Lagos");
  const [selectedCity, setSelectedCity] = useState(statesAndCities["Lagos"][0]);
  const [cardNumber, setCardNumber] = useState("");

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    setSelectedCity(statesAndCities[newState][0]);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleCheckout = (event) => {
    event.preventDefault(); // Prevent form submission
    // Implement your checkout logic here, such as sending order details to a server
    alert("Processing checkout...");
    // Optionally, clear cart after successful checkout
    // clearCart();
    setTimeout(() => {
      alert("Checkout Successful! Redirecting to Home.");
      navigate("/"); // Navigate to home after checkout
    }, 2000); // Simulating a delay for fun
  };

  return (
    <div className="checkout-page">
      <h2>
        <span>Payment Method</span> &gt; <span>Payment Verification</span>
      </h2>
      <hr className="hori-heading" />
      <form className="shipping-form" onSubmit={handleCheckout}>
        <section>
          <div className="form-group">
            <label>
              Shipping Address:<span>*</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="16, Ikeja City mall, Lagos"
              required
            />
          </div>
          <div className="form-group select-group">
            <div className="form-input">
              <label>
                State / Province:<span>*</span>
              </label>

              <select
                name="state"
                value={selectedState}
                onChange={handleStateChange}
                required
              >
                {Object.keys(statesAndCities).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-input">
              <label>
                City:<span>*</span>
              </label>
              <select
                name="city"
                value={selectedCity}
                onChange={handleCityChange}
                required
              >
                {statesAndCities[selectedState].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>
              Postal Code:<span>*</span>
            </label>
            <input
              type="text"
              name="postalCode"
              placeholder="100115"
              required
            />
          </div>
          <div className="form-group">
            <label>
              Card Number:<span>*</span>
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="**** **** **** ****"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group select-group">
            <div className="form-input">
              <label>
                Expiration Date:<span>*</span>
              </label>
              <input type="date"  name="expirationDate"
                placeholder="MM / YY"
                required />
            </div>
            <div className="form-input">
              <label>
                CVC:<span>*</span>
              </label>
              <input type="text" name="cvc" placeholder="CVC" required />
            </div>
          </div>
        </section>

        <aside className="order-summary">
          <h3>Order Summary</h3>
          <p className="subheading">Shipping</p>
          <select name="shipping" className="shipping-select">
            <option value="express">$53.000 - Express Delivery</option>
          </select>

          {cart.map((product) => (
            <div key={product.id} className="order-cart-item">
              <div className="price-group">
                <p>Subtotal:</p>
                <p>&#36;{product.price}</p>
                </div>
              <div className="price-group">
              <p>Shipping:</p>
              <p>&#36;33.000</p>
              </div>
              <p>Promo</p>
            </div>
          ))}
          <div className="price-group">
              <p>Total Price:</p>
              <p>&#36;{getTotalPrice()}</p>
              </div>
          <button type="submit" className="checkout-button">
            Check out
          </button>
        </aside>
      </form>
    </div>
  );
};

export default CheckoutPage;
