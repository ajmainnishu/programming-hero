import { useEffect, useState } from "react";
import Place from "../Place/Place";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Places = () => {
    // right side hook
    const [places, setPlaces] = useState([]);
    // left side hook
    const [placeName, setPlaceName] = useState();
    // data load
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    // id check
    const handleClickId = (id) => {
        const singlePlace = places.find(p => p.id === parseInt(id));
        setPlaceName(singlePlace)
    }
    return (
        <div className="w-5/6 mx-auto py-40">
            <div className="grid grid-cols-12">
                {/* left side */}
                <div className="col-span-4 pr-11">
                    {
                        placeName &&
                        <div>
                            <h2 style={{fontFamily: 'Bebas Neue'}} className="text-white uppercase font-normal text-8xl">{placeName.place_name}</h2>
                            <p className="text-white pt-5 font-normal pb-7">{placeName.place_details ? placeName.place_details.slice(0, 180) : ''}...</p>
                            <Link to={`/places/${placeName.id}`} style={{backgroundColor: '#F9A51A'}} className='btn text-base px-7 py-3 border-0 rounded-md font-medium'>Booking <FaArrowRight /></Link>
                        </div>
                    }
                </div>
                {/* right side */}
                <div className="col-span-8">
                    <div className="flex flex-row justify-between">
                        {
                            places.map(place => <Place key={place.id} handleClick={handleClickId} place={place}></Place>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;