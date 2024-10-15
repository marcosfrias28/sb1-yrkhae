import Image from 'next/image'
import Header from '../components/Header'
import { Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 text-white">
        <Image
          src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Tuta personalizzabile"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
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
                <Image
                  src={`https://picsum.photos/seed/${item}/400/300`}
                  alt={`Nuovo arrivo ${item}`}
                  width={400}
                  height={300}
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
                  <Image
                    src={`https://i.pravatar.cc/60?img=${item}`}
                    alt={`Cliente ${item}`}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TutePro</h3>
            <p className="text-gray-400">Tute personalizzabili di alta qualità per ogni occasione.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><Link href="/personalizza" className="text-gray-400 hover:text-white transition">Personalizza</Link></li>
              <li><Link href="/collezione" className="text-gray-400 hover:text-white transition">Collezione</Link></li>
              <li><Link href="/chi-siamo" className="text-gray-400 hover:text-white transition">Chi Siamo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <p className="text-gray-400">Email: info@tutepro.com</p>
            <p className="text-gray-400">Tel: +39 123 456 7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Seguici</h4>
            <div className="flex space-x-4">
              {/* Qui puoi aggiungere le icone dei social media */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 TutePro. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </main>
  )
}