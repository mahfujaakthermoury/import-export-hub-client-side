import { useLoaderData } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const ImportProduct = () => {
    const data = useLoaderData();
  const model = data?.data || data || {};
  const { user } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [reasonInput, setReasonInput] = useState("");
  const [contactInput, setContactInput] = useState("");

  if (!model || Object.keys(model).length === 0) {
    return <p className="text-center mt-10 text-lg">No data found</p>;
  }

  const displayTitle = model.title || model.name || "No Title";

  const {
    image,
    thumbnail,
    category,
    seller_name,
    description,
  } = model;


  const imgSrc = thumbnail || image ;

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login first");

    const requestData = {
      foodId: model._id,
      foodName: user.name,
      requesterEmail: user.email,
      requesterPhoto: user.imageUrl,
      status: "pending",
    };

    try {
      const res = await fetch("https://import-export-hub-gules.vercel.app/foodRequests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      const result = await res.json();
      if (result.success) {
        alert("Request submitted successfully!");
        closeModal();
      } else {
        alert(result.message || "Failed to submit request");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setContactInput("");
  };

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        <figure className="h-64 sm:h-80 md:h-96 w-full overflow-hidden">
          <img
            src={imgSrc}
            alt={displayTitle}
            onError={(e) => {
              e.target.onerror = null;
              
            }}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>

        <div className="card-body p-4 sm:p-6 space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{displayTitle}</h1>
          <div className="badge badge-secondary">{category || "No Category"}</div>

          <p className="text-sm sm:text-base">
            <strong>Seller:</strong> {seller_name || "Unknown"}
          </p>
          <p className="text-sm sm:text-base">
            <strong>Location:</strong> {location || "Unknown"}
          </p>
          <p className="text-gray-600 text-sm sm:text-base">{description || "No description available"}</p>
          
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2 sm:mt-3 hover:bg-blue-600 transition-colors"
          >
            Request Food
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-auto"
          onClick={closeModal}
        >
          <form
            onSubmit={handleSubmitRequest}
            className="bg-pink-400 rounded-lg w-full max-w-md p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-white">Request Food</h2>

            <input
              type="text"
              placeholder="Location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              required
              className="border p-2 w-full rounded"
            />

            <textarea
              placeholder="Why Need Food"
              value={reasonInput}
              onChange={(e) => setReasonInput(e.target.value)}
              required
              className="border p-2 w-full rounded"
            />

            <input
              type="text"
              placeholder="Contact No."
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              required
              className="border p-2 w-full rounded"
            />

            <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 border rounded hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    );
};

export default ImportProduct;