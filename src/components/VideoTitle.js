const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[8%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="inline md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className=" md:inline-block mx-2  bg-gray-500 text-white py-1 md:py-4 px-3 md:px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
