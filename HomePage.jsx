import React from 'react';
import ProductPreviewCard from '../components/ProductPreviewCard';
import MilkTea from '../assets/pngtree-milk-tea-ice-cream-dessert-png-image_9097072.png';

export default function HomePage() {
  const product = {
    image: MilkTea,
    title: "Milk Tea Special",
    description: "A refreshing drink with pearls and cream.",
    price: 99,
    oldPrice: 120,
    badge: "Cold",
    rating: 4.5,
  };

  return (
    <main style= {{ padding: '25px' }}>
      <h1>Welcome to My Shop</h1>

      {/* 👇 here we add bgColor */}
      <ProductPreviewCard
        product={product}
        bgColor="linear-gradient(135deg, #ffe5ec, #ffffff)" // soft pink gradient
        onAddToCart={(p) => alert(`${p.title} added to cart!`)}
      />
    </main>
  );
}
