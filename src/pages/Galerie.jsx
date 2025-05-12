import { useState } from 'react';
import eventsData from '../data/pastEvents.json';
import Gallery from '../components/ui/Gallery';
import LatestEvents from '../components/LatestEvents';
import Separator from '../components/ui/Separator';
import { 
  GiPerspectiveDiceSixFacesRandom,
  GiPerspectiveDiceOne,
  GiPerspectiveDiceTwo,
  GiPerspectiveDiceThree,
  GiPerspectiveDiceFour,
  GiPerspectiveDiceSix,
} from "react-icons/gi";

const Galerie = () => {
  const allPhotos = eventsData.flatMap(event => {
    const photos = [];
  
    if (event.photo_cover) {
      photos.push({
        src: event.photo_cover,
        type: 'cover',
        event: {
          id: event.id,
          title: event.title,
          date: event.date,
          lieu: event.lieu,
        }
      });
    }
  
    if (event.gallery_photos) {
      photos.push(
        ...event.gallery_photos.map(photo => ({
          src: photo,
          type: 'gallery',
          event: {
            id: event.id,
            title: event.title,
            date: event.date,
            lieu: event.lieu,
          }
        }))
      );
    }
  
    return photos;
  });

  const [shuffledPhotos, setShuffledPhotos] = useState(() => 
    [...allPhotos].sort(() => Math.random() - 0.5)
  );

  const [DiceIcon, setDiceIcon] = useState(() => GiPerspectiveDiceSixFacesRandom);

  const [isRotating, setIsRotating] = useState(false);

  const reshufflePhotos = () => {
  
    setIsRotating(true);
  
    setTimeout(() => {
      setShuffledPhotos([...allPhotos].sort(() => Math.random() - 0.5));
  
      const diceIcons = [
        GiPerspectiveDiceOne,
        GiPerspectiveDiceTwo,
        GiPerspectiveDiceThree,
        GiPerspectiveDiceFour,
        GiPerspectiveDiceSix,
      ];
  
      const currentIcon = DiceIcon;
      const availableIcons = diceIcons.filter(icon => icon !== currentIcon);
      const randomIndex = Math.floor(Math.random() * availableIcons.length);
      const newIcon = availableIcons[randomIndex];
  
      setDiceIcon(() => newIcon);
      setIsRotating(false);
    }, 450);
  };

  return (
    <section className="container mx-auto">
      <h3>Galerie photos</h3>
      <div className="flex justify-center mb-8">
        <button 
          onClick={reshufflePhotos}
          className="bg-transparent text-yellow-50 font-semibold cursor-pointer"
        >
          <DiceIcon 
            className={`text-white text-5xl transition-transform duration-450 ${isRotating ? 'rotate-[360deg]' : ''} hover:scale-110`} 
          />
        </button>
      </div>
      <Gallery photos={shuffledPhotos} />
      <Separator />
      <LatestEvents />
    </section>
  );
};

export default Galerie;
