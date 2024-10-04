import { useEffect, useState } from 'react';
import data from './data.json'; 
import { IoLogoInstagram } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";

const LastSection = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setVideos(data.videos);
      setLoading(false);
    } catch (error) {
      console.error('Error setting videos:', error);
      setError(error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading videos...</p>;
  }

  if (error) {
    return <p>Failed to load...</p>;
  }

  const handleVideoClick = (video) => {
    setSelectedVideo(video); 
  };

  const closeModal = () => {
    setSelectedVideo(null); 
  };

  return (
    <section className="mt-8">
      <div>
        <h1 className="text-2xl font-roboto text-[#00723f] mb-4 mt-4 pt-4 pb-4 ml-4">
          A <span className="font-bold">FEAST</span> FOR YOUR EYES
        </h1>
        <div className="flex items-center space-x-1 p-1 ml-4 mb-4">
          <IoLogoInstagram className="text-lg text-[#00723f]" />
          <p className="text-sm">Follow us @foodloversmarket</p>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-1 ">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="relative border  cursor-pointer" onClick={() => handleVideoClick(video)}>
              <video
                className="w-full h-auto"
                src={video.location}
                type="video/mp4"
                controls={false}
              />
              
              <CiPlay1 className="absolute inset-0 m-auto text-2xl text-white opacity-70" />
            </div>
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-700 font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <video
              controls
              className="w-full h-auto rounded-md"
              src={selectedVideo.location}
              type="video/mp4"
              autoPlay
            />
            <p className="mt-4">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LastSection;
