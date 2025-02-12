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
  const [showAll, setShowAll] = useState(false); // State to toggle visibility of all images
  const photos: Photo[] = [
    { id: 2, title: "", imageUrl: "https://imgur.com/sNt6IL0.jpeg", category: "Ring ceremony", client: "tom" },
    { id: 3, title: "", imageUrl: "https://imgur.com/lvI6Zuv.jpeg", category: "Ring ceremony", client: "tom" },
    { id: 4, title: "", imageUrl: "https://imgur.com/a1fzs4V.jpeg", category: "Ring ceremony", client: "tom" },
    { id: 5, title: "", imageUrl: "https://imgur.com/TyZbuyw.jpeg", category: "Ring ceremony", client: "OM" },
    { id: 6, title: "", imageUrl: "https://imgur.com/fbUoy79.jpeg", category: "Ring ceremony", client: "OM" },
    { id: 7, title: "", imageUrl: "https://imgur.com/JWQDed2.jpeg", category: "Ring ceremony", client: "OM" },
    { id: 8, title: "", imageUrl: "https://imgur.com/jaN9gCj.jpeg", category: "Ring ceremony", client: "bor" },
    { id: 10, title: "1", imageUrl: "https://imgur.com/hyMyukE.jpeg", category: "Prewedding", client: "OLO" },
    { id: 12, title: "3", imageUrl: "https://imgur.com/SR7k7go.jpeg", category: "Prewedding", client: "OLO" },
    { id: 13, title: "4", imageUrl: "https://imgur.com/S4Hhu8x.jpeg", category: "Prewedding", client: "OLO" },
    { id: 14, title: "5", imageUrl: "https://imgur.com/3yqdDR1.jpeg", category: "Prewedding", client: "OLO" },
  ];

  // Group photos by client name
  const groupedPhotos = photos.reduce((acc, photo) => {
    if (!acc[photo.client]) {
      acc[photo.client] = [];
    }
    acc[photo.client].push(photo);
    return acc;
  }, {} as { [key: string]: Photo[] });

  return (
    <>
      <Header />
      <div className="relative">
        {/* Iterate over the grouped photos by client */}
        {Object.keys(groupedPhotos).map((clientName) => (
          <div key={clientName} className="py-4">
            <h2 className="text-2xl font-bold text-center mb-4">{clientName}'s Photos</h2>
            <div className={`flex space-x-4 overflow-x-auto ${showAll ? '' : 'max-w-screen-lg'}`}>
              {groupedPhotos[clientName].map((photo) => (
                <div key={photo.id} className="flex-shrink-0">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="max-w-xs rounded-lg"
                  />
                  <div className="text-center text-sm mt-2">{photo.client}</div> {/* Display client name below image */}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Show All button */}
        {!showAll && photos.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="absolute right-0 bottom-0 mb-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Show All
          </button>
        )}
      </div>
    </>
  );
};

export default Portfolio;
