"use client";

import { useState } from "react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { useRouter } from 'next/router';


export default function CreateRestaurantPage() {
  const { user } = useUser();
  const [form, setForm] = useState({
    name: "",
    address: "",
    image: "",
    category: "",
  });
  const [error, setError] = useState(""); // Adicionado para mensagens de erro

  // Função para transformar a categoria em slug
  const formatCategorySlug = (category) => {
    return category.toLowerCase().replace(/\s+/g, '-'); // Ex: "Lanches" -> "lanches"
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Você precisa estar logado para cadastrar um restaurante.");
      router.push('/login'); // Redireciona para a página de login
      return;
    }

    const newRestaurant = {
      ...form,
      category: formatCategorySlug(form.category),
      userId: user.id,
    };

    try {
      const response = await fetch('http://localhost:3000/admin/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Restaurante cadastrado com sucesso:", result);
      } else {
        setError(result.message || 'Erro ao cadastrar restaurante');
      }
    } catch (error) {
      setError('Erro na conexão com o servidor.');
    }
  };




  return (
    <div className="max-w-7xl mx-auto flex gap-12 p-10">
      {/* Usuário */}
      <div className="w-[300px] bg-white p-6 rounded-2xl shadow-md border text-sm flex flex-col items-center">
        <h3 className="font-bold text-xl mb-4 text-center">Informações do Usuário</h3>
        {user ? (
          <>
            <img
              src={user.imageUrl}
              alt="Avatar"
              className="w-20 h-20 rounded-full border mb-4"
            />
            <p className="font-semibold text-center">{user.fullName}</p>
            <p className="text-gray-600 text-center text-sm mb-2">
              {user.primaryEmailAddress?.emailAddress}
            </p>
            <div className="text-xs text-gray-500 break-words text-center mb-4">
              <p><strong>ID:</strong> {user.id}</p>
            </div>

            <a
              href="https://clerk.com/user"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg text-center text-sm transition mb-2"
            >
              Editar Perfil
            </a>

            <SignOutButton>
              <button className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg text-sm transition">
                Sair
              </button>
            </SignOutButton>
          </>
        ) : (
          <p className="text-center text-gray-500">Carregando...</p>
        )}
      </div>

      {/* Formulário */}
      <div className="flex-1 bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Cadastrar Restaurante</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          {/* Exibe a mensagem de erro se o usuário não estiver autenticado */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label className="block font-semibold mb-1">Nome do Restaurante</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              placeholder="Ex: Subway"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Endereço</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              placeholder="Ex: Rua tal, 123"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">URL da Imagem</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Categoria</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              placeholder="Ex: Lanches, Japonesa, Pizza..."
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-gray-900 transition"
          >
            Cadastrar Restaurante
          </button>
        </form>
      </div>
    </div>
  );
}
