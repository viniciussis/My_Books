import { useState } from "react";
import "./Search.css";
import { bookData } from "../../data/libraryData";

function Search() {
  const [research, setResearch] = useState([]);
  function researching(event) {
    setResearch(
      bookData.filter((book) => book.name.includes(event.target.value))
    );
  }
  return (
    <div className="search">
      <h1 className="search__title">Já sabe por onde começar?</h1>
      <h2 className="search__subtitle">
        Encontre seu livro em nossa estante...
      </h2>
      <input
        className="search__bar"
        placeholder="Digite o livro que deseja buscar..."
        type="text"
        onBlur={researching}
      />
      {research.map(book => (
        <div>
          <p>{book.name}</p>
          <img src={book.src} alt="Livro" />
        </div>
      ))}
    </div>
  );
}

export default Search;
