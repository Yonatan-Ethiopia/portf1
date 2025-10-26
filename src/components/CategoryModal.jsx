import React from "react";
import '../styles.css';
import allWork from "../data/allWork"
function CategoryModal({ category, onClose }) {
  const works = {
    Posters: ["/gif2.mp4", "/gif3.mp4", "/gif1.mp4"],
    Branding: ["/endu1.jpg", "/endu2.jpg", "/gif4.gif"],
    Videos: ["/gif2.mp4", "/gif3.mp4"],
  };

  const items2 = works[category] || [];
   const items = allWork.filter(
    p => p.category === category 
  );
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal"
        
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">
          <h2 className="title">{category}</h2>
          <button className="close-btn" onClick={onClose} >×</button>
        </div>

        <div className="grid">
          {items.map((item, index) => {
			  const isVideo = item.file.endsWith(".mp4");
  return isVideo ? (
    <video
      key={index}
      className="thumb"
      src={item.file}
      autoPlay
      loop
      muted
      playsInline
    />
  ) :       (
            <img
              className="thumb"
              key={index}
              src={item.file}
              alt={category}
              
            /> )
          })}
        </div>
      </div>
    </div>
  );
}


export default CategoryModal;

