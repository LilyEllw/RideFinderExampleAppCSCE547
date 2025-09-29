import cartService from "../../services/cartService";

export default function cartDetails() {
    //We can instantiate this again since it pulls from local, not ideal but it will work
    const service = new cartService();

    //Pulling from local storage as source of truth
    const cart = service.loadCart();

    return(
        <div>:)</div>
    )
}