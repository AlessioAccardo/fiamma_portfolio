import { useState, useEffect, useCallback } from 'react';

function Gallery() {
  // 1. Il nostro array di immagini (sostituisci con i tuoi URL)
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpeg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
    "/gallery/img16.jpg",
    "/gallery/img17.jpg",
    "/gallery/img18.jpg",
    "/gallery/img19.jpg",
    "/gallery/img20.jpg"
  ];

  // 2. Lo stato che tiene traccia dell'immagine aperta
  // Inizialmente è null (nessuna immagine aperta)
  const [currentIndex, setCurrentIndex] = useState(null);

  // --- LOGICA DI NAVIGAZIONE ---
  // Usiamo useCallback per "memorizzare" queste funzioni.
  // È necessario perché le useremo dentro useEffect.

  const closeModal = useCallback(() => {
    setCurrentIndex(null);
  }, []);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation(); // Evita conflitti col click sullo sfondo
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation(); // Evita conflitti col click sullo sfondo
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);


  // --- 🌟 NUOVO: LOGICA DELLA TASTIERA (useEffect) 🌟 ---
  useEffect(() => {
    // Definire la funzione che gestisce il tasto premuto
    const handleKeyDown = (event) => {
      // Se la galleria è chiusa (currentIndex è null), non fare nulla
      if (currentIndex === null) return;

      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    // 1. Aggiungere l'ascoltatore globalmente quando la galleria è aperta
    if (currentIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    // 2. FUNZIONE DI PULIZIA (Smontaggio)
    // React esegue questa funzione PRIMA di rieseguire l'effect
    // e quando il componente viene rimosso. È FONDAMENTALE per evitare bug.
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [currentIndex, nextImage, prevImage, closeModal]); // Dipendenze dell'effect


  return (
    <div>
      {/* --- GRIGLIA (come prima) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Anteprima ${index}`}
            className="w-full h-48 object-cover cursor-pointer rounded-lg hover:opacity-80 transition"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* --- OVERLAY (LightBox) --- */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal} 
        >
          {/* Bottoni, Freccia Dx, Immagine, Freccia Sx (come prima) */}
          <button className="absolute top-4 right-6 text-white text-4xl" onClick={closeModal}>&times;</button>
          
          <button className="absolute left-4 text-white text-5xl p-2" onClick={prevImage}>&#10094;</button>

          <img 
            src={images[currentIndex]} 
            alt={`Grande ${currentIndex}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()} 
          />

          <button className="absolute right-4 text-white text-5xl p-2" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;