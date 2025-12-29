import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import useTitle from '../hooks/useTitle';

const UpdateMyExport = () => {

    useTitle('Update My Export');

    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [product, setProduct] = useState()
    const navigation = useNavigate()

    useEffect(() => {
        axios.get(`https://import-export-hub-gules.vercel.app/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
    }, [id])

    console.log(product);

    const handleUpdate = (e) => {
        e.preventDefault();
       /// console.log("Product Data:");
        toast.success("Product update successfully!");

        const form = e.target;

        const name = form.name.value;
        const imageUrl = form.imageUrl.value;
        const price = form.price.value;
        const originCountry = form.originCountry.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        
        const formData = {
            name,
            imageUrl,
            price,
            originCountry,
            rating,
            quantity,
            email
        }

        axios.put(`https://import-export-hub-gules.vercel.app/update/${id}`, formData)
            .then(res => {
                console.log(res);
                navigation('/MyExport');
            })
    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
            <Toaster reverseOrder={false} />
            <form
                onSubmit={handleUpdate}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">
                    Update Export / Product
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Product Name
                    </label>
                    <input                                                                                  
                        defaultValue={product?.name}
                        type="text"
                        name="name"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Product Image (URL)
                    </label>
                    <input
                        defaultValue={product?.imageUrl}
                        type="url"
                        name="imageUrl"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Price
                    </label>
                    <input
                        defaultValue={product?.price}
                        type="number"
                        name="price"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Origin Country
                    </label>
                    <input
                        defaultValue={product?.originCountry}
                        type="text"
                        name="originCountry"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Rating (0–5)
                    </label>
                    <input
                        defaultValue={product?.rating}
                        type="number"
                        name="rating"
                        min="0"
                        max="5"
                        step="0.1"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Available Quantity
                    </label>
                    <input
                        defaultValue={product?.quantity}
                        type="number"
                        name="quantity"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        value={user?.email}
                        type="email"
                        name="email"
                        required
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full font-bold mt-5 py-2 rounded-md text-[#074799] hover:bg-[#4DA8DA] bg-[#dadada] border border-[#074799]"
                >
                    Update Product
                </button>

            </form>
        </div>
    );
};

export default UpdateMyExport;