import CartDetails from "../../components/CartDetails/cartDetails";
import Footer from "../../components/Footer/footer";
import Homebar from "../../components/Homebar/homebar";
import cartService from "../../services/cartService";

export default function Cart() {
    return (
        <div>
            <div className="header content">
                <Homebar />
            </div>
            <CartDetails />
            <div className="footer content">
                <Footer />
            </div>
        </div>
    )
}