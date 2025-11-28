import React from 'react';

interface SolutionItem {
  title: string;
  description: string;
}

const SolutionsSection: React.FC = () => {
  const solutions: SolutionItem[] = [
    {
      title: "Edukasi UMKM",
      description: "Materi bisnis, pemasaran digital, dan manajemen keuangan untuk UMKM."
    },
    {
      title: "Kampanye Lingkungan",
      description: "Edukasi gaya hidup ramah lingkungan untuk keluarga & pelaku usaha."
    },
    {
      title: "Promosi Produk Lokal",
      description: "Katalog digital untuk membantu promosi produk UMKM daerah."
    }
  ];

  return (
    <section id="fitur" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Solusi yang Ditawarkan</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div key={index} className="p-6 bg-gray-50 shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;