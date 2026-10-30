import "./LoadingCircle.css";

export default function PreLoader() {
  return (
    <div className="preloader">
      <i className="preloader__circle"></i>
      <p className="preloader__text">Buscando noticias...</p>
    </div>
  );
}
