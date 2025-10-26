// src/components/Card.jsx
import React from "react";
 // add new styles here

const Card = ({ title, images = [], onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="image-stack">
        {images.slice(0, 3).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title}-${i}`}
            className={`stack-img img-${i}`}
          />
        ))}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Card;
