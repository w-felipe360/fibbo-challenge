import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Modal from "./Modal"; // Importar o componente Modal

const Sidebar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setModalTitle("Oops! 😅");
    setModalMessage("Ainda estamos trabalhando nisso");
    setIsModalOpen(true);
  };

  return (
    <>
      <aside className="hidden lg:flex flex-col w-[19%] bg-white p-4 rounded-lg overflow-y-auto shadow-lg scrollbar-hidden pb-30">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Siga-nos</h2>
          <div className="flex flex-col space-y-4">
            <a
              href="https://facebook.com"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaFacebookSquare size={30} className="mr-2" />
              Facebook
            </a>
            <a
              href="https://instagram.com"
              className="flex items-center text-pink-500 hover:text-pink-600"
            >
              <FaInstagramSquare size={30} className="mr-2" />
              Instagram
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center text-blue-400 hover:text-blue-600"
            >
              <FaTwitterSquare size={30} className="mr-2" />
              Twitter
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Inscreva-se na Newsletter
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </aside>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          title={modalTitle}
          message={modalMessage}
        />
      )}
    </>
  );
};

export default Sidebar;
