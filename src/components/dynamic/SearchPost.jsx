function SearchPost() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 w-full mx-auto bg-slate-800 rounded-lg px-2 border-2 border-transparent transition-colors duration-200 focus-within:border-cyan-300">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#d1d5db"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <form className="flex gap-x-4">
          <input
            className="bg-transparent text-gray-300 focus:outline-none"
            type="text"
            formAction="search"
            placeholder="Buscar artículo..."
          />
          <input
            className="text-gray-300 font-medium cursor-pointer transition-colors duration-200 hover:text-cyan-300
            "
            type="submit"
            value="Buscar"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchPost;