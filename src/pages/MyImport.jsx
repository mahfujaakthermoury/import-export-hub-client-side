import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import { motion } from "motion/react"
import axios from "axios";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import { FaStar } from "react-icons/fa";


const MyImport = () => {

  useTitle('My Import');

  //const { user } = useContext(AuthContext);
  const [myImports, setMyImports] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://import-export-hub-gules.vercel.app/my-import?email=${user?.email}`
  //   )
  //     .then(res => res.json())
  //     .then(data => setMyImports(data))
  //     .catch(err => console.log(err))
  // }, [user?.email]);

  useEffect(() => {
    fetch('https://import-export-hub-gules.vercel.app/orders')
      .then(res => res.json())
      .then(data => setMyImports(data))
      .catch(err => console.log(err))
  }, [])

  console.log(myImports);

  // const handleRemove = (id) => {
  //     Swal.fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!"
  //     }).then((result) => {

  //         if (result.isConfirmed) {

  //             axios.delete(`https://import-export-hub-gules.vercel.app/imports-delete/${id}`)
  //                 .then(res => {
  //                     console.log(res);
  //                     const filterData = myImports.filter(order => order._id != id)
  //                     setMyImports(filterData)
  //                 })
  //                 .catch(err => console.log(err));

  //             Swal.fire({
  //                 title: "Deleted!",
  //                 text: "Your file has been deleted.",
  //                 icon: "success"
  //             });
  //         }
  //     });
  // }

  return (
    <div className="order p-10">
      <div className="mb-15 text-center">
        <h2 className="text-3xl font-bold ">
          My Import Products
        </h2>
      </div>
      <div className=" card shadow w-4/5 mx-auto spa ">
        {myImports?.map(order => (
          <div className="w-full card-body grid grid-cols-[150px_250px_200px_200px] md:grid-row gap-15 items-center">
            <img className='w-[150px] h-[150px] object-cover transition-transform duration-300 hover:scale-105'
              src={order?.image}
              alt="image" />

            <div className="space-y-2">
              <h3 className="text-[17px]">{order?.name}</h3>
              <h3 className="font-semibold text-[19px] text-[#074799]">${order?.price}</h3>
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${index < order.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({order.rating})</span>
              </div>
            </div>
            <div>
              <p>Imported Quantity: {order?.quantity}</p>
              <p>Origin Country: {order?.country}</p>

            </div>

            <div className="">             
              <Link to={`/ProductDetails/${order?.orderId}`}> <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className="btn text-[#074799] hover:bg-[#4DA8DA] bg-[#dadada] ">
                See Details</motion.button>
              </Link>

              <motion.button // onClick={() => handleRemove(item?._id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }} className="btn text-[#f0421a] bg-[#dadada] hover:bg-[#d62121] hover:text-[#dadada] ml-4">
                Remove </motion.button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyImport;
