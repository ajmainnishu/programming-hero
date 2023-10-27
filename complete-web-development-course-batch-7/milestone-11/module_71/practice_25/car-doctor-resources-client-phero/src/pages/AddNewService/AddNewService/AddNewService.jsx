import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Swal from 'sweetalert2'

const AddNewService = () => {
    // dynamic title
    useTitle('Add Service')
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const serviceID = form.serviceID.value;
        const description = form.description.value;
        const fName1 = form.fName1.value;
        const fDetails1 = form.fDetails1.value;
        const fName2 = form.fName2.value;
        const fDetails2 = form.fDetails2.value;
        const fName3 = form.fName3.value;
        const fDetails3 = form.fDetails3.value;
        const fName4 = form.fName4.value;
        const fDetails4 = form.fDetails4.value;
        // facility input fields
        const facilities = [{ fName1, fDetails1 }, { fName2, fDetails2 }, { fName3, fDetails3 }, { fName4, fDetails4 }]
        // all input fields
        const service = { name, price, photo, serviceID, description, facilities };
        //  fetch post data to mongodb
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // sweetalert
                    Swal.fire(
                        'Successfully',
                        'Your Service added Successfully',
                        'success'
                    )
                }
                form.reset()
            });
    }
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0 space-y-32">
            <Banner></Banner>
            <form onSubmit={handleAddService} className="space-y-6 p-10 md:p-24 bg-[#F3F3F3] rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* service name */}
                    <input type="text" name="name" placeholder="Service Name *" className="input input-bordered w-full" required />
                    {/* price */}
                    <input type="number" name="price" placeholder="Service Price *" className="input input-bordered w-full" required />
                    {/* photo url */}
                    <input type="text" name="photo" placeholder="Photo URL *" className="input input-bordered w-full" required />
                    {/* service id */}
                    <input type="number" name="serviceID" placeholder="Service ID *" className="input input-bordered w-full" required />
                    {/* service item name 1 */}
                    <input type="text" name="fName1" placeholder="Facility Name 1" className="input input-bordered w-full" />
                    {/* service item detail 2 */}
                    <input type="text" name="fDetails1" placeholder="Facility Details 1" className="input input-bordered w-full" />
                    {/* service item name 2 */}
                    <input type="text" name="fName2" placeholder="Facility Name 2" className="input input-bordered w-full" />
                    {/* service item detail 2 */}
                    <input type="text" name="fDetails2" placeholder="Facility Details 2" className="input input-bordered w-full" />
                    {/* service item name 3 */}
                    <input type="text" name="fName3" placeholder="Facility Name 3" className="input input-bordered w-full" />
                    {/* service item detail 3 */}
                    <input type="text" name="fDetails3" placeholder="Facility Details 3" className="input input-bordered w-full" />
                    {/* service item name 4 */}
                    <input type="text" name="fName4" placeholder="Facility Name 4" className="input input-bordered w-full" />
                    {/* service item detail 4 */}
                    <input type="text" name="fDetails4" placeholder="Facility Details 4" className="input input-bordered w-full" />
                </div>
                <textarea name="description" placeholder="Service Description *" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                <button className="btn capitalize text-xl btn-block font-semibold bg-[#FF3811] border-none text-white rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default AddNewService;