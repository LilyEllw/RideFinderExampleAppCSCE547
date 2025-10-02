import { useState, useEffect } from 'react';
import { ParkCard } from '../parkCard/parkCard';
import IPark from '../../models/park';
import './featuredParks.css';
import ParkService from '../../services/parkService';

interface FeaturedParksProps {
    parkService: ParkService
}

export default function FeaturedParks(props: FeaturedParksProps) {
    const [allParks, setAllParks] = useState([])

    const { parkService } = props;

    useEffect(() => {
        parkService.getAllParks().then((res) => {
            setAllParks(res);
        })
    }, [parkService]) 

    return(
        <>
            <h2>Featured Parks</h2>
            <div className="featured-park-grid">
                {allParks.map((park: IPark) => {
                    return <ParkCard key={`ParkID:${park.id}`} park={park} />
                })}
            </div>
        </>
    )
}