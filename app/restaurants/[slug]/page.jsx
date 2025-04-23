"use client";

import { useParams } from "next/navigation";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";

const mockRestaurants = {
  subway: {
    name: "Subway",
    rating: 4.5,
    reviews: 32,
    address: "Ipiranga Gas/C-Store - R. Dr. João Colin, 1809",
    banner: "/banner.png",
    menuCategories: ["Pratos Principais", "Bebidas", "Carnes"],
    menuItems: [
      {
        name: "Sanduíche",
        price: "R$ 19,90",
        description: "lorem ipsum lore lore impsum",
        image: "/ham.jpg",
      },
    ],
  },
  mcdonalds: {
    name: "McDonald's",
    rating: 4.2,
    reviews: 128,
    address: "Av. Central, 123 - Centro",
    banner: "/teste.png",
    menuCategories: ["Lanches", "Bebidas", "Sobremesas"],
    menuItems: [
      {
        name: "Big Mac",
        price: "R$ 24,90",
        description: "O clássico hambúrguer do McDonald's",
        image: "/ham.jpg",
      },
    ],
  },
};

export default function RestaurantPage() {
  const { slug } = useParams();
  const restaurants = mockRestaurants[slug];

  if (!restaurants) {
    return <div className="p-4">Restaurante não encontrado</div>;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Banner */}
      <div className="w-full h-[220px] rounded-xl overflow-hidden mb-4">
        <Image
          src={restaurants.banner}
          alt="banner"
          width={1000}
          height={220}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <h2 className="text-3xl font-bold">{restaurants.name}</h2>
      <div className="flex items-center gap-2 text-gray-500 mt-1">
        <Star className="text-yellow-500 w-5 h-5" />
        <span>{restaurants.rating} ({restaurants.reviews})</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 mt-1">
        <MapPin className="w-5 h-5" />
        <span>{restaurants.address}</span>
      </div>

      {/* Tabs */}
      <div className="mt-4">
        <div className="flex gap-4 border-b">
          <button className="border px-4 py-1 bg-gray-200 text-black rounded-t-md">Categorias</button>
          <button className="text-gray-500">Sobre</button>
          <button className="text-gray-500">Avaliações</button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex gap-10 mt-6">
        {/* Sidebar */}
        <div className="w-1/4 space-y-3">
          {restaurants.menuCategories.map((cat, idx) => (
            <p key={idx} className="font-semibold">{cat}</p>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="w-3/4 grid grid-cols-2 gap-6">
          {Array(4).fill(restaurants.menuItems[0]).map((item, idx) => (
            <div key={idx} className="border rounded-xl p-3 flex gap-3 items-start">
              <Image src={item.image} alt="produto" width={80} height={80} className="rounded-lg" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.price}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
