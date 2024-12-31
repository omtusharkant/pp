// ./src/app/portfolio.tsx

"use client"; // Add this directive

import React, { useState } from "react";

interface Photo {
  id: number;
  title: string;
  imageUrl: string;
}

const Portfolio: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Example photos
  const photos: Photo[] = [
    { id: 1, title: "Photo 1", imageUrl: "/car.jpg" },
    { id: 2, title: "Photo 2", imageUrl: "/Harry stickers.jpg" },
    { id: 3, title: "Photo 3", imageUrl: "/home.jpg" },
    { id: 4, title: "Photo 4", imageUrl: "/ㅐ.jpg" },
    { id: 5, title: "Photo 1", imageUrl: "/car.jpg" },
    { id: 6, title: "Photo 2", imageUrl: "/Harry stickers.jpg" },
    { id: 7, title: "Photo 3", imageUrl: "/home.jpg" },
    { id: 8, title: "Photo 4", imageUrl: "/ㅐ.jpg" },
    { id: 9, title: "Photo 1", imageUrl: "/car.jpg" },
    { id: 10, title: "Photo 2", imageUrl: "/Harry stickers.jpg" },
    { id: 11, title: "Photo 3", imageUrl: "/home.jpg" },
    { id: 12, title: "Photo 4", imageUrl: "/ㅐ.jpg" },
  ];

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative group bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-xl font-semibold text-white">{photo.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 flex my-5 items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-full max-h-full mx-4 p-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-red-600">{selectedPhoto.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;