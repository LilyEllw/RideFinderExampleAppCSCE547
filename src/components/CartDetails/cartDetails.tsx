import CartService from "../../services/cartService";
import CartCard from "../cartCard/cartCard";
import { CartItem } from '../../models/cartItem';
import { useState } from "react";

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

    const getTotalPrice = () => {
        
    }
	
    return(
        <div>
            {cart.map(((item: CartItem) => <CartCard cartItem={item} updateFn={(e) => updateCartItem(e)} deleteFn={deleteCartItem} />))}    
        </div>
    )
}