import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    // imgbb hosting url
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, category, price, recipe } = data;
                    const newItem = { name, category, price: parseFloat(price), recipe, image: imgURL };
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Item added successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
    }
    return (
        <div className="w-10/12 mx-auto pt-12 pb-32 space-y-16">
            {/* website title dynamic */}
            <Helmet>
                <title>Bistro Boss | Add Items</title>
            </Helmet>
            {/* section title */}
            <SectionTitle title={'ADD AN ITEM'} subTitle={"What's new?"}></SectionTitle>
            <div className="bg-[#F3F3F3] p-12">
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label ps-0">
                            <span className="text-[#444444] font-semibold text-xl">Recipe name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Recipe name" className="input input-lg input-bordered w-full placeholder:text-[#A1A1A1] placeholder:font-normal placeholder:text-xl" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-x-6 gap-y-4">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label ps-0">
                                <span className="text-[#444444] font-semibold text-xl">Category*</span>
                            </label>
                            <select defaultValue={'Category'} {...register("category", { required: true })} className="select select-lg select-bordered text-xl font-normal">
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
                            <input type="number" step={'any'} {...register("price", { required: true })} placeholder="Price" className="input input-lg input-bordered w-full placeholder:text-[#A1A1A1] placeholder:font-normal placeholder:text-xl" />
                        </div>
                    </div>
                    {/* details */}
                    <div className="form-control">
                        <label className="label ps-0">
                            <span className="text-[#444444] font-semibold text-xl">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-48 resize-none placeholder:text-[#A1A1A1] placeholder:font-normal placeholder:text-xl" placeholder="Recipe Details"></textarea>
                    </div>
                    {/* file input */}
                    <div>
                        <input type="file" {...register("image", { required: true })} className="file-input  w-full file:capitalize file:bg-[#E8E8E8] file:border-0 file:text-[#444444] file:text-xl file:font-normal text-[#444444] font-normal text-xl max-w-xs bg-transparent mt-2 mb-4" />
                    </div>
                    {/* button */}
                    <button type="submit" className="btn capitalize text-white border-0  bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none text-xl font-bold px-7">Add Item <FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;