import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useFetchData from "../../../hooks/useFetchData/useFetchData";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateManageItem = () => {
    const { id } = useParams();
    const [menu] = useFetchData();
    // find specific item
    const menuItem = menu.find(item => item._id === id);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    // update button
    const onSubmit = data => {
        fetch(`http://localhost:5000/menu/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated Successfully",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    // redirect manage items
                    navigate('/dashboard/manageItems')
                }
            })
    }
    return (
        <div className="w-10/12 mx-auto pt-12 pb-32 space-y-16">
            <Helmet>
                <title>Bistro Boss | Update Items</title>
            </Helmet>
            <h2 className="text-center text-[#151515] font-normal text-[40px]">UPDATE ITEM</h2>
            <div className="bg-[#F3F3F3] p-12">
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label ps-0">
                            <span className="text-[#444444] font-semibold text-xl">Recipe name*</span>
                        </label>
                        <input defaultValue={menuItem?.name} type="text" {...register("name", { required: true })} placeholder="Recipe name" className="input input-lg input-bordered w-full placeholder:text-[#A1A1A1] placeholder:font-normal placeholder:text-xl" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label ps-0">
                                <span className="text-[#444444] font-semibold text-xl">Category*</span>
                            </label>
                            <select defaultValue={menuItem?.category} {...register("category", { required: true })} className="select select-lg select-bordered text-xl font-normal">
                                <option disabled>Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label ps-0">
                                <span className="text-[#444444] font-semibold text-xl">Price*</span>
                            </label>
                            <input type="number" defaultValue={menuItem?.price} step={'any'} {...register("price", { required: true })} placeholder="Price" className="input input-lg input-bordered w-full placeholder:text-[#A1A1A1] placeholder:font-normal placeholder:text-xl" />
                        </div>
                    </div>
                    {/* details */}
                    <div className="form-control">
                        <label className="label ps-0">
                            <span className="text-[#444444] font-semibold text-xl">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} defaultValue={menuItem?.recipe} className="textarea textarea-bordered h-48 resize-none placeholder:text-[#A1A1A1] placeholder:font-normal placeholder:text-xl" placeholder="Recipe Details"></textarea>
                    </div>
                    {/* button */}
                    <div className="text-center">
                        <button type="submit" className="btn capitalize text-white border-0  bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none text-xl font-bold px-7">Update Recipe Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateManageItem;