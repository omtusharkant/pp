"use client"; // Add this directive

import React, { useState } from "react";
import Header from '@/app/header';
import Image from "next/image";

// Add loading animation component
const LoadingShimmer = () => (
  <div className="animate-pulse">
    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-xl">
      <div className="w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>
    </div>
  </div>
);

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
    <div className="min-h-screen bg-black-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-100">Portfolio</h1>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 text-sm font-medium rounded-full transition-all duration-300
                ${activeCategory === category
                  ? "bg-white text-black shadow-lg transform scale-105"
                  : "bg-black text-gray-600 hover:bg-gray-100 border border-gray-200"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="space-y-16">
          {Object.keys(groupedPhotosByCategory).map((categoryName) => (
            activeCategory === categoryName && (
              <div key={categoryName}>
                {Object.keys(groupedPhotosByCategory[categoryName]).map((clientName) => (
                  <div key={clientName} className="mb-16">
                    <div className="flex items-center mb-8">
                      <h2 className="text-3xl font-semibold text-gray-800">{clientName}</h2>
                      <div className="flex-grow ml-4 h-px bg-gray-200"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupedPhotosByCategory[categoryName][clientName].map((photo, index) => (
                        <div
                          key={photo.id}
                          className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
                          onClick={() => handlePhotoClick(photo)}
                        >
                          <div className="absolute inset-0 z-0">
                            <LoadingShimmer />
                          </div>
                          <Image
                            src={photo.imageUrl}
                            alt={photo.title || "Portfolio image"}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-110 z-10 relative"
                            priority={index < 6}
                            quality={75}
                            loading={index < 6 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 z-20"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-5xl w-full bg-transparent my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="fixed top-4 right-4 z-50 bg-black bg-opacity-50 rounded-full p-2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex justify-center items-center min-h-[200px] relative w-full h-[85vh]">
                <div className="absolute inset-0 z-0">
                  <LoadingShimmer />
                </div>
                <Image
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title || "Portfolio image"}
                  fill
                  sizes="100vw"
                  className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl object-contain z-10 relative"
                  priority={true}
                  quality={90}
                />
              </div>
              {selectedPhoto.title && (
                <div className="mt-4 text-center">
                  <h2 className="text-xl text-white">{selectedPhoto.title}</h2>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;