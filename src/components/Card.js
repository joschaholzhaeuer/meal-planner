import React from 'react';

const Card = ({ meal }) => {
  return (
    <article className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <figure className="aspect-w-16 aspect-h-9">
        <img className="w-full h-full object-cover rounded-t-xl" src={meal.image} alt="" />
      </figure>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{meal.name}</h3>
        <p className="mt-1 text-gray-800 dark:text-gray-400">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="https://dreiqbik.de">
          Go somewhere
        </a>
      </div>
    </article>
  )
}

export default Card;
