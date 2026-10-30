import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.js";
import NewsCard from "../NewsCard/NewsCard.jsx";
import { CARDS_PER_PAGE } from "../../utils/Constants.js";
import "./NewsCardList.css";

export default function NewsCardList() {
  const { cards, count, setCount } = useContext(AppContext);
  return (
    <>
      <div className="cardList__content">
        {cards.slice(0, count).map((card) => (
          <NewsCard key={card.url} card={card} />
        ))}
      </div>
      {count < cards.length && (
        <button
          type="button"
          className="cardList__content-button"
          onClick={() => setCount(count + CARDS_PER_PAGE)}
        >
          Ver más
        </button>
      )}
    </>
  );
}
