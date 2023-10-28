import { useState } from "react";
import moment from 'moment';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from "../../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const Search = () => {
    // website title dynamic
    useTitle('');
    // get fetch data from server
    const loadingData = useLoaderData();
    // get fetch data state
    const [volunteers, setVolunteers] = useState(loadingData);
    // moment js date
    const date = moment().format('D MMM, YYYY')
    // post event
    const handleClick = id => {
        const volunteerData = volunteers.find(volunteer => volunteer._id === id);
        const { img, title } = volunteerData;
        const data = { title, img, date };
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // sweetalert
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                // toastify
                toast(error.message);
            })

    }
    // input search field
    const handleInputEnter = (event) => {
        // check enter key
        if (event.key === 'Enter') {
            const inputField = event.target.value;
            let foundResult = []
            for (const volunteer of loadingData) {
                if (volunteer.title.toLowerCase().includes(inputField.toLowerCase())) {
                    foundResult.push(volunteer);
                }
            }
            setVolunteers(foundResult);
        }
    }
    // search button
    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.searchInput.value;
        const foundResult = [];
        for (const volunteer of loadingData) {
            if (volunteer.title.toLowerCase().includes(title.toLowerCase())) {
                foundResult.push(volunteer);
            }
        }
        setVolunteers(foundResult);
    }
    return (
        <div className="w-10/12 mx-auto pb-24 space-y-12">
            {/* header title */}
            <div className="text-center space-y-6">
                <h1 className="uppercase font-bold text-3xl md:text-4xl">I grow by helping people in need.</h1>
                {/* search item */}
                <form onSubmit={handleSearch} className="flex justify-center items-center">
                    <input onKeyDown={handleInputEnter} name="searchInput" type="text" placeholder="Type here" className="input input-bordered border-e-0 rounded-l-lg rounded-none w-full max-w-xs" />
                    <button className="btn rounded-r-lg rounded-none capitalize bg-[#3F90FC] text-white border-0 font-medium text-base md:px-8">Search</button>
                </form>
            </div>
            {/* container mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {
                    volunteers.map(volunteer => <div key={volunteer._id} className="relative">
                        <img src={volunteer?.img} alt="image" className="rounded-none w-full" />
                        <button onClick={() => handleClick(`${volunteer._id}`)} className="absolute bottom-0 right-0 left-0 capitalize text-white text-xl border-0 rounded-b-lg px-2 flex justify-center items-center hover:cursor-pointer btn-block h-[80px] hover:bg-transparent text-center" style={{ backgroundColor: `${volunteer.color}` }}>{volunteer?.title}</button>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Search;