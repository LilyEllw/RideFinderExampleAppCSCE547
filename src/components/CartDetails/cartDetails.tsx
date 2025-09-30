import CartService from "../../services/cartService";
import CartCard from "../cartCard/cartCard";
import { CartItem } from '../../models/cartItem';

type CartDetailsProps = {
	cartService: CartService
}

export default function cartDetails(props: CartDetailsProps) {
	const { cartService } = props;
    //Pulling from local storage as source of truth
    const cart = cartService.loadCart();
	
	
    return(
        <div>{cart.map(((item: CartItem) => <CartCard cartItem={item} />))}</div>
    )
}