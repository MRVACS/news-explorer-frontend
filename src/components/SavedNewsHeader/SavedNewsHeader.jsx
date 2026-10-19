import { useContext } from "react";
import { TheContext } from "../../contexts/TheContext.js";

export default function SavedNewsHeader(props) {
  const { savedCards } = useContext(TheContext);
  <div className="saved-news__header">
    <p className="saved-news__header-text">Artículos guardados</p>
    <h2 className="saved-news__header-title">
      {}, tienes {savedCards.length}
      artículos guardados
    </h2>
    <p className="saved-news__keywords">Por palabras clave: {}</p>
  </div>;
}
