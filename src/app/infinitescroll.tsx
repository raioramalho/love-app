'use client';
import { useEffect, useState, useCallback } from 'react';

const images = [
  'https://scontent.cdninstagram.com/v/t39.30808-6/442442348_18439749559031097_3490998983811436643_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDM1eDEyOTQuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=0ndQN5fGSmgQ7kNvgE5_fPx&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM3Mjk1OTQzMzA0MDg0MjA3MA%3D%3D.2-ccb7-5&oh=00_AYC7BZv_IkCXicbWdY9BKHFod_ZxBsiXHEkOuMx7XveBXQ&oe=66509C0D&_nc_sid=10d13b',
  'https://scontent.cdninstagram.com/v/t39.30808-6/414917532_18278477062088772_6001571255439098975_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=2w-PGddwr4QQ7kNvgHBc6fD&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI3MDc5OTk3MTY2ODM1Mzk3NQ%3D%3D.2-ccb7-5&oh=00_AYBb6BQs7EaB05GjZX0Z0n0i78rGc6IkaYYOVx6fLhsUUA&oe=6652AE69&_nc_sid=10d13b',
  'https://scontent.cdninstagram.com/v/t39.30808-6/363015720_18380021965031097_3593224359467501136_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=uBBkFsBqBocQ7kNvgE0CL_N&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1NDAxNDY5MTg3NjcyMDE2NA%3D%3D.2-ccb7-5&oh=00_AYDnP4sFUnTtisfFdW5tYJjnxZEXtO_Uv__AAJuXTTKOgQ&oe=6652AA8C&_nc_sid=10d13b',
  'https://scontent.cdninstagram.com/v/t39.30808-6/438230225_18295282132088772_1535277748939182391_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDM1eDEyOTQuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=Yluk6uxym0QQ7kNvgH5gY3D&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM1NzA3MjAxMTE1MjUwODI2OQ%3D%3D.2-ccb7-5&oh=00_AYDZVzaH4i9HMSKIiA66Qt2kNlTMQ_8lmqPROe0F05luwQ&oe=66509CED&_nc_sid=10d13b',
  'https://scontent.cdninstagram.com/v/t39.30808-6/436308822_18296802313088772_3271462453058139331_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=PM7X4MPODaAQ7kNvgEkIWw0&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM2NTk5NDg2NzAzOTk3NTc3Nw%3D%3D.2-ccb7-5&oh=00_AYBcQMtqsqWB1wEkmReMrbnTOdvrLH2NWoe-2g99Uc_VJA&oe=6652821B&_nc_sid=10d13b',
  'https://scontent.cdninstagram.com/v/t51.29350-15/352575141_243308358315690_1608065860123496818_n.webp?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=ln0zbf2--Y4Q7kNvgH-pPFI&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEyMzA4ODE5MDc1NDcyOTcyMg%3D%3D.2-ccb7-5&oh=00_AYABp7YmH2hhryNKKiJrEWtihM6EXLmCkIF2ubaLg_ydPg&oe=66529105&_nc_sid=10d13b'  
];

const fetchMoreImages = (currentImages: string[]): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...currentImages, ...images]);
    }, 1500);
  });
};

const InfiniteScroll: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>(images);
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
    setLoading(true);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!loading) return;
    fetchMoreImages(photos).then((newPhotos) => {
      setPhotos(newPhotos);
      setLoading(false);
    });
  }, [loading, photos]);

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((src, index) => (
          <div key={index} className="w-full h-60 bg-gray-200">
            <img src={src} alt={`Love ${index}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </div>
      {loading && (
        <div className="text-center py-4">
          <p className="text-lg text-gray-600">Carregando mais imagens...</p>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
