import React from 'react';
import { Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Tuta personalizzabile"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tute Personalizzabili di Alta Qualità</h1>
          <p className="text-xl mb-8">Crea il tuo stile unico con le nostre tute su misura</p>
          <button className="btn-primary text-lg">Personalizza Ora</button>
        </div>
      </section>

      {/* Nuovi Arrivi */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuovi Arrivi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${item}/400/300`}
                  alt={`Nuovo arrivo ${item}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Tuta Sport Pro {item}</h3>
                  <p className="text-gray-600 mb-4">La perfezione incontra il comfort</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">€129.99</span>
                    <button className="btn-secondary">Aggiungi al carrello</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recensioni dei clienti */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Cosa dicono i nostri clienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://i.pravatar.cc/60?img=${item}`}
                    alt={`Cliente ${item}`}
                    className="rounded-full mr-4 w-12 h-12"
                  />
                  <div>
                    <h3 className="font-semibold">Cliente Soddisfatto {item}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Le tute personalizzabili di TutePro sono semplicemente fantastiche. La qualità è eccezionale e il processo di personalizzazione è intuitivo. Consiglio vivamente!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;