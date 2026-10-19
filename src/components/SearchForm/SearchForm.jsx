import { useContext, useState } from "react";
import { TheContext } from "../../contexts/TheContext.js";
import "./SearchForm.css";

export default function SearchForm() {
  const { handleNewsSearch } = useContext(TheContext);
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value); // Actualiza keyword cuando cambie la entrada
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleNewsSearch(keyword);
  }

  return (
    <div className="seeker">
      {/* <div className="seeker__header">
        <h1 className="seeker__header-text">¿Qué está pasando en el mundo?</h1>
        <p className="seeker__header-info">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
        </p>
      </div> */}
      <form
        className="seeker__form form"
        name="newsSearch"
        onSubmit={handleSubmit}
      >
        <div className="form__header">
          <h1 className="form__title">¿Qué está pasando en el mundo?</h1>
          <p className="form__info">
            Encuentra las últimas noticias sobre cualquier tema y guárdalas en
            tu cuenta personal.
          </p>
        </div>

        <div className="form__search-bar">
          <input
            className="form__search-input"
            type="text"
            name="keyword"
            placeholder="Introduce un tema"
            required
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button className="form__search-button" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
