import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-white relative bg-cover bg-center" 
      style={{
        backgroundImage: 'url(images/image.png)'
      }}
    >
      <div className="bg-black/40 absolute inset-0"></div>
      
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-extrabold mt-10">GoUMKM Eco</h1>
        <p className="text-lg max-w-2xl mb-6">
          Platform digital yang membantu UMKM berkembang sambil menjaga lingkungan tetap hijau.
        </p>
        <a 
          href="#fitur" 
          className="px-6 py-3 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          Jelajahi Fitur
        </a>
      </div>
    </section>
  );
};

export default Hero;