import "./PopupWithForm.css";

export default function PopupWithForm(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <button className="popup__close-button" onClick={onClose}>
        X
      </button>
      <div className="popup__content">
        {title && <h2 className="popup__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
