import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'





const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => { 
        console.log(data)
    };
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};





export default AddService;