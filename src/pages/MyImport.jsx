import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyImport = () => {
  const { user } = useContext(AuthContext);
  const [myImports, setMyImports] = useState([]);

  useEffect(() => {
    fetch(
      `https://import-export-hub-gules.vercel.app/my-import?email=${user?.email}`
    )
      .then(res => res.json())
      .then(data => setMyImports(data));
  }, [user?.email]);

    const handleRemove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                
                axios.delete(`https://import-export-hub-gules.vercel.app/imports-delete/${id}`)
                    .then(res => {
                        console.log(res);
                        const filterData = myImports.filter(order => order._id != id)
                        setMyImports(filterData)
                    })
                    .catch(err => console.log(err));

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">My Imports</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {myImports.map(item => (
          <div key={item?._id} className="card bg-base-100 shadow">
            <figure>
              <img src={item?.imageUrl} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>Price: ${item?.price}</p>
              <p>Rating: {item?.rating}</p>
              <p>Country: {item?.originCountry}</p>
              <p>Imported Qty: {item?.quantity}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleRemove(item?._id)}
                  className="btn btn-error btn-sm"
                >
                  Remove
                </button>

                <Link
                  to={`/ProductDetails/${item?._id}`}
                  className="btn btn-outline btn-sm"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyImport;
