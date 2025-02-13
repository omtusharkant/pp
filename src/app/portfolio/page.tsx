"use client"; // Add this directive

import React, { useState } from "react";
import Header from '@/app/header';

interface Photo {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  client: string;
}

const Portfolio: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Prewedding");

  const photos: Photo[] = [
    { id: 2, title: "", imageUrl: "https://imgur.com/sNt6IL0.jpeg", category: "Ring ceremony", client: "Babu X Butteryfly" },
    { id: 3, title: "", imageUrl: "https://imgur.com/lvI6Zuv.jpeg", category: "Ring ceremony", client: "Babu X Butteryfly" },
    { id: 4, title: "", imageUrl: "https://imgur.com/a1fzs4V.jpeg", category: "Ring ceremony", client: "Babu X Butteryfly" },
    { id: 5, title: "", imageUrl: "https://imgur.com/TyZbuyw.jpeg", category: "Ring ceremony", client: "Babu X Butteryfly" },
    { id: 6, title: "", imageUrl: "https://imgur.com/fbUoy79.jpeg", category: "Ring ceremony", client: "Babu X Butteryfly" },
    { id: 7, title: "", imageUrl: "https://imgur.com/JWQDed2.jpeg", category: "Ring ceremony", client: "Babu X Butteryfly" },
    { id: 8, title: "", imageUrl: "https://imgur.com/jaN9gCj.jpeg", category: "Ring ceremony", client: "Babu X Butteryfly" },
    { id: 10, title: "", imageUrl: "https://imgur.com/hyMyukE.jpeg", category: "Prewedding", client: "Khirod X Laxmipriya" },
    { id: 12, title: "", imageUrl: "https://imgur.com/SR7k7go.jpeg", category: "Prewedding", client: "Khirod X Laxmipriya" },
    { id: 13, title: "", imageUrl: "https://imgur.com/S4Hhu8x.jpeg", category: "Prewedding", client: "Khirod X Laxmipriya" },
    { id: 14, title: "", imageUrl: "https://imgur.com/3yqdDR1.jpeg", category: "Prewedding", client: "Khirod X Laxmipriya" },

    { id: 15, title: "", imageUrl: "https://imgur.com/tl4EVvG.jpeg", category: "Wedding", client: "Nihar X Kiran" },
    { id: 16, title: "", imageUrl: "https://imgur.com/tVrwJOS.jpeg", category: "Wedding", client: "Nihar X Kiran" },
    { id: 17, title: "", imageUrl: "https://imgur.com/IwFvkra.jpeg", category: "Wedding", client: "Nihar X Kiran" },
    { id: 18, title: "", imageUrl: "https://imgur.com/V7qrE5T.jpeg", category: "Wedding", client: "Nihar X Kiran" },
    { id: 19, title: "", imageUrl: "https://imgur.com/kxnsqik.jpeg", category: "Wedding", client: "Nihar X Kiran" },
    { id: 20, title: "", imageUrl: "https://imgur.com/x4DI2Dg.jpeg", category: "Wedding", client: "Nihar X Kiran" },
    { id: 21, title: "", imageUrl: "https://imgur.com/KFKvRsF.jpeg", category: "Wedding", client: "Nihar X Kiran" },
    { id: 22, title: "", imageUrl: "https://imgur.com/1FVFfjV.jpeg", category: "Wedding", client: "Nihar X Kiran" },

    { id: 23, title: "", imageUrl: "https://imgur.com/30HLacY.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 24, title: "", imageUrl: "https://imgur.com/u5POqWJ.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 25, title: "", imageUrl: "https://imgur.com/aLzDqFm.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 26, title: "", imageUrl: "https://imgur.com/og3LYlU.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 27, title: "", imageUrl: "https://imgur.com/Rj40y3X.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 28, title: "", imageUrl: "https://imgur.com/1AMU2s1.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 29, title: "", imageUrl: "https://imgur.com/s11U6S8.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 30, title: "", imageUrl: "https://imgur.com/6ibXrPi.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 31, title: "", imageUrl: "https://imgur.com/W8owOAq.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 32, title: "", imageUrl: "https://imgur.com/5DCsBwk.jpeg", category: "Prewedding", client: "Suman X Sweta" },
    { id: 33, title: "", imageUrl: "https://imgur.com/CU83yFz.jpeg", category: "Prewedding", client: "Suman X Sweta" },

    
 
  ];
  
  const categories = ["Prewedding", "Ring ceremony", "Wedding", "Haldi", "Mehendi", "Birthday"];

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // Group photos by category first, then by client
  const groupedPhotosByCategory = categories.reduce((acc, category) => {
    acc[category] = photos.filter(photo => photo.category === category).reduce((clientAcc, photo) => {
      if (!clientAcc[photo.client]) {
        clientAcc[photo.client] = [];
      }
      clientAcc[photo.client].push(photo);
      return clientAcc;
    }, {} as { [key: string]: Photo[] });
    return acc;
  }, {} as { [key: string]: { [key: string]: Photo[] } });

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 pb-4">| Our Photos |</h1>
        <div className="flex justify-center mb-8 pb-4 pt-4 border-t-4 border-b-4 border-[#FFFFFF]">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 border-b-2 transition-transform duration-300 ease-in-out transform hover:scale-105 ${activeCategory === category
                  ? "bg-black-500 text-white rounded-lg border-t-2 border-l-2 border-r-2 border-[#FFFFFF]"
                  : "bg-black-200 text-gray-700 rounded-sm border-gray-400"
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap p-6 gap-6 justify-center max-w-screen mx-8 mr-8 bg-black-100 overflow-x-auto custom-scrollbar">
          {Object.keys(groupedPhotosByCategory).map((categoryName) => (
            activeCategory === categoryName && (
              <div key={categoryName} className="py-4 w-full">
                {Object.keys(groupedPhotosByCategory[categoryName]).map((clientName) => (
                  <div key={clientName} className="py-4">
                    <h3 className="text-2xl font-semibold text-center mb-4 relative">
                      <div className="absolute bottom-0 left-0 right-0 mx-auto border-t-2 border-gray-300"></div>
                      {clientName}
                    </h3>
                    <div className="relative flex flex-1 space-x-5 overflow-x-auto max-h-96 custom-scrollbar">
                      {groupedPhotosByCategory[categoryName][clientName].map((photo) => (
                        <div key={photo.id} className="flex-shrink-0">
                          <img
                            src={`${photo.imageUrl}?w=500&h=300&fit=crop`}
                            alt={photo.title}
                            className="w-full h-48 rounded-lg object-cover"
                            loading="lazy"
                            onClick={() => handlePhotoClick(photo)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>

        {selectedPhoto && (
          <div className="fixed inset-0 bg-red bg-opacity-50 flex items-center w-full justify-center z-50" onClick={closeModal}>
            <div className="bg-white text-black p-6 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            
<button onClick={closeModal}
  className="relative border-2 border-black group hover:border-green-500 w-5 h-5 duration-500 overflow-hidden"
  type="button"
>
  <p
    className="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0"
  >
    ×
  </p>
  <span
    className="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-9 duration-500 top-12 left-0"
  ></span>
  <span
    className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-9 duration-500 left-12"
  ></span>
  <span
    className="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-9 duration-500 right-12"
  ></span>
  <span
    className="absolute w-full h-full bg-green-500 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"
  ></span>
</button>

              
              <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} className="max-w-md rounded-lg" />
              <h2 className="mt-4 text-xl text-center">{selectedPhoto.title}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;