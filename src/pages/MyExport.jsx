import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

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
                                <button className="btn bg-[#04a52f] btn-xs text-white p-3">Edit</button>

                                <button className="btn bg-[#e71010] btn-xs text-white p-3">Delete</button>
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