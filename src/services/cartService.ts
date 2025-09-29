import { CartItem } from "../models/cartItem";

export default class CartService {
    private items: CartItem[];

    private CART_KEY = 'rideFinderExampleApp'


    //loadCart will be our public facing method, all invocations of getCart should be internal so we only have one source of truth
    private getCart = () => {
        return this.items;
    }

    loadCart = () => {
        return JSON.parse(localStorage.getItem(this.CART_KEY));
    }

    addItemToCart = (newItem: CartItem) => {
        const cart = this.getCart();
        const itemInCart = cart.findIndex((item) => item.park.id === newItem.park.id);
        if(itemInCart > -1) {
            this.updateCart(cart[itemInCart], newItem);
        }
        cart.push(newItem);
        this.save();
    }

    removeItemFromCart = (remItem: CartItem) => {
        const cart = this.getCart();
        cart.filter((val) => !(val.park.id === remItem.park.id || val.numDays === remItem.numDays))
        this.save();
    }

    updateCart(oldItem: CartItem, newItem: CartItem) {
        const cart = this.getCart()
        if(oldItem.park.id !== newItem.park.id) {
            this.save();
        }

        //Update with new item first and then old item if it doesn't exist
        const combinedItem = {
            park: newItem.park || oldItem.park,
            numDays: newItem.numDays || oldItem.numDays,
            numAdults: newItem.numAdults || oldItem.numAdults,
            numKids: newItem.numKids || oldItem.numKids
        };
        const index = cart.findIndex((val) => val.park.id === combinedItem.park.id);
        if(index > -1) {
            cart[index] = combinedItem;
        }
        this.save();
    }

    private save() {
        localStorage.setItem(this.CART_KEY, JSON.stringify(this.getCart()));
    }
}