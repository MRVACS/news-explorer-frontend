import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext.js";
import NewsCard from "../NewsCard/NewsCard.jsx";
import "./NewsCardList.css";

export default function NewsCardList() {
  /*   const [count, setCount] = useState(3); */
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
          onClick={() => setCount(count + 3)}
        >
          Ver más
        </button>
      )}
    </>
  );
}
