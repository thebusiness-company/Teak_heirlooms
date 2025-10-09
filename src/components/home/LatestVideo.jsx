import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../api";

const fetchLatestVideo = async () => {
  const { data } = await axios.get(`${API_URL}/api/latest-video/`);
  return data;
};

const LatestVideo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["latestVideo"],
    queryFn: fetchLatestVideo,
  });
  console.log(data,"dataaa")

  if (isLoading) return null; // Don't show anything while loading
  if (error || !data?.youtube_url) return null; // Hide everything if no video

  const videoId = new URL(data.youtube_url).searchParams.get("v");
  if (!videoId) return null; // Ensure valid video ID

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="flex justify-center items-center mt-8 mb-4 md:my-10">
      <div className="w-full max-w-[96%] h-full">
        <iframe
          className="w-full h-[300px] md:h-[700px]"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LatestVideo;
