import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
    return (
      <section id="contact" className="scroll-mt-20 mx-auto max-w-3xl px-4 py-8 text-center text-white h-[70vh]">
        <h3>Contact</h3>
  
        <p className="mb-2">
          Contactez-nous par email à{" "}
          <a
            href="mailto:bestoffmusic90@gmail.com?subject=Demande%20d'information&body=Bonjour%20BEST%20OFF',%0A%0AJe%20souhaite%20obtenir%20plus%20d'informations%20sur..."
            className="underline decoration-red-400 hover:text-red-400"
          >
            bestoffmusic90@gmail.com
          </a>
        </p>
        <p className="mt-4">Président de l'association :</p>
        <p className="font-bold">Roland CIBIL</p>
        <p>06 77 26 87 32</p>
  
        <p className="my-4">et retrouvez-nous sur les réseaux sociaux :</p>
  
        <div className="flex justify-center gap-6 pt-6">
          <a
            href="https://www.instagram.com/bestoff90300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
            />
          </a>
          <a
            href="https://www.facebook.com/musicbestoff/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
            />
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  