import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={props.url}>
      <div className="flex flex-col justify-center items-start w-60 h-80 p-4 m-4 text-sm shadow-md rounded-lg hover:scale-105 transition duration-150 ease-out">
        <header className="flex flex-col w-full h-1/2 shadow-md rounded-b-md items-center justify-center">
          <img src={props.imgLink} alt="Badge" className="w-6/12" />
          <span className="my-1 capitalize font-bold text-cyan-700 text-lg">
            {props.title}
          </span>
        </header>
        <section className="w-full mt-2 text-justify text-cyan-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti
          saepe consequuntur. Perspiciatis, facere. Facere de
        </section>
        <footer className="w-full my-1 underline italic text-cyan-700 font-semibold">
          <span>Learn more...</span>
        </footer>
      </div>
    </Link>
  );
}

export default Card;
