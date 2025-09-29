import FeaturedParks from "../../components/FeaturedParks/featuredParks";
import Footer from "../../components/Footer/footer";
import HeroContent from "../../components/HeroContent/heroContent";
import Homebar from "../../components/Homebar/homebar";
import Search from "../../components/Search/search";
import ParkService from "../../services/parkService";
import './home.css';

interface HomeProps {
    parkService: ParkService
}

export default function Home(props: HomeProps) {
    const { parkService } = props;
    return (
        <div>
            <div className="header content">
                <Homebar />
            </div>
            <HeroContent /> 
            <Search />
            <FeaturedParks parkService={parkService}/>
            <div className="footer content">
                <Footer />
            </div>
        </div>
    )
}