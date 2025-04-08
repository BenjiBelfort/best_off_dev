

const CardPartner = ({ partner }) => {
  // Composant interne qui définit la structure de la card
  const CardContent = () => (
    <div className="flex flex-col items-center">
      {/* Zone d'affichage du logo */}
      <div
        className={`w-40 h-32 flex items-center justify-center overflow-hidden ${
          partner.background === 'white' ? 'bg-white' : ''
        }`}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-w-full max-h-full object-contain p-2"
        />
      </div>
      {/* Zone d'affichage du nom */}
      <div className="w-40 h-12 flex items-center justify-center">
        <p className="text-center text-sm text-white">{partner.name}</p>
      </div>
    </div>
  );

  return partner.website ? (
    <a href={partner.website} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
      <CardContent />
    </a>
  ) : (
    <CardContent />
  );
};

export default CardPartner;
