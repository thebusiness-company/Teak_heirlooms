import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchLatestVideo = async () => {
  const { data } = await axios.get("http://localhost:8000/api/latest-video/");
  return data;
};

const LatestVideo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["latestVideo"],
    queryFn: fetchLatestVideo,
  });

  if (isLoading) return null; // Don't show anything while loading
  if (error || !data?.youtube_url) return null; // Hide everything if no video

  const videoId = new URL(data.youtube_url).searchParams.get("v");
  if (!videoId) return null; // Ensure valid video ID

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex justify-center items-center my-10">
      <iframe
        width="100%"
        height="500"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default LatestVideo;
