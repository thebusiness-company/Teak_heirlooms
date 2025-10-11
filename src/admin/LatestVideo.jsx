import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import api, { API_URL } from '../api';

const fetchLatestVideo = async () => {
    const { data } = await axios.get(`${API_URL}}/api/latest-video/`);
    return data;
};

const VideoBannerAdmin = () => {
    const queryClient = useQueryClient();
    const [youtubeUrl, setYoutubeUrl] = useState('');

    const { data, isLoading, error } = useQuery({
        queryKey: ['latestVideo'],
        queryFn: fetchLatestVideo,
    });

    const uploadMutation = useMutation({
        mutationFn: async (newVideo) => {
            await axios.post(`${API_URL}}/api/latest-video/`, newVideo);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['latestVideo']);
            setYoutubeUrl('');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async () => {
            await axios.delete(`${API_URL}}/api/latest-video/`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['latestVideo']);
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading video</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (youtubeUrl.trim()) {
            uploadMutation.mutate({ youtube_url: youtubeUrl });
        }
    };

    const handleDelete = () => {
        deleteMutation.mutate();
    };

    const videoId = data?.youtube_url ? new URL(data.youtube_url).searchParams.get('v') : null;

    return (
        <div className="video-banner-admin">
            <h2>Admin Panel: Upload YouTube Video</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter YouTube URL"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    required
                />
                <button type="submit">Upload</button>
            </form>

            {videoId ? (
                <>
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', marginTop: '10px' }}>
                        Delete Video
                    </button>
                </>
            ) : (
                <p>No video available</p>
            )}
        </div>
    );
};

export default VideoBannerAdmin;
