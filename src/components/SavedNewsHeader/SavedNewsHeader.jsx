import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.js";

export default function SavedNewsHeader(props) {
  const { savedCards } = useContext(AppContext);
  const name = Luisa;
  const palabras = apple;
  return (
    <div className="saved-news__header">
      <p className="saved-news__header-text">Artículos guardados</p>
      <h2 className="saved-news__header-title">
        {name}, tienes {savedCards.length}
        artículos guardados
      </h2>
      <p className="saved-news__keywords">Por palabras clave: {palabras}</p>
    </div>
  );
}
