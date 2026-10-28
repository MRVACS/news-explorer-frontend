import bookmarkIcon from "../../images/bookmark.png";
import "./NewsCard.css";

export default function NewsCard(props) {
  const { urlToImage, title, description, publishedAt, source } = props.card;
  const date = new Date(publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="card">
      <button
        className="card__save-button"
        type="button"
        aria-label="Guardar Noticia"
      >
        <img
          className="card__save-icon"
          src={bookmarkIcon}
          alt="Guardar noticia"
        />
      </button>
      <img className="card__image" src={urlToImage} alt={title} />
      <p className="card__date">{date}</p>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <h3 className="card__source">{source.name}</h3>
    </div>
  );
}
