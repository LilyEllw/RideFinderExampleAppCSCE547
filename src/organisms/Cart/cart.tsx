import CartDetails from "../../components/CartDetails/cartDetails";
import Footer from "../../components/Footer/footer";
import Homebar from "../../components/Homebar/homebar";
import CartService from "../../services/cartService";

type CartProps = {
	cartService: CartService
};

export default function Cart(props: CartProps) {
    const { cartService } = props;
	return (
        <div>
            <div className="header content">
                <Homebar />
            </div>
            <CartDetails cartService={cartService} />
            <div className="footer content">
                <Footer />
            </div>
        </div>
    )
}