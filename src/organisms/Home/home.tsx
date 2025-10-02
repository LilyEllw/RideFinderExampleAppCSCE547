import FeaturedParks from "../../components/FeaturedParks/featuredParks";
import HeroContent from "../../components/HeroContent/heroContent";
import Search from "../../components/Search/search";
import CartService from "../../services/cartService";
import ParkService from "../../services/parkService";
import './home.css';

interface HomeProps {
    parkService: ParkService
    cartService: CartService;
}

export default function Home(props: HomeProps) {
    const { parkService,  } = props;
    return (
        <div>
            <HeroContent /> 
            <Search />
            <FeaturedParks parkService={parkService}/>
        </div>
    )
}