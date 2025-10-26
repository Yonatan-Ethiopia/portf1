import React, { useState } from "react";
import CategoryModal from "./CategoryModal";
import Card from "./Card";
import allWork from "../data/allWork";

function WorkSection() {
  const categories = [
    { name: "Poster", image: "/shein9.jpg" },
    { name: "Logo", image: "/shein11.jpg" },
    
    { name: "Thumbnail", image:""},
    { name: "Mock up", image: "/shein11.jpg" }
  ];

  // Flat array of images with category field
  const allImages = [
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/poster1.jpg", category: "Poster" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/poster2.jpg", category: "Poster" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/poster3.jpg", category: "Poster" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/logo1.png", category: "Logo" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/logo2.webp", category: "Logo" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/logo3.jpg", category: "Logo" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/thumbnail1.jpg", category: "Thumbnail" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/thumbnail2.png", category: "Thumbnail" },
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/thumbnail3.png", category: "Thumbnail"},
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/mok1.jpg", category:"Mock up"},
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/mok2.jpg", category:"Mock up"},
    { image: "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/mok3.jpg", category:"Mock up"}
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="work" className="section">
      <h2 className="heading">Selected Work</h2>
      <p className="subtext">Explore my creative projects below</p>

      <div className="grid">
        {categories.map((cat, index) => {
          // Filter only 3 images per category
          const categoryImages = allImages
            .filter((img) => img.category === cat.name)
            .slice(0, 3)
            .map((img) => img.image);

          return (
            <Card
              key={index}
              title={cat.name}
              images={categoryImages}
              onClick={() => setSelectedCategory(cat.name)}
            />
          );
        })}
      </div>

      {selectedCategory && (
        <CategoryModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </section>
  );
}

export default WorkSection;

