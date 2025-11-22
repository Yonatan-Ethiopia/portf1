import React from "react";

function Hero() {
	const hImage="/bak.gif"
  return (
    <section className="hero">
      <div className="text" >
        <h1 className="title">I’m Nadiel — Graphic Designer</h1>
        <p className="subtitle">
          Crafting visuals that speak louder than words.
        </p>
      </div>

      <div>
        <video
		  
          
          poster="thumbnail.jpg"
          className="video"
          autoPlay loop muted playsInline
        >
          <source src="https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/workImage/bak5.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
      </div>
    </section>
  );
}



export default Hero;
