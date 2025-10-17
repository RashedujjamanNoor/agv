import React, { useState } from "react";
const DemoTab = () => {
  const [activeTab, setActiveTab] = useState("youtube");

  const tabs = [
    { id: "youtube", label: "YouTube Videos" },
    { id: "shorts", label: "Shorts" },
    // { id: "real-estate", label: "Real Estate" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10" id="work">
      <div className="text-white text-center mb-4">
        <h3 className="pt-8">OUR WORK</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          FEATURED PROJECTS
        </h2>
      </div>
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-2 text-lg font-medium transition-all ${
              activeTab === tab.id
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="min-h-[300px]">
        {activeTab === "youtube" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden ">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LKAsxaC8ZzI?si=8UdT5Kjtn1HypIsn"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NeIHUFmwjlU?si=Ahk-5i2XdI-xOCoX"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mSTqwzSOFfU?si=X48OFF3yExVb97To"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/OZJI-9tNmlE?si=9iTixTcl0rgqsKpK"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Real Estate Demos */}

        {/* {activeTab === "real-estate" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PVr_YwuGRws?si=MSsGZUSWZeuqqNqj"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PVr_YwuGRws?si=MSsGZUSWZeuqqNqj"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PVr_YwuGRws?si=MSsGZUSWZeuqqNqj"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 aspect-video rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PVr_YwuGRws?si=MSsGZUSWZeuqqNqj"
                frameBorder="0"
                title="VidlyPro Demo 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )} */}

        {activeTab === "shorts" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="bg-gray-800 aspect-[9/16] rounded-xl overflow-hidden">
              <video
                controls
                controlsList="nodownload"
                src="./shorts1.mp4"
              ></video>
            </div>
            <div className="bg-gray-800 aspect-[9/16] rounded-xl overflow-hidden">
              <video
                controls
                controlsList="nodownload"
                src="./shorts2.mp4"
              ></video>
            </div>
            <div className="bg-gray-800 aspect-[9/16] rounded-xl overflow-hidden">
              <video
                controls
                controlsList="nodownload"
                src="./shorts3.mp4"
              ></video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoTab;
