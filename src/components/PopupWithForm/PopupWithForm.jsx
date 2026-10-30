import { useEffect } from "react";
import "./PopupWithForm.css";

export default function PopupWithForm(props) {
  const { onClose, title, children } = props;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="popup"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="popup__close-button"
        aria-label="Cerrar Ventana"
        type="button"
        onClick={onClose}
      >
        X
      </button>
      <div className="popup__content">
        {title && <h2 className="popup__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
