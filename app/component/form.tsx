export const Footer = () => {
  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Prénom"
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#aa5949] transition duration-200"
        required
      />
      <input
        type="text"
        placeholder="Nom"
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#aa5949] transition duration-200"
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#aa5949] transition duration-200"
        required
      />
      <input
        type="tel"
        placeholder="Téléphone"
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#aa5949] transition duration-200"
      />
      <select
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#aa5949] transition duration-200"
        required
      >
        <option value="" disabled selected>
          Choisissez une option
        </option>
        <option value="séance photo">Séance photo</option>
        <option value="événement">Événement</option>
        <option value="autre">Autre</option>
      </select>
      <textarea
        placeholder="Message"
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#aa5949] transition duration-200"
        required
      />
      <input
        type="text"
        placeholder="Comment avez-vous entendu parler de moi ?"
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#aa5949] transition duration-200"
      />
      <button className="border-2 border-[#aa5949] bg-[#aa5949] text-white px-4 py-2 font-semibold rounded-sm hover:bg-[#aa5949]/80 transition-colors duration-300 hover:cursor-pointer">
        Envoyer
      </button>
    </form>
  );
};
