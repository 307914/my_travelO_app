import axios from "axios";
import { Hotel, Navbar } from "../../components"
import { useCategory, useDate } from "../../context"
import { useEffect, useState } from "react";
import './searchresults.css'

export const SearchResult = () => {
    const { destination, datedispatch } = useDate();
    const [hotels, setHotels] = useState([]);
    const { state } = useCategory();

    useEffect(() => {

        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3500/api/gethotels/categories?category=${state}`);
                setHotels(data);
            } catch (error) {
                console.log("error is in searhresults", error);
            }
        })()
    }, [destination])
    console.log("the hotels is", hotels);

    const filterredData = hotels.filter(({ address, city, state }) =>
        address.toLowerCase() === destination.toLowerCase() ||
        city.toLowerCase() === destination.toLowerCase() ||
        state.toLowerCase() === destination.toLowerCase()
    )
    return (
        <>
            <Navbar />
            <main className="d-flex align-center wrap searchresultpage">
                {
                    filterredData && filterredData.map((hotel) =>
                        <Hotel key={hotel._id} hotel={hotel}
                        />
                    )
                }
            </main>

        </>
    )
}