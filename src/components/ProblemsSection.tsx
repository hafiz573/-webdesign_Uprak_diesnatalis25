import React from 'react';

const ProblemsSection: React.FC = () => {
  return (
    <section id="masalah" className="py-20 px-6 bg-green-600">
      <div className="container mx-auto text-white">
        
        {/* Slider */}
        <div className="flex justify-center mb-12">
          <div 
            id="ecoCarousel" 
            className="carousel slide w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl" 
            data-bs-ride="carousel" 
            data-bs-interval="4000"
          >
            <div className="carousel-inner">
              {/* Fixed height container for 16:9 ratio */}
              <div className="carousel-item active">
                <div className="w-full h-80 md:h-96 lg:h-[500px]"> {/* Adjust height as needed */}
                  <img 
                    src='images/r.jpeg'
                    className="w-full h-full object-cover" 
                    alt="Environmental issue 1" 
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="w-full h-80 md:h-96 lg:h-[500px]">
                  <img 
                    src="images/p.jpeg" 
                    className="w-full h-full object-cover" 
                    alt="Environmental issue 2" 
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="w-full h-80 md:h-96 lg:h-[500px]">
                  <img 
                    src="images/z.jpeg" 
                    className="w-full h-full object-cover" 
                    alt="Environmental issue 3" 
                  />
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <button 
              className="carousel-control-prev" 
              type="button" 
              data-bs-target="#ecoCarousel" 
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-white rounded-full p-3"></span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              data-bs-target="#ecoCarousel" 
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-white rounded-full p-3"></span>
            </button>
          </div>
        </div>

        {/* Problems Content */}
        <h2 className="text-4xl font-bold text-center mb-12">Masalah yang Kami Hadapi</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">Tantangan UMKM</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Keterbatasan teknologi dan pemasaran digital.</li>
              <li>Kurangnya edukasi pengelolaan bisnis modern.</li>
              <li>Produk lokal sulit menjangkau pasar luas.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Permasalahan Lingkungan</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Kurangnya edukasi gaya hidup ramah lingkungan.</li>
              <li>Penggunaan bahan yang tidak ramah alam.</li>
              <li>Tingginya limbah oleh usaha kecil dan rumah tangga.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;