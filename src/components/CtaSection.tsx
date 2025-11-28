import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 text-center bg-white-700 text-white">
      <h2 className="text-4xl font-bold mb-4 text-black">Bersama Majukan UMKM & Lingkungan</h2>
      <p className="mb-6 text-lg text-black">
        Mari ikut menjadi bagian dari perubahan positif untuk masyarakat Indonesia.
      </p>
      <a 
        href="#" 
        className="px-8 py-3 bg-white text-green-900 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition"
      >
        Mulai Sekarang
      </a>
    </section>
  );
};

export default CtaSection;