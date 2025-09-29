import { useParams } from "react-router";
import Homebar from "../../components/Homebar/homebar";
import Footer from "../../components/Footer/footer";
import DetailsPage from "../../components/DetailsPage/detailsPage";
import parkService from "../../services/parkService";
import { useEffect, useState } from "react";
import IPark from "../../models/park";
import './parkDetails.css';
import ParkService from "../../services/parkService";
import cartService from "../../services/cartService";

interface ParkDetailsProps {
    parkService: ParkService
    cartService: cartService
}

export default function ParkDetails(props: ParkDetailsProps) {
    const { parkId } = useParams();
    const { parkService, cartService } = props;
    const [selectedPark, setSelectedPark] = useState({} as IPark)

    useEffect(() => {
        parkService.getParkById(parkId).then((res) => {
            setSelectedPark(res);
        })
    }, [parkId])
    

    return (
        <div>
            <div className="header content">
                <Homebar />
            </div>
            <DetailsPage park={selectedPark} parkService={parkService} cartService={cartService}/>
            <div className="footer content">
                <Footer />
            </div>
        </div>
    )
}