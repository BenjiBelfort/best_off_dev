const Contact = () => {
  return (
    <div>
        <h2 className="text-5xl text-center">Contact</h2>
        <p className="text-2xl">Pour toute demande de contact, veuillez remplir le formulaire ci-dessous :</p>
        <form className="flex flex-col items-center">
            <input type="text" placeholder="Nom" className="border border-gray-300 rounded p-2 mb-4 w-1/2"/>
            <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2 mb-4 w-1/2"/>
            <textarea placeholder="Message" className="border border-gray-300 rounded p-2 mb-4 w-1/2"></textarea>
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Envoyer</button>
        </form>
    </div>
  );
};

export default Contact;
