import { useState } from "react";
import IPark from "../../models/park";
import './bookRide.css';
import cartService from "../../services/cartService";

interface bookRideProps {
    park: IPark
    cartService: cartService
}

export default function BookRide(props: bookRideProps) {
    const { park, cartService } = props;

    const [numAdults, setNumAdults] = useState(0);
    const [numKids, setNumKids] = useState(0)
    const [numDays, setNumDays] = useState(1)



    const getTotalPrice = () => {
        return `$${(((numAdults * park.adultPrice) + (numKids * park.childPrice)) * numDays).toFixed(2)}`;
    }
    return (park && 
        <div className="bookRide book-container">
            <h2>Book Your Ride</h2>
            <div className="price-container">
                <div className="price adult-price">
                    <label htmlFor="numAdults"><b>Adults (${park.adultPrice || 0}/day)</b></label>
                    <input className="input-field" type="number" min={0} value={numAdults} onChange={e => setNumAdults(Number.parseInt(e.target.value))} />
                </div>
                <div className="price kid-price">
                    <label htmlFor="numKids"><b>Kids (${park.childPrice || 0}/day)</b></label>
                    <input className="input-field" type="number" min={0} value={numKids} onChange={e => setNumKids(Number.parseInt(e.target.value))} />
                </div>
                <div className="days days-number">
                    <label htmlFor="numDays"><b>Days</b></label>
                    <input className="input-field" type="number" min={1} value={numDays} onChange={e => setNumDays(Number.parseInt(e.target.value))} /> 
                </div>
            </div>
            <hr />
            <div className="total-price"><b>Total: {getTotalPrice()}</b></div>
            <button onClick={e => submitForm(e)} className="button-add-to-cart">Add to Cart</button>
        </div>)
}