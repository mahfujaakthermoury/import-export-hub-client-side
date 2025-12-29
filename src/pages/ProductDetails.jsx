import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import useTitle from '../hooks/useTitle';


const ProductDetails = () => {

  useTitle('Product Details');
  
  const { myId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [importQuantity, setImportQuantity] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    fetch(`https://import-export-hub-gules.vercel.app/products/${myId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [myId]);

  const handleQuantityChange = (e) => {
          e.preventDefault();

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



  const handleOrders = (e) => {
      e.preventDefault();

      const quantity = e.target.quantity.value
      const formData = { 
        orderId: myId, 
        quantity };

      console.log(formData);

      axios.post('https://import-export-hub-gules.vercel.app/orders', formData)
          .then(res => {
              console.log(res);
          })
          .catch(err => {
              console.error(err);
          });
  };


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='my-20'>
      <div className="flex justify-center transition-all duration-300 hover:-translate-y-2">
        <div className=" card w-full max-w-[700px] bg-base-100 shadow-sm">
          <figure>
            <img className='w-full h-[400px] lg:object-cover transition-transform duration-300 hover:scale-90' src={product?.imageUrl} alt={product?.name} />
          </figure>
          <div className="card-body">
            <div className='flex justify-between items-center py-5'>
              <h2 className="card-title text-[#074799]">{product?.name}</h2>
            </div>
            <div className="flex justify-between items-center">
              <div className='py-5'>
                <p className='font-bold'>Price: {product?.price}$</p>
                <p>Rating: {product?.rating}</p>
                <p>Available Quantity: {product?.quantity}</p>
              </div>

              <button
                className="btn text-[#074799] hover:bg-[#4DA8DA] bg-[#dadada] border-[#074799]"
                onClick={() => document.getElementById('my_modal_3').showModal()}
                disabled={product.quantity === 0}
              >
                Import Now
              </button>

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-96 flex flex-col items-center gap-4">

                  <form method="dialog" className="self-end" >
                    <button className="btn btn-sm btn-circle btn-ghost text-red-500">✕</button>
                  </form>

                 <form action="" onSubmit={handleOrders}>
                   <h3 className="text-lg text-center">Input your product quantity:</h3>
                  <input
                    type="number"
                    name='quantity'
                    value={importQuantity}
                    onChange={handleQuantityChange}
                    className="input mx-auto  my-5 "
                    placeholder="Enter quantity"
                    required
                  />
                  <div className="flex justify-center">
                    <button
                      type='submit'
                      className="btn text-[#074799] hover:bg-[#4DA8DA] bg-[#ffffff] border-[#074799]"
                      disabled={isSubmitDisabled}
                 
                    >
                      Submit
                    </button>
                  </div>
                 </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
