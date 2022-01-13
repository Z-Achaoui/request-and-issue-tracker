import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { url, imgLink, title, description } = props;
  return (
    <Link to={url}>
      <div className="flex flex-col justify-start items-center w-60 h-80 p-4 mx-8 my-4 text-sm shadow-md rounded-lg bg-cyan-50 hover:scale-105 transition duration-150 ease-out">
        <header className="flex flex-col w-full h-1/2 shadow-md rounded-b-md items-center justify-center bg-slate-50">
          <img src={imgLink} alt="Badge" className="w-6/12" />
          <span className="my-1 capitalize font-bold text-cyan-700 text-lg">
            {title}
          </span>
        </header>
        <section className="flex-auto w-full mt-2 text-justify text-cyan-900">
          {description}
        </section>
        <footer className="w-full my-1 underline italic text-cyan-700 font-semibold">
          <span>Explore...</span>
        </footer>
      </div>
    </Link>
  );
}

export default Card;
