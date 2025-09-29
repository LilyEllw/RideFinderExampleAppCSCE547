import { useState } from "react"
export default function Search() {

    const [location, setLocation] = useState("")
    const [minimumRating, setMinimumRating] = useState(0);

    const submitForm = () => {
        return ":)";
    }
    return(
        <form className="flex container">
            <label className="location box">
                <div className="location text">
                    Location
                </div>
                <input className="location search-box" value={location} onChange={e => setLocation(e.target.value)} placeholder="Search by location..." />
            </label>
            <label className="rating box">
                <div className="rating text">
                    Minimum Rating
                </div>
                <select id="ratings" name="minRating" value={minimumRating} onChange={e => setMinimumRating(Number.parseFloat(e.target.value))}>
                    <option value={0}>Any Rating</option>
                    <option value={4.5}>4.5 Stars & Up</option>
                    <option value={4}>4 Stars & Up</option>
                    <option value={3}>3 Stars & Up</option>
                </select>
            </label>
            <button onClick={() => submitForm()}>Apply Filters</button>
        </form>
    )
}