import React from "react";

function AlbumCard({ title, image, id, handleClick }) {
  return (
    <div className="AlbumCard" onClick={() => handleClick(id)}>
      <div className="imageContainer">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default AlbumCard;
