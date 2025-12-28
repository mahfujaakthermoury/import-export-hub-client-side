import { AuthContext } from '../provider/AuthProvider';
import { useEffect, useState, useContext } from "react";


const MyImport = () => {
    const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `https://server-client-delta.vercel.app/my-food-requests?email=${user.email}`,
          {
            headers: { authorization: `Bearer ${user.accessToken}` },
          }
        );
        const data = await res.json();
        if (data.success) {
          setRequests(data.data || []);
        } else {
          setError(data.message || "Failed to load requests");
        }
      } catch (err) {
        console.error(err);
        setError("Server error. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-bars loading-xl"></div>
        <p className="ml-4 text-lg font-semibold">Loading your requests...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-red-500 font-semibold">{error}</div>
    );

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">My Food Requests</h1>

      {requests.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <p className="text-lg font-semibold mb-1 text-pink-600">
                Food: {req.foodName}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Location:</strong> {req.location}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Contact:</strong> {req.contact}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Reason:</strong> {req.reason}
              </p>
              <p className="text-gray-500 mb-1 text-sm">
                <strong>Requested On:</strong>{" "}
                {new Date(req.createdAt).toLocaleDateString()}
              </p>
              <p className="font-semibold">
                Status:{" "}
                <span
                  className={`${
                    req.status === "pending"
                      ? "text-yellow-500"
                      : req.status === "approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {req.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 font-medium">
          No requests found.
        </p>
      )}
    </div>
  );
};

export default MyImport;