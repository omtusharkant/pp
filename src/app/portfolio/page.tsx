"use client"; // Add this directive

import React, { useState } from "react";
import Header from '@/app/header';

interface Photo {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Prewedding");

  // Example photos
  const photos: Photo[] = [
    { id: 1, title: "Photo 1", imageUrl: "/car.jpg", category: "Prewedding" },
    { id: 2, title: "Photo 2", imageUrl: "/Harry stickers.jpg", category: "Ring ceremony" },
    { id: 3, title: "Photo 3", imageUrl: "/home.jpg", category: "wedding" },
    { id: 4, title: "Photo 4", imageUrl: "/ㅐ.jpg", category: "Birthday" },
    { id: 5, title: "Photo 5", imageUrl: "/car.jpg", category: "Prewedding" },
    { id: 6, title: "Photo 6", imageUrl: "/Harry stickers.jpg", category: "Ring ceremony" },
    { id: 7, title: "Photo 7", imageUrl: "/home.jpg", category: "Prewedding" },
    { id: 8, title: "Photo 8", imageUrl: "/ㅐ.jpg", category: "Prewedding" },
    { id: 9, title: "Photo 9", imageUrl: "/car.jpg", category: "Prewedding" },
    { id: 10, title: "Photo 10", imageUrl: "/Harry stickers.jpg", category: "Prewedding" },
    { id: 11, title: "Photo 11", imageUrl: "/home.jpg", category: "wedding" },
    { id: 12, title: "Photo 12", imageUrl: "/ㅐ.jpg", category: "Birthday" },
    { id: 13, title: "Photo 13", imageUrl: "https://i.imgur.com/AJeAsuP.jpeg", category: "Prewedding" },
    { id: 14, title: "Photo 14", imageUrl: "https://i.imgur.com/Z5m2G6T.jpeg", category: "Prewedding" },
    { id: 15, title: "Photo 15", imageUrl: "https://i.imgur.com/6ykrNUm.jpeg", category: "Prewedding" },
    { id: 16, title: "Photo 16", imageUrl: "https://i.imgur.com/tlc0ROj.jpeg", category: "Birthday" },
    { id: 17, title: "Photo 17", imageUrl: "https://i.imgur.com/SM3TnY0.jpeg", category: "Prewedding" },
    { id: 18, title: "Photo 18", imageUrl: "https://i.imgur.com/FSqmGGd.jpeg", category: "Birthday" },
    { id: 19, title: "Photo 19", imageUrl: "https://i.imgur.com/H2M4I7I.jpeg", category: "Prewedding" },
    { id: 20, title: "Photo 20", imageUrl: "https://i.imgur.com/DvGvUma.jpeg", category: "Prewedding" },
    { id: 21, title: "Photo 21", imageUrl: "https://i.imgur.com/kjfBCLe.jpeg", category: "Prewedding" },
    { id: 23, title: "Photo 23", imageUrl: "https://i.imgur.com/Oj6EYyl.jpeg", category: "Prewedding" },
    { id: 24, title: "Photo 24", imageUrl: "https://i.imgur.com/J3i0dDt.jpeg", category: "Prewedding" },
    { id: 25, title: "Photo 25", imageUrl: "https://i.imgur.com/75qAj6e.jpeg", category: "Birthday" },
    { id: 26, title: "Photo 26", imageUrl: "https://i.imgur.com/ILUsFso.jpeg", category: "Prewedding" },
    { id: 27, title: "Photo 27", imageUrl: "https://i.imgur.com/uZlFbi9.jpeg", category: "Prewedding" },
  ];

  const categories = ["Prewedding", "Ring ceremony", "wedding" ,"Haldi","Mehendi", "Birthday"];

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const filteredPhotos = photos.filter(photo => photo.category === activeCategory);

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 pb-4 ">|  My Photos  |</h1>
        <div className="flex justify-center mb-8 pb-4 pt-4 border-t-4 border-b-4 border-[#FFFFFF]">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 border-b-2 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-black-500 text-white rounded-lg border-t-2 border-l-2 border-r-2 border-[#FFFFFF]"
                  : "bg-black-200 text-gray-700 rounded-sm border-gray-400"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap p-4 gap-4 justify-center ">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative group bg-white rounded-lg mt-4 overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
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
    </>
  );
};

export default Portfolio;