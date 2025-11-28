import React from 'react';

interface ImpactItem {
  value: string;
  description: string;
}

const ImpactSection: React.FC = () => {
  const impacts: ImpactItem[] = [
    {
      value: "40%+",
      description: "Peningkatan potensi penjualan UMKM melalui digitalisasi."
    },
    {
      value: "Edukasi Masyarakat",
      description: "Mendorong gaya hidup lebih sehat dan ramah lingkungan."
    },
    {
      value: "Produk Lokal Naik Kelas",
      description: "Memperkuat potensi UMKM dalam menghadapi pasar digital."
    }
  ];

  return (
    <section className="py-20 px-6 bg-green-600">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Dampak yang Ingin Dicapai</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {impacts.map((impact, index) => (
          <div key={index} className="p-6">
            <h3 className="text-3xl font-bold text-green-700 text-white">{impact.value}</h3>
            <p className="text-gray-700 text-white">{impact.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;