import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyExport = () => {

    const [myExport, setMyExport] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/my-export?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyExport(data))
            .catch(err => console.log(err))
    }, [user?.email])

    console.log(myExport);

    const handleDelete = (id) => {
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
                
                axios.delete(`http://localhost:3000/delete/${id}`)
                    .then(res => {
                        console.log(res);
                        const filterData = myExport.filter(product => product._id != id)
                        setMyExport(filterData)
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
        <div className='p-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myExport?.map(product =>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={product?.imageUrl}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product?.name}</div>
                                                <div className="text-sm opacity-50">{product?.originCountry}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <th className='flex gap-3'>
                                        <Link to={`/UpdateMyExport/${product?._id}`} className="btn bg-[#0077d1] btn-xs text-white p-3">Update</Link>

                                        <button onClick={() => handleDelete(product?._id)} className="btn bg-[#e71010] btn-xs text-white p-3">Delete</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyExport;