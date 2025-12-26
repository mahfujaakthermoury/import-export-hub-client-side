import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddExport = () => {

    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product Data:");
       
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
        console.log(formData);

        axios.post('https://import-export-hub-gules.vercel.app/products', formData)
            .then(res => {
                console.log(res);
                  Swal.fire({
                            title: "Add Export/Product!",
                            text: "Your Export/Product has been added.",
                            icon: "success"
                        });
                        form.reset()
            })


    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
           
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-700">
                    Add Export / Product
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Product Name
                    </label>
                    <input
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
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Add Export/Product
                </button>

            </form>
        </div>
    );
};

export default AddExport;