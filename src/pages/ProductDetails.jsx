import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const { myId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [importQuantity, setImportQuantity] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${myId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [myId]);

    //const notify = (msg) => toast.success(msg);

    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        setImportQuantity(value);

        if (value === 0) {
            alert("Quantity is not valid"); // User entered 0
            setIsSubmitDisabled(true);
        } else if (!value || value < 0 || value > product.quantity) {
            setIsSubmitDisabled(true);
        } else {
            setIsSubmitDisabled(false);
        }
    };

    const handleImportSubmit = async () => {
        if (!importQuantity || importQuantity <= 0) return;

        if (product.quantity === 0) {
            alert("Cannot import: product quantity is 0");
            return;
        }

        if (importQuantity > product.quantity) {
            alert("Cannot import more than available quantity");
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/update/${myId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ importQuantity }) // Backend will use $inc
            });

            const data = await response.json();
            if (data.error) {
                toast.error(data.error);
                return;
            }

            Swal.fire({
                title: "Product imported successfully!",
                icon: "success",
                draggable: true
            });
            document.getElementById('my_modal_3').close();

            setProduct(prev => ({ ...prev, quantity: prev.quantity - importQuantity }));
            setImportQuantity('');
            setIsSubmitDisabled(true);
        } catch (err) {
            console.error(err);
            toast.error('Failed to import product');
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className='my-20'>
            <div className="flex justify-center">
                <div className="card w-full max-w-[700px] bg-base-100 shadow-sm">
                    <figure>
                        <img className='w-full h-[400px] lg:object-cover' src={product?.imageUrl} alt={product?.name} />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center py-5'>
                            <h2 className="card-title">{product?.name}</h2>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className='py-5'>
                                <p className='font-bold'>Price: {product?.price}$</p>
                                <p>Rating: {product?.rating}</p>
                                <p>Available Quantity: {product?.quantity}</p>
                            </div>

                            <button
                                className="btn bg-[#1a9b38] text-white"
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                                disabled={product.quantity === 0}
                            >
                                Import Now
                            </button>

                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box w-96 flex flex-col items-center gap-4">
                                    <form method="dialog" className="self-end">
                                        <button className="btn btn-sm btn-circle btn-ghost text-red-500">✕</button>
                                    </form>
                                    <h3 className="text-lg text-center">Input your product quantity:</h3>
                                    <input
                                        type="number"
                                        value={importQuantity}
                                        onChange={handleQuantityChange}
                                        className="input w-1/2 mx-auto text-center"
                                        placeholder="Enter quantity"
                                        required
                                    />
                                    <div className="flex justify-center">
                                        <button
                                            className="btn bg-[#1a9b38] text-white"
                                            disabled={isSubmitDisabled}
                                            onClick={handleImportSubmit}
                                        >

                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default ProductDetails;
