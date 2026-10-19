import { useContext } from "react";
import { TheContext } from "../../contexts/TheContext.js";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

export default function SavedNews(props) {
  const { savedCards } = useContext(TheContext);

  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <section className="saved-news__cards">
        {savedCards.map((card) => (
          <NewsCard key={card.id} card={card} />
        ))}
      </section>
    </div>
  );
}
