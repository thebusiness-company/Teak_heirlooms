import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

const fetchWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Unauthorized"); // Redirect user to login if no token
    }

    const response = await axios.get("http://127.0.0.1:8000/api/wishlist/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const removeFromWishlist = async (wishlistItemId) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Unauthorized");
    }

    await axios.delete(`http://127.0.0.1:8000/api/wishlist/${wishlistItemId}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const Wishlist = () => {
    const queryClient = useQueryClient();

    // Fetch wishlist data
    const { data: wishlist, isLoading, error } = useQuery({
        queryKey: ["wishlist"],
        queryFn: fetchWishlist,
    });

    // Mutation to remove item from wishlist
    const removeMutation = useMutation({
        mutationFn: removeFromWishlist,
        onSuccess: () => {
            queryClient.invalidateQueries(["wishlist"]); // Refresh wishlist
        },
    });

    if (isLoading) return <p className="text-center text-lg">Loading wishlist...</p>;
    if (error) return <p className="text-center text-lg text-red-500">Error loading wishlist.</p>;

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

            {wishlist.length === 0 ? (
                <p className="text-gray-600">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {wishlist.map((item) => (
                        <div key={item.id} className="border p-4 rounded-lg shadow-md">
                            <Link to={`/products/${item.product.slug}`}>
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <h2 className="text-lg font-semibold mt-2">{item.product.name}</h2>
                            </Link>
                            <p className="text-gray-500 mt-1">₹ {item.product.price}</p>
                            
                            <button
                                onClick={() => removeMutation.mutate(item.id)}
                                className="mt-4 flex items-center text-red-600"
                            >
                                <TrashIcon className="w-5 h-5 mr-2" />
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
