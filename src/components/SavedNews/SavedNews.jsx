import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.js";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard.jsx";

export default function SavedNews() {
  const { savedCards } = useContext(AppContext);

  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <section className="saved-news__cards">
        {savedCards.map((card) => (
          <NewsCard key={card.url} card={card} />
        ))}
      </section>
    </div>
  );
}
