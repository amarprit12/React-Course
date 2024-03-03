import React from "react";

function MovieCard() {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl
      hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg)`,
      }}
    >
      MovieCard
    </div>
  );
}

export default MovieCard;
