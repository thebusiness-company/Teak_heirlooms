import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchHomeBanner, uploadHomeBanner, deleteHomeBanner } from "../services/homeBannerService";
import { useState } from "react";
import  {BASEURL}  from "../api";

const HomeBanner = () => {
    const queryClient = useQueryClient();
    const [file, setFile] = useState(null);

    // Fetch latest banner
    const { data, isLoading, isError } = useQuery({
        queryKey: ["homeBanner"],
        queryFn: fetchHomeBanner,
    });

    // Upload mutation
    const uploadMutation = useMutation({
        mutationFn: uploadHomeBanner,
        onSuccess: () => {
            queryClient.invalidateQueries(["homeBanner"]);
        },
    });

    // Delete mutation
    const deleteMutation = useMutation({
        mutationFn: deleteHomeBanner,
        onSuccess: () => {
            queryClient.invalidateQueries(["homeBanner"]);
        },
    });
    console.log(data);
    console.log(BASEURL);

    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        uploadMutation.mutate(formData);
        setFile(null);
    };

    return (
        <div>
            <h2>Home Banner</h2>

            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching banner.</p>}

            {data && data.image && (
                <div>
                    <img src={`${BASEURL}${data.image}`} alt="Home Banner" style={{ width: "300px" }} />
                    <button onClick={() => deleteMutation.mutate()}>Delete Banner</button>
                </div>
            )}

            <form onSubmit={handleUpload}>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Upload Banner</button>
            </form>
        </div>
    );
};

export default HomeBanner;
