import CartService from "../../services/cartService";
import CartCard from "../cartCard/cartCard";
import { CartItem } from '../../models/cartItem';
import { useState } from "react";
import "./cartDetails.css"

type CartDetailsProps = {
	cartService: CartService
}

export default function CartDetails(props: CartDetailsProps) {
	const { cartService } = props;

    //Pulling from local storage as source of truth
    const [cart, setCart] = useState(cartService.loadCart());
	
    const updateCartItem = (newCartItem: CartItem) => {
        const item = cart.find((item: CartItem) => item.park.id === newCartItem.park.id);
        cartService.updateCart(item, newCartItem);
        setCart(cartService.loadCart());
    }

    const deleteCartItem = (item: CartItem) => {
        cartService.removeItemFromCart(item);
        setCart(cartService.loadCart());
    }

    const getTaxPrice = () => {
        return cart.reduce((acc, curr) => {
            const {numAdults, numDays, numKids, park} = curr;
            return (
                acc + 
                    ((numAdults * numDays * park.adultPrice) + 
                    (numKids * numDays * park.childPrice)) * 0.08 
        )
        }, 0)
    }

    const getTotalPrice = () => {
        return cart.reduce((acc, curr) => {
            const {numAdults, numDays, numKids, park} = curr;
            return (
                acc + 
                    ((numAdults * numDays * park.adultPrice) + 
                    (numKids * numDays * park.childPrice)) * 1.08 
        )
        }, 0)
    }
	
    return(
        <div>
            <div className="cartItems column">
                {cart.map(((item: CartItem) => <CartCard cartItem={item} updateFn={(e) => updateCartItem(e)} deleteFn={deleteCartItem} />))}      
            </div>
            <div>
                Tax: {getTaxPrice().toFixed(2)}
            </div>
            <div>
                Total Price: {getTotalPrice().toFixed(2)}
            </div>
        </div>
    )
}